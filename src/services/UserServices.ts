import { AnswerWithId } from "../interfaces/answerInterfaces";
import { CommentWithId } from "../interfaces/commentInterfaces";
import { AnswerModel } from "../models/Answers";
import { CommentModel } from "../models/Comments";
import { ExerciseModel } from "../models/Exercises";
import { PostModel } from "../models/Posts";
import { TheoricModel } from "../models/Theorics";


export async function deleteCommentsInAnswerByPostOrOwner({ by: by, input: id }: {
  by: "owner" | "post"
  input: string | any
}): Promise<undefined | Object> {

  if (by === "owner") {
    /**
    * @Definición borra todos los comentarios de las answers del usuario que se quiere eliminar
    * de esta forma no quedan comentarios sin answer que no se renderizarán, ahorrando y optimizando
    * espacio de storage.
    */
    const answersByOwner = await AnswerModel.find({ owner: id });

    if (answersByOwner.length) {

      const commentsInAnswerByOwner = await Promise.all(
        answersByOwner?.map(async (answer) => {
          const auxCommentsDeleted = await CommentModel.deleteMany({ answer: answer._id })
          return auxCommentsDeleted.deletedCount
        })
      );

      const commentsInAnswerByOwnerTotalDeleted = commentsInAnswerByOwner.reduce((acc, el) => acc + el, 0)

      console.log(`
      Se han:
      - Eliminado ${commentsInAnswerByOwnerTotalDeleted} comentarios en las \n
      respuestas del usuario id ${id}.
    `)

      return { commentsInAnswerByOwnerTotalDeleted: commentsInAnswerByOwnerTotalDeleted }
    }

  } else if (by === "post") {
    /**
    * @Definición borra todos los comentarios de las answers del post que se quiere eliminar
    * de esta forma no quedan comentarios sin answer que no se renderizarán, ahorrando y optimizando
    * espacio de storage.
    */
    const answersByPost = await AnswerModel.find({ post: id });

    if (answersByPost.length) {

      const commentsInAnswerByPost = await Promise.all(
        answersByPost?.map(async (answer) => {
          const auxCommentsDeleted = await CommentModel.deleteMany({ answer: answer._id })
          return auxCommentsDeleted.deletedCount
        })
      );

      const commentsInAnswerByPostTotalDeleted = commentsInAnswerByPost.reduce((acc, el) => acc + el, 0)

      console.log(`
        Se han:
        - Eliminado ${commentsInAnswerByPostTotalDeleted} comentarios en las \n
        respuestas del post id ${id}.
      `)
      return { commentsInAnswerByPostTotalDeleted: commentsInAnswerByPostTotalDeleted }
    }
  } 
}

export async function findOrDeleteAllChildsFromPostByOwnerOrPost({ method: method, by: type, input: id }: {
  method: "find" | "delete"
  by: "owner" | "post"
  input: string | any
}): Promise<Object | undefined> {

  switch (method) {
    case "find":
      switch (type) {
        case "owner":
          const postsByOwner = await PostModel.find({ owner: id })

          const auxAnswersFromPostsByOwner = await Promise.all(
            postsByOwner?.map(
              async (post) => {
                const auxAnswersFromPost = await AnswerModel.find({ post: post._id })
                return auxAnswersFromPost
              }
            )
          )

          let answersFromPostsByOwner: Array<AnswerWithId> = []
          auxAnswersFromPostsByOwner?.map(
            arrayAnswers => { answersFromPostsByOwner = answersFromPostsByOwner.concat(arrayAnswers) }
          )

          const auxCommentsFromAnswersByOwner = await Promise.all(
            answersFromPostsByOwner?.map(
              async (answer) => {
                const auxCommentsFromAnswer = await CommentModel.find({ answer: answer._id })
                return auxCommentsFromAnswer
              }
            )
          )
          let commentsFromAnswersByOwner: Array<CommentWithId> = []
          auxCommentsFromAnswersByOwner?.map(
            arrayComments => { commentsFromAnswersByOwner = commentsFromAnswersByOwner.concat(arrayComments) }
          )

          console.log(`
            En las creaciones del usuario id ${id} se han encontrado:
            - ${commentsFromAnswersByOwner.length} comentario/s:\n
            ${commentsFromAnswersByOwner}
            - ${answersFromPostsByOwner.length} respuesta/s:\n
            ${answersFromPostsByOwner}
            - ${postsByOwner.length} post/s:\n
            ${postsByOwner}
          `)
          return {
            commentsFromAnswersByOwner: {
              total: commentsFromAnswersByOwner.length,
              comments: commentsFromAnswersByOwner
            },
            answersFromPostsByOwner: {
              total: answersFromPostsByOwner.length,
              answers: answersFromPostsByOwner
            },
            postsByOwner: {
              total: postsByOwner.length,
              posts: postsByOwner
            },
          }
        case "post":
          const postsByPost = await PostModel.find({ _id: id })

          const auxAnswersFromPostsByPost = await Promise.all(
            postsByPost?.map(
              async (post) => {
                const auxAnswersFromPost = await AnswerModel.find({ post: post._id })
                return auxAnswersFromPost
              }
            )
          )

          let answersFromPostsByPost: Array<AnswerWithId> = []
          auxAnswersFromPostsByPost?.map(
            arrayAnswers => { answersFromPostsByPost = answersFromPostsByPost.concat(arrayAnswers) }
          )

          const auxCommentsFromAnswersByPost = await Promise.all(
            answersFromPostsByPost?.map(
              async (answer) => {
                const auxCommentsFromAnswer = await CommentModel.find({ answer: answer._id })
                return auxCommentsFromAnswer
              }
            )
          )
          let commentsFromAnswersByPost: Array<CommentWithId> = []
          auxCommentsFromAnswersByPost?.map(
            arrayComments => { commentsFromAnswersByPost = commentsFromAnswersByPost.concat(arrayComments) }
          )

          // const countAnswersFromPosts = auxAnswersFromPostsByPost?.reduce(( acc, el) => acc + el,0)
          //const countCommentsFromAnswers = commentsFromAnswersByPost?.reduce(( acc, el) => acc + el,0)

          console.log(`
            En el post ${id} del usuario se han encontrado:
            - Post:\n
            ${postsByPost}
            - ${commentsFromAnswersByPost.length} comentario/s:\n
            ${commentsFromAnswersByPost}
            - ${answersFromPostsByPost.length} respuesta/s:\n
            ${answersFromPostsByPost}
          `)
          return {
            commentsFromAnswersByPost: {
              total: commentsFromAnswersByPost.length,
              comments: commentsFromAnswersByPost
            },
            answersFromPostsByOwner: {
              total: answersFromPostsByPost.length,
              answers: answersFromPostsByPost
            },
            postsByPost: {
              total: postsByPost.length,
              posts: postsByPost
            },
          }
      }
    case "delete":
      switch (type) {
        case "owner":
          const postsByOwner = await PostModel.find({ owner: id })

          const auxAnswersFromPostsByOwner = await Promise.all(
            postsByOwner?.map(
              async (post) => {
                const auxAnswersFromPost = await AnswerModel.find({ post: post._id })
                return auxAnswersFromPost
              }
            )
          )

          let answersFromPostsByOwner: Array<AnswerWithId> = []
          auxAnswersFromPostsByOwner?.map(
            arrayAnswers => { answersFromPostsByOwner = answersFromPostsByOwner.concat(arrayAnswers) }
          )

          const auxCommentsFromAnswersByOwner = await Promise.all(
            answersFromPostsByOwner?.map(
              async (answer) => {
                const auxCommentsFromAnswer = await CommentModel.find({ answer: answer._id })
                return auxCommentsFromAnswer
              }
            )
          )
          let commentsFromAnswersByOwner: Array<CommentWithId> = []
          auxCommentsFromAnswersByOwner?.map(
            arrayComments => { commentsFromAnswersByOwner = commentsFromAnswersByOwner.concat(arrayComments) }
          )
          /**
           * @DeleteTimeComments
           */
          const countDeletedCommentsFromAnswersByOwner = await Promise.all(
            answersFromPostsByOwner?.map(
              async ( el ) => {
                const deletedCommentsFromAnswersByOwner = await CommentModel.deleteMany({answer:el._id})
                return deletedCommentsFromAnswersByOwner
              }
            )
          )
          const countDeletedCommentsTotalFromAnswersByOwner = countDeletedCommentsFromAnswersByOwner?.reduce(( acc, el) => acc + el.deletedCount,0)
          /**
           * @DeleteTimeAnswers
           */
          let countDeletedAnswersFromPostsByOwner = await Promise.all(
            postsByOwner?.map(
              async ( el ) => {
                const deletedAnswersFromPostsByOwner = await AnswerModel.deleteMany({post: el._id})
                return deletedAnswersFromPostsByOwner
              }
            )
          )
          const countDeletedAnswersTotalFromPostsByOwner = countDeletedAnswersFromPostsByOwner?.reduce(( acc, el) => acc + el.deletedCount,0)

          console.log(`
            En las creaciones del usuario id ${id} se han eliminado:
            - ${countDeletedCommentsTotalFromAnswersByOwner} comentario/s:\n
            ${commentsFromAnswersByOwner}
            - ${countDeletedAnswersTotalFromPostsByOwner} respuesta/s:\n
            ${answersFromPostsByOwner}
          `)
          return {
            commentsFromAnswersByOwner: {
              total: commentsFromAnswersByOwner.length,
              comments: commentsFromAnswersByOwner
            },
            answersFromPostsByOwner: {
              total: answersFromPostsByOwner.length,
              answers: answersFromPostsByOwner
            },
          }
        case "post":
          const postsByPost = await PostModel.find({ _id: id })

          const auxAnswersFromPostsByPost = await Promise.all(
            postsByPost?.map(
              async (post) => {
                const auxAnswersFromPost = await AnswerModel.find({ post: post._id })
                return auxAnswersFromPost
              }
            )
          )

          let answersFromPostsByPost: Array<AnswerWithId> = []
          auxAnswersFromPostsByPost?.map(
            arrayAnswers => { answersFromPostsByPost = answersFromPostsByPost.concat(arrayAnswers) }
          )

          const auxCommentsFromAnswersByPost = await Promise.all(
            answersFromPostsByPost?.map(
              async (answer) => {
                const auxCommentsFromAnswer = await CommentModel.find({ answer: answer._id })
                return auxCommentsFromAnswer
              }
            )
          )
          let commentsFromAnswersByPost: Array<CommentWithId> = []
          auxCommentsFromAnswersByPost?.map(
            arrayComments => { commentsFromAnswersByPost = commentsFromAnswersByPost.concat(arrayComments) }
          )
          /**
           * @DeleteTimeComments
           */
          const countDeletedCommentsFromAnswersByPost = await Promise.all(
            answersFromPostsByPost?.map(
              async ( el ) => {
                const deletedCommentsFromAnswersByPost = await CommentModel.deleteMany({answer:el._id})
                return deletedCommentsFromAnswersByPost
              }
            )
          )
          const countDeletedCommentsTotalFromAnswersByPost = countDeletedCommentsFromAnswersByPost?.reduce(( acc, el) => acc + el.deletedCount,0)
          /**
           * @DeleteTimeAnswers
           */
          let countDeletedAnswersFromPostsByPost = await Promise.all(
            postsByPost?.map(
              async ( el ) => {
                const deletedAnswersFromPostsByPost = await AnswerModel.deleteMany({post: el._id})
                return deletedAnswersFromPostsByPost
              }
            )
          )
          const countDeletedAnswersTotalFromPostsByPost = countDeletedAnswersFromPostsByPost?.reduce(( acc, el) => acc + el.deletedCount,0)

          console.log(`
            En las creaciones del usuario id ${id} se han eliminado:
            - ${countDeletedCommentsTotalFromAnswersByPost} comentario/s:\n
            ${commentsFromAnswersByPost}
            - ${countDeletedAnswersTotalFromPostsByPost} respuesta/s:\n
            ${answersFromPostsByPost}
          `)
          return {
            commentsFromAnswersByPost: {
              total: commentsFromAnswersByPost.length,
              comments: commentsFromAnswersByPost
            },
            answersFromPostsByPost: {
              total: answersFromPostsByPost.length,
              answers: answersFromPostsByPost
            },
          }
      }
  }
}

/**
 * 
 * @param method "find" | "delete"
 * @param owner  string | any
 * @returns object
 */
export async function findOrdeleteAllCreatedByOwner({ method: method, owner: id }: {
  method: "find" | "delete"
  owner: "string" | any
}): Promise<Object | undefined> {
  if (method === "find") {


    /**
    * @Definición encuentra los comentarios del usuario que se quiere eliminar
    */
    const commentsByOwnerFounded = await CommentModel.find({ owner: id })

    /**
    * @Definición encuentra las respuestas del usuario que se quiere eliminar
    */
    const answersByOwnerFounded = await AnswerModel.find({ owner: id })

    /**
    * @Definición encuentra los posteos del usuario que se quiere eliminar
    */
    const postsByOwnerFounded = await PostModel.find({ owner: id })

    /**
    * @Definición encuentra los posteos teóricos del usuario que se quiere eliminar
    */
    const theoricsByOwnerFounded = await TheoricModel.find({ owner: id })
    /**
    * @Definición encuentra los ejercicios del usuario que se quiere eliminar
    */
    const exercisesByOwnerFounded = await ExerciseModel.find({ owner: id })

    const foundedCreationsByOwner = {
      commentsByOwnerFounded: {
        total: commentsByOwnerFounded.length,
        comments: commentsByOwnerFounded
      },
      answersByOwnerFounded: {
        total: answersByOwnerFounded.length,
        answers: answersByOwnerFounded
      },
      postsByOwnerFounded: {
        total: postsByOwnerFounded.length,
        posts: postsByOwnerFounded
      },
      theoricsByOwnerFounded: {
        total: theoricsByOwnerFounded.length,
        theorics: theoricsByOwnerFounded
      },
      exercisesByOwnerFounded: {
        total: exercisesByOwnerFounded.length,
        exercises: exercisesByOwnerFounded
      }

    }
    return foundedCreationsByOwner

  } else if (method === "delete") {

    /**
    * @Definición borra los comentarios del usuario que se quiere eliminar
    */
    const commentsByOwnerDeleted = await CommentModel.deleteMany({ owner: id })

    /**
    * @Definición borra las respuestas del usuario que se quiere eliminar
    */
    const answersByOwnerDeleted = await AnswerModel.deleteMany({ owner: id })

    /**
    * @Definición borra los posteos del usuario que se quiere eliminar
    */
    const postsByOwnerDeleted = await PostModel.deleteMany({ owner: id })

    /**
    * @Definición borra los posteos teóricos del usuario que se quiere eliminar
    */
    const theoricsByOwnerDeleted = await TheoricModel.deleteMany({ owner: id })
    /**
    * @Definición borra los ejercicios del usuario que se quiere eliminar
    */
    const exercisesByOwnerDeleted = await ExerciseModel.deleteMany({ owner: id })

    const deletedCreationsByOwner = {
      commentsByOwnerDeletedCount: commentsByOwnerDeleted.deletedCount,
      answersByOwnerDeletedCount: answersByOwnerDeleted.deletedCount,
      postsByOwnerDeletedCount: postsByOwnerDeleted.deletedCount,
      theoricsByOwnerDeletedCount: theoricsByOwnerDeleted.deletedCount,
      exercisesByOwnerDeletedCount: exercisesByOwnerDeleted.deletedCount,
    }

    return deletedCreationsByOwner
  }
}
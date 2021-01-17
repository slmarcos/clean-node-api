import { DbLoadAnswersBySurvey } from './db-load-answers-by-survey'
import { LoadAnswersBySurveyRepository } from './db-load-answers-by-survey-protocols'
import { mockSurveyModel, throwError } from '@/domain/test'
import { mockLoadAnswersBySurveyRepository } from '@/data/test'

type SutTypes = {
  sut: DbLoadAnswersBySurvey
  loadAnswersBySurveyRepositoryStub: LoadAnswersBySurveyRepository
}

const makeSut = (): SutTypes => {
  const loadAnswersBySurveyRepositoryStub = mockLoadAnswersBySurveyRepository()
  const sut = new DbLoadAnswersBySurvey(loadAnswersBySurveyRepositoryStub)
  return {
    sut,
    loadAnswersBySurveyRepositoryStub
  }
}

describe('DbLoadAnswersBySurvey', () => {
  test('Should call LoadAnswersBySurveyRepository', async () => {
    const { sut, loadAnswersBySurveyRepositoryStub } = makeSut()
    const loadAnswersSpy = jest.spyOn(loadAnswersBySurveyRepositoryStub, 'loadAnswers')
    await sut.loadAnswers('any_id')
    expect(loadAnswersSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return answers on success', async () => {
    const { sut } = makeSut()
    const answers = await sut.loadAnswers('any_id')
    expect(answers).toEqual([
      mockSurveyModel().answers[0].answer,
      mockSurveyModel().answers[1].answer
    ])
  })

  test('Should empty array if LoadAnswersBySurveyRepository returns []', async () => {
    const { sut, loadAnswersBySurveyRepositoryStub } = makeSut()
    jest.spyOn(loadAnswersBySurveyRepositoryStub, 'loadAnswers').mockReturnValueOnce(Promise.resolve(Promise.resolve([])))
    const answers = await sut.loadAnswers('any_id')
    expect(answers).toEqual([])
  })

  test('Should throw if LoadAnswersBySurveyRepository throws', async () => {
    const { sut, loadAnswersBySurveyRepositoryStub } = makeSut()
    jest.spyOn(loadAnswersBySurveyRepositoryStub, 'loadAnswers').mockImplementationOnce(throwError)
    const promise = sut.loadAnswers('any_id')
    await expect(promise).rejects.toThrow()
  })
})

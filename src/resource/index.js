const Resource = require('./create-api')
const {apiCourse} = Resource

// 获取分享预习题
export function shareExercisePrepare (params) {
  return apiCourse.post('share/exercise/prepare', params)
}
export function shareExerciseReview (params) {
  return apiCourse.post('share/exercise/review', params)
}
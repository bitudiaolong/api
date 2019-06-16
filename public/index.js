/**
 * 公共接口文档
 *
 * @author 李宏鹏
 *
 * deviceId 设备型号
 * deviceType 设备类型(android、iOS、html5）
 * clientTime 时间戳
 * version 版本号
 * mac mac地址
 */


/**
 * @apiGroup 01.update
 * @api {POST} open/updateApk 01、apk更新
 * @apiVersion 1.0.0
 * @apiName open/updateApk
 *
 * @apiSuccess (data返回数据结果) {String} version 版本号
 * @apiSuccess (data返回数据结果) {String} packageName 升级安装包名
 * @apiSuccess (data返回数据结果) {String} packSize 升级安装包大小
 * @apiSuccess (data返回数据结果) {String} packageUrl apk升级地址，eg：http://.../download?id=...
 * @apiSuccess (data返回数据结果) {String} isForceUpdate 是否强制更新 1是、0否
 * @apiSuccess (data返回数据结果) {String} description 更新内容描述
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "version":"",
 *        "packageName":"",
 *        "packSize":"",
 *        "packageUrl":"",
 *        "isForceUpdate":"",
 *        "description":""
 *    }
 * }
 */


/**
 * @apiGroup 02.upload
 * @api {POST} open/file/upload 01、上传图片（单张）
 * @apiVersion 1.0.0
 * @apiName open/upload
 * @apiParam (功能请求参数) {File} file 图片文件，必填。不加密
 * @apiParam (功能请求参数) {String} md5 图片文件md5值，选填。
 * @apiParam (功能请求参数) {String} uid 医生的uid，必填。需要des3加密
 * @apiParam (功能请求参数) {String} type 图片类型，必填。0、用户头像；1、签约签名图片；2、签约医生用户合照；3、随访医生用户合照；4、心电图；99、其他图片
 * 
 * @apiSuccess (data返回数据结果) {String} fileName 
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "fileName":"http://xxx.ccc.png",
 *    }
 * }
 */

/**
 * @apiGroup 02.upload
 * @api {GET} open/file/downloadFile 02、文件/图片下载
 * @apiVersion 1.0.0
 * @apiName open/file/downloadFile
 * @apiParam (功能请求参数) {String} fileName 文件名，必填。
 * @apiParam (功能请求参数) {String} type 文件名，必填。//0:回显图片  1：下载文件和图片
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{}
 * }
 */
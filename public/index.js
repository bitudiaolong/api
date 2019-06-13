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
 * @apiSuccess (data返回数据结果) {String} packSize 升级安装包大小(单位：kb)
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
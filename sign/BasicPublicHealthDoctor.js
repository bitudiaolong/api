/**
 * 签约接口文档
 *
 * @author 李宏鹏
 *
 * @apiDescription deviceId 设备型号
 * @apiDescription deviceType 设备类型(android、iOS、html5）
 * @apiDescription clientTime 时间戳
 * @apiDescription version 版本号
 * @apiDescription mac mac地址
 */

/**
 * @apiGroup 01.Login
 * @api {POST} open/sysaccount/login 01、登录
 * @apiVersion 1.0.1
 * @apiName open/sysaccount/login
 * @apiDescription doctorSignQRCode的data参数解密之后为json串：{"mainDocId":"8f9150d1fba84a2e80ebce6bcc0ee3c7"}
 *
 * @apiParam (功能请求参数) {String} account 医生账号
 * @apiParam (功能请求参数) {String} password 医生密码
 *
 * @apiSuccess (data返回数据结果) {String} doctorToken 医生有效性校验标识
 * @apiSuccess (data返回数据结果) {String} userUid 医生Uid,医生标识
 * @apiSuccess (data返回数据结果) {String} userPicture 医生头像地址
 * @apiSuccess (data返回数据结果) {String} userPhone 医生手机号
 * @apiSuccess (data返回数据结果) {String} userName 医生名字
 * @apiSuccess (data返回数据结果) {String} userSex 医生性别
 * @apiSuccess (data返回数据结果) {String} userAddress 医生地址
 * @apiSuccess (data返回数据结果) {String} organizationId 所属服务机构id,签约卫生室id
 * @apiSuccess (data返回数据结果) {String} organizationName 所属服务机构,签约卫生室
 * @apiSuccess (data返回数据结果) {String} doctorSignQRCode 医生签约码字符串（所有参数用加密之后用data作为参数名）
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "doctorToken":"sjdhfakldhflkadsfhljkas==",
 *        "userUid":"666",
 *        "userPicture":"http://xxx/images/weather/day/00.png",
 *        "userPhone":"18812345678",
 *        "userName":"张三",
 *        "userSex":"",
 *        "userAddress":"",
 *        "organizationId":"",
 *        "organizationName":"",
 *        "doctorSignQRCode":"http://xxx/xxx/startSign.html?data=u8nhasd98fhasd8f=="
 *    }
 * }
 */


/**
 * @apiGroup Login
 * @api {POST} open/sysaccount/login 01、登录
 * @apiVersion 1.0.0
 * @apiName open/sysaccount/login
 *
 * @apiParam (功能请求参数) {String} account 医生账号
 * @apiParam (功能请求参数) {String} password 医生密码
 *
 * @apiParam (data返回数据结果) {String} doctorToken 医生有效性校验标识
 * @apiParam (data返回数据结果) {String} userUid 医生Uid,医生标识
 * @apiParam (data返回数据结果) {String} userPicture 医生头像地址
 * @apiParam (data返回数据结果) {String} userPhone 医生手机号
 * @apiParam (data返回数据结果) {String} userName 医生名字
 * @apiParam (data返回数据结果) {String} userSex 医生性别
 * @apiParam (data返回数据结果) {String} userAddress 医生地址
 * @apiParam (data返回数据结果) {String} healthRoomName 服务机构,签约卫生室
 * @apiParam (data返回数据结果) {String} teamMembers 医生团队成员名字
 * @apiParam (data返回数据结果) {String} docTeamName 医生团队名字
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "doctorToken":"",
 *        "userUid":"",
 *        "userPicture":"",
 *        "userPhone":"",
 *        "userName":"",
 *        "userSex":"男",
 *        "userAddress":"",
 *        "healthRoomName":"",
 *        "teamMembers":"医生a,医生b,医生c",
 *        "docTeamName":"xxx团队"
 *    }
 * }
 */

/**
 * @apiGroup 01.Login
 * @api {POST} open/sysaccount/getCode 02、获取验证码
 * @apiVersion 1.0.0
 * @apiName open/sysaccount/getCode
 *
 * @apiParam (功能请求参数) {String} phone 医生手机号
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"验证码已经成功发送",
 *    "data":{
 *    }
 * }
 */

/**
 * @apiGroup 01.Login
 * @api {POST} open/sysaccount/modifyPassword 03、修改密码
 * @apiVersion 1.0.0
 * @apiName open/sysaccount/modifyPassword
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} oldPassword 旧密码
 * @apiParam (功能请求参数) {String} newPassword 新密码
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"密码更新成功",
 *    "data":{
 *    }
 * }
 */
/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/signPersonalList 01、签约列表-个人
 * @apiVersion 1.0.0
 * @apiName open/doctor/signPersonalList
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} keyword 搜索关键字（身份证号、手机号、姓名）
 * @apiParam (功能请求参数) {String} signType 签约类型 (1个人)
 * @apiParam (功能请求参数) {String} signState 签约状态（0待签约 1已签约 2已解约 9已过期 11 待审核 12 待确认 13 已驳回）
 * @apiParam (功能请求参数) {String} currentPage 当前页
 * @apiParam (功能请求参数) {String} pageSize 页码
 *
 * @apiSuccess (data返回数据结果) {Object} page 通用分页对象
 * @apiSuccess (data返回数据结果) {Array} list 个人签约列表
 *
 * @apiSuccess (list列表内元素对象属性) {String} contractedUserIDCard 签约用户身份证号码
 * @apiSuccess (list列表内元素对象属性) {String} signId 签约记录号id
 * @apiSuccess (list列表内元素对象属性) {String} signState 当前签约状态（0待签约 1已签约 2已解约 9已过期 11 待审核 12 待确认 13 已驳回）
 * @apiSuccess (list列表内元素对象属性) {String} name 签约用户姓名
 * @apiSuccess (list列表内元素对象属性) {String} age 签约用户年龄
 * @apiSuccess (list列表内元素对象属性) {String} sex 签约用户性别
 * @apiSuccess (list列表内元素对象属性) {String} phone 签约用户手机号码
 * @apiSuccess (list列表内元素对象属性) {String} address 签约用户居住地址
 * @apiSuccess (list列表内元素对象属性) {String} rongCloudToken 用户融云聊天的token
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode":0,
 *      "errmsg":"",
 *      "data":{
 *          "page": {
 *              "totalPageCount": 1,
 *              "totalCount": 2,
 *              "pageSize": 100,
 *              "currentPage": 1
 *          },
 *          "list":[{
 *              "contractedUserIDCard":"",
 *              "signId":"",
 *              "signState":"1",
 *              "name":"",
 *              "age":"26",
 *              "sex":"",
 *              "phone":"",
 *              "address":"",
 *              "rongCloudToken":"289034890234"
 *          },{
 *              "contractedUserIDCard":"",
 *              "signId":"333423434",
 *              "signState":"9",
 *              "name":"111",
 *              "age":"26",
 *              "sex":"",
 *              "phone":"",
 *              "address":"",
 *              "rongCloudToken":"243908234908"
 *          }]
 *      }
 *  }
 */



/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/signFamilyList 02、签约列表-家庭
 * @apiVersion 1.0.0
 * @apiName open/doctor/signFamilyList
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} keyword 搜索关键字（身份证号、手机号、姓名）
 * @apiParam (功能请求参数) {String} signType 签约类型 (2家庭)
 * @apiParam (功能请求参数) {String} currentPage 当前页
 * @apiParam (功能请求参数) {String} pageSize 页码
 *
 * @apiSuccess (data返回数据结果) {Array} list 家庭签约列表
 * @apiSuccess (data返回数据结果) {Object} page 分页对象
 *
 * @apiSuccess (list列表内元素对象属性) {String} householderIDCard 家庭编号,户主身份证号码
 * @apiSuccess (list列表内元素对象属性) {String} householderName 户主姓名
 * @apiSuccess (list列表内元素对象属性) {String} familyMembers 家庭成员
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":0,
 *    "errmsg":"",
 *    "data":{
 *        "page": {
 *            "totalPageCount": 1,
 *            "totalCount": 2,
 *            "pageSize": 100,
 *            "currentPage": 1
 *        },
 *        "list":[{
 *            "householderIDCard":"",
 *            "householderName":"",
 *            "familyMembers":"0,1,2"
 *        },{
 *            "householderIDCard":"",
 *            "householderName":"张三丰",
 *            "familyMembers":"0,1,2"
 *        }]
 *    }
 * }
 */


/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/familyMembersList 03、签约列表-家庭成员列表、确认签约页面也用该接口调取数据
 * @apiVersion 1.0.8
 * @apiName open/doctor/familyMembersList
 * @apiDescription 确认签约页面也用该接口调取数据
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} householderIDCard 身份证号码（不一定是户主，要根据身份证找到户主）
 *
 * @apiSuccess (data返回数据结果) {String} userPhone 医生手机号
 * @apiSuccess (data返回数据结果) {String} userName 医生名字
 * @apiSuccess (data返回数据结果) {String} healthRoomName 服务机构,签约卫生室
 * @apiSuccess (data返回数据结果) {String} teamMembers 医生团队成员名字
 * @apiSuccess (data返回数据结果) {Array} list 个人签约列表
 *
 * @apiSuccess (list列表内元素对象属性) {String} contractedUserIDCard 签约用户身份证号码
 * @apiSuccess (list列表内元素对象属性) {String} signId 签约记录号id
 * @apiSuccess (list列表内元素对象属性) {String} signState 当前签约状态（1已签约 9已过期 11待审核 12待确认）
 * @apiSuccess (list列表内元素对象属性) {String} name 签约用户姓名
 * @apiSuccess (list列表内元素对象属性) {String} age 签约用户年龄
 * @apiSuccess (list列表内元素对象属性) {String} sex 签约用户性别
 * @apiSuccess (list列表内元素对象属性) {String} relationship 与户主关系
 * @apiSuccess (list列表内元素对象属性) {String} classificationList 人群分类
 * @apiSuccess (list列表内元素对象属性) {String} servicePackageList 服务包名字 此处只需要给出包名集合
 * @apiSuccess (list列表内元素对象属性) {String} rongCloudToken 用户融云聊天的token
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":0,
 *    "errmsg":"",
 *    "data":{
 *        "userPhone":"18812345678",
 *        "userName":"张三",
 *        "healthRoomName":""
 *        "teamMembers":"医生a,医生b,医生c",
 *        "list":[{
 *            "contractedUserIDCard":"",
 *            "signId":"334334344",
 *            "signState":"1",
 *            "name":"",
 *            "age":"26",
 *            "sex":"",
 *            "relationship":"户主本人",
 *            "classificationList":["高血压","糖尿病","冠心病"],
 *            "servicePackageList":["初级包"],
 *            "rongCloudToken":"9082q3490348qrw"
 *        },{
 *            "contractedUserIDCard":"",
 *            "signId":"5343434434",
 *            "signState":"9",
 *            "name":"111",
 *            "age":"26",
 *            "sex":"",
 *            "relationship":"兄弟",
 *            "classificationList":["高血压","糖尿病","冠心病"],
 *            "servicePackageList":["初级包","高级包","vip包"],
 *            "rongCloudToken":"2437897892403"
 *        }]
 *    }
 * }
 */


/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/signDetail  04、签约详情
 * @apiVersion 1.0.0
 * @apiName open/doctor/signDetail
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} signId 签约记录号id
 *
 * @apiSuccess (data返回数据结果) {String} signId 签约id
 * @apiSuccess (data返回数据结果) {Int} signType 签约类型（1个人 2家庭）
 * @apiSuccess (data返回数据结果) {String} signState 当前签约状态（1已签约 9已过期 11待审核 12待确认）
 * @apiSuccess (data返回数据结果) {String} submitDate 用户提交时间（yyyy-MM-dd）
 * @apiSuccess (data返回数据结果) {String} auditDate 医生审核时间（yyyy-MM-dd）
 * @apiSuccess (data返回数据结果) {String} signDate 签约时间（yyyy-MM-dd）
 * @apiSuccess (data返回数据结果) {String} overdueDate 逾期时间（yyyy-MM-dd）
 * @apiSuccess (data返回数据结果) {String} docTeamId  医生团队id
 * @apiSuccess (data返回数据结果) {String} docTeamName  医生团队名称
 * @apiSuccess (data返回数据结果) {String} mainDocName  医生名字
 * @apiSuccess (data返回数据结果) {String} mainDocTel  医生联系电话
 * @apiSuccess (data返回数据结果) {String} healthRoomName  卫生室名称
 * @apiSuccess (data返回数据结果) {String} healthRoomImageUrl 医生团队图片
 * @apiSuccess (data返回数据结果) {String} signCount 已签约人数
 * @apiSuccess (data返回数据结果) {String} teamMembers  医生团队成员名字
 * @apiSuccess (data返回数据结果) {String} userName  签约用户姓名
 * @apiSuccess (data返回数据结果) {String} identityCard  身份证号码
 * @apiSuccess (data返回数据结果) {String} sex 用户性别 （1 2女）
 * @apiSuccess (data返回数据结果) {String} raceName 民族
 * @apiSuccess (data返回数据结果) {String} birthday 出生日期（yyyy-MM-dd）
 * @apiSuccess (data返回数据结果) {String} age 年龄
 * @apiSuccess (data返回数据结果) {String} userPhone 联系电话
 * @apiSuccess (data返回数据结果) {String} userAddress 现住址
 * @apiSuccess (data返回数据结果) {Array} classificationList 人群分类
 * @apiSuccess (data返回数据结果) {Array} servicePackageList 服务包
 * @apiSuccess (data返回数据结果) {String} signAgreementUrl 服务用户协议
 * @apiSuccess (data返回数据结果) {String} userSignAgrennment 用户签约协议，带标签的富文本
 * @apiSuccess (data返回数据结果) {String} relationship 与户主关系
 * @apiSuccess (data返回数据结果) {Long} serviceTotalPrice 服务总价（单位：分）
 * @apiSuccess (data返回数据结果) {String} remarks 备注说明
 * @apiSuccess (data返回数据结果) {String} rejectReason 驳回原因
 * @apiSuccess (data返回数据结果) {String} pictureOneName 拍照图片名字1
 * @apiSuccess (data返回数据结果) {String} pictureTwoName 拍照图片名字2
 * @apiSuccess (data返回数据结果) {String} pictureSignName 用户签名图片名字
 *
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageName  服务包名
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} expiryDate  服务有效期 （2017-12-31~2018-12-31）
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} suitablePerson  服务包适用人群
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackDescribe  服务包描述
 * @apiSuccess (servicePackageList列表内元素对象属性) {Array} serviceContent  服务包内容
 * @apiSuccess (servicePackageList列表内元素对象属性) {Long} totalPrice  服务包总价（单位：分）
 *
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceItem  服务项目名
 * @apiSuccess (serviceContent列表内元素对象属性) {String} projectContent  项目内容
 * @apiSuccess (serviceContent列表内元素对象属性) {String} unit  单位
 * @apiSuccess (serviceContent列表内元素对象属性) {Long} expenses 费用，单位：分
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode": 200,
 *      "errmsg": "",
 *      "data": {
 *          "signId":"203498",
 *          "signState":"1",
 *          "submitDate":"2018-05-22",
 *          "auditDate":"2018-05-23",
 *          "signDate":"2018-05-24",
 *          "overdueDate":"2019-05-24",
 *          "docTeamId":"122",
 *          "docTeamName":"朱医生团队",
 *          "mainDocName":"",
 *          "mainDocTel":"19911111111",
 *          "healthRoomName":"新北区辽河卫生室",
 *          "healthRoomImageUrl":"http://www.gagctv.com/023984.jpg",
 *          "signCount":"2309",
 *          "teamMembers":"喻越，王俏，大雄",
 *          "userName":"张三丰",
 *          "identityCard":"320312199512205409",
 *          "sex":"",
 *          "raceName":"汉族",
 *          "birthday":"2010-02-12",
 *          "age":"22",
 *          "userPhone":"18812341242",
 *          "userAddress":"江苏省常州",
 *          "classificationList":["高血压","糖尿病","冠心病"],
 *          "signAgreementUrl":"http://img.gagctv.com/17103114214744738",
 *          "userSignAgrennment":"用户协议富文本",
 *          "relationship":"父子",
 *          "serviceTotalPrice":20000,
 *          "remarks":"备注说明内容详情",
 *          "rejectReason":"驳回原因",
 *          "pictureOneName":"http://img.gagctv.com/17103114214744738",
 *          "pictureTwoName":"http://img.gagctv.com/17103114214744738",
 *          "pictureSignName":"http://img.gagctv.com/17103114214744738",
 *          "servicePackageList":[{
 *              "servicePackageName": "高级包",
 *              "expiryDate": "2017-12-31~2018-12-31",
 *              "suitablePerson": "所有人",
 *              "servicePackDescribe":"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX",
 *              "totalPrice":20000,
 *              "serviceContent": [{
 *                  "serviceItem": "健康宣传册",
 *                  "projectContent": "每年得到免费发放的健康宣传单一份",
 *                  "unit": "2次/年",
 *                  "expenses": 2000
 *              }]
 *          },{
 *              "servicePackageName": "高级包",
 *              "expiryDate": "2017-12-31~2018-12-31",
 *              "suitablePerson": "所有人",
 *              "servicePackDescribe":"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX",
 *              "totalPrice":0,
 *              "serviceContent": [{
 *                  "serviceItem": "健康宣传册",
 *                  "projectContent": "每年得到免费发放的健康宣传单一份",
 *                  "unit": "2次/年",
 *                  "expenses": 0
 *              },{
 *                  "serviceItem": "健康宣传册",
 *                  "projectContent": "每年得到免费发放的健康宣传单一份",
 *                  "unit": "2次/年",
 *                  "expenses": 0
 *              }]
 *          }]
 *      }
 *  }
 */

/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/submitSign 05、确认-提交签约
 * @apiVersion 1.0.0
 * @apiName open/doctor/submitSign
 * @apiDescription 只要有一个已经签约,就报错,返回已经签约人的名字。   入参是Array的，用json格式的字符串。
 *
 * @apiParam (功能请求参数) {String} doctorToken 用户有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} signType 签约类型：1个人 2家庭
 * @apiParam (功能请求参数) {Array} submitSignList 签约用户的列表
 *
 * @apiSuccess (submitSignList列表内元素对象属性) {String} userUid 医生Uid,医生标识
 * @apiSuccess (submitSignList列表内元素对象属性) {String} docTeamId 医生团队id
 * @apiSuccess (submitSignList列表内元素对象属性) {String} userName 签约用户姓名
 * @apiSuccess (submitSignList列表内元素对象属性) {String} householderIDCard 户主身份证号，（签约类型：个人，户主身份证号传空）
 * @apiSuccess (submitSignList列表内元素对象属性) {String} identityCard 身份证号码
 * @apiSuccess (submitSignList列表内元素对象属性) {String} identityCardImage 身份证照片名
 * @apiSuccess (submitSignList列表内元素对象属性) {String} sex 用户性别（"","女"）
 * @apiSuccess (submitSignList列表内元素对象属性) {String} raceName 民族
 * @apiSuccess (submitSignList列表内元素对象属性) {String} birthday 出生日期(yyyy-MM-dd)
 * @apiSuccess (submitSignList列表内元素对象属性) {String} age 年龄
 * @apiSuccess (submitSignList列表内元素对象属性) {String} userPhone 联系电话
 * @apiSuccess (submitSignList列表内元素对象属性) {String} userAddress 现住址
 * @apiSuccess (submitSignList列表内元素对象属性) {String} relationship 与户主关系
 * @apiSuccess (submitSignList列表内元素对象属性) {String} pictureOneName 拍照图片名字1
 * @apiSuccess (submitSignList列表内元素对象属性) {String} pictureTwoName 拍照图片名字2
 * @apiSuccess (submitSignList列表内元素对象属性) {String} pictureSignName 用户签名图片名字
 * @apiSuccess (submitSignList列表内元素对象属性) {Array} classificationList 人群分类
 * @apiSuccess (submitSignList列表内元素对象属性) {Array} servicePackageList 服务包
 * @apiSuccess (submitSignList列表内元素对象属性) {Long} serviceTotalPrice 服务总价(单位：分）
 * @apiSuccess (submitSignList列表内元素对象属性) {String} remarks 备注说明
 * @apiSuccess (submitSignList列表内元素对象属性) {String} signTime 签约时间（2017-12-31~2018-12-31）
 *
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageId 服务包id
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageName 服务包名
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} expiryDate 服务有效期 （2017-12-31~2018-12-31）
 * @apiSuccess (servicePackageList列表内元素对象属性) {Array} serviceContent 服务包内容
 *
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceItemId 服务项id
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceItem 服务项目名
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"提交成功",
 *      "data":{
 *      }
 *  }
 *
 * @apiSuccessExample {JSON} 执行失败示例:
 * {
 *      "errcode":500,
 *      "errmsg":"xxx已经签约,请勿重复签约",
 *      "data":{
 *      }
 *  }
 */

/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/confirmReject 06、确认驳回
 * @apiVersion 1.0.0
 * @apiName open/doctor/confirmReject
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} signUid 签约记录号id
 * @apiParam (功能请求参数) {String} rejectReason 驳回原因
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *      }
 *  }
 */

/**
 * @apiGroup 02.Sign
 * @api {POST} open/doctor/confirmSubmit 07、确认提交（审核通过）
 * @apiVersion 1.0.0
 * @apiName open/doctor/confirmSubmit
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} signUid 签约记录号id
 * @apiParam (功能请求参数) {String} remarks 备注，选填
 * @apiParam (功能请求参数) {String} classificationList 人群分类（逗号分隔）
 * @apiParam (功能请求参数) {String} signTime 签约时间（2017-12-31~2018-12-31）
 * @apiParam (功能请求参数) {Array} servicePackageList 服务包
 *
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageId 服务包id
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageName 服务包名
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} expiryDate 服务有效期 （2017-12-31~2018-12-31）
 * @apiSuccess (servicePackageList列表内元素对象属性) {Array} serviceContent 服务包内容
 *
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceItemId 服务项id
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceItem 服务项目名
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *      }
 *  }
 */

/**
 * @apiGroup 02.Sign
 * @api {POST} open/server/getServicePackageList 08、获得服务包
 * @apiVersion 1.0.0
 * @apiName open/server/getServicePackageList
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 *
 * @apiParam (data返回数据结果) {Array} servicePackageList 服务包
 *
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageId 服务包id
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackageName 服务包名
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} expiryDate 服务有效期 （2017-12-31~2018-12-31）
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} suitablePerson  服务包适用人群
 * @apiSuccess (servicePackageList列表内元素对象属性) {String} servicePackDescribe  服务包描述
 * @apiSuccess (servicePackageList列表内元素对象属性) {Array} serviceContent  服务包内容
 * @apiSuccess (servicePackageList列表内元素对象属性) {Long} totalPrice  服务包总价（单位：分）
 *
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceId 服务项目id
 * @apiSuccess (serviceContent列表内元素对象属性) {String} serviceItem 服务项目名
 * @apiSuccess (serviceContent列表内元素对象属性) {String} projectContent 项目内容
 * @apiSuccess (serviceContent列表内元素对象属性) {String} unit 单位（实际意义是服务频次）
 * @apiSuccess (serviceContent列表内元素对象属性) {String} expenses 费用，单位：分（免费返回0，不要是“免费”两个字）
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *          "servicePackageList":[{
 *              "servicePackageId": "234089243809",
 *              "servicePackageName": "高级包",
 *              "expiryDate": "2017-12-31~2018-12-31",
 *              "suitablePerson": "所有人",
 *              "servicePackDescribe":"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX",
 *              "totalPrice":20000,
 *              "serviceContent": [{
 *                  "serviceItemId": "2342354234",
 *                  "serviceItem": "健康宣传册",
 *                  "projectContent": "每年得到免费发放的健康宣传单一份",
 *                  "unit": "2次/年",
 *                  "expenses": "2000"
 *              }]
 *          },{
 *              "servicePackageId": "2143423",
 *              "servicePackageName": "高级包",
 *              "expiryDate": "2017-12-31~2018-12-31",
 *              "suitablePerson": "所有人",
 *              "servicePackDescribe":"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX",
 *              "totalPrice":0,
 *              "serviceContent": [{
 *                  "serviceId": "24363523",
 *                  "serviceItem": "健康宣传册",
 *                  "projectContent": "每年得到免费发放的健康宣传单一份",
 *                  "unit": "2次/年",
 *                  "expenses": "0"
 *              },{
 *                  "serviceId": "423423",
 *                  "serviceItem": "健康宣传册",
 *                  "projectContent": "每年得到免费发放的健康宣传单一份",
 *                  "unit": "2次/年",
 *                  "expenses": "0"
 *              }]
 *          }]
 *      }
 *  }
 */

 
/**
 * @apiGroup 02.Sign
 * @api {POST} open/classPopulation/peopleTypeList 09、获取人群分类列表
 * @apiVersion 1.0.0
 * @apiName open/classPopulation/peopleTypeList
 *
 * @apiSuccess (data返回数据结果) {String} typeUid 人群分类id
 * @apiSuccess (data返回数据结果) {String} typeName 人群分类名称
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":[
 *         {
 *              "typeUid":"",
 *              "typeName":""
 *         },
 *         {
 *              "typeUid":"",
 *              "typeName":""
 *         }
 *      ]
 *  }
 */


/**
 * @apiGroup Sign
 * @api {POST} open/organization/organizationList  10、获取签约卫生室(机构/卫生院)列表
 * @apiVersion 1.0.0
 * @apiName open/organization/organizationList
 *
 * @apiParam (data返回数据结果) {Array} list 卫生室(机构/卫生院)列表
 *
 * @apiParam (list列表内元素对象属性) {String} id 机构id
 * @apiParam (list列表内元素对象属性) {String} name 机构名称
 * @apiParam (list列表内元素对象属性) {String} address 机构地址
 * @apiParam (list列表内元素对象属性) {String} imageUrl 机构图片
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *          "list":[{
 *              "id":"",
 *              "name":"",
 *              "address":"",
 *              "imageUrl":""
 *          },{
 *              "id":"",
 *              "name":"",
 *              "address":"",
 *              "imageUrl":""
 *          }]
 *      }
 *  }
 */

/**
 * @apiGroup Sign
 * @api {POST} open/team/docTeamList  11、医生团队列表
 * @apiVersion 1.0.0
 * @apiName open/team/docTeamList
 *
 * @apiParam (功能请求参数) {String} organizationId 机构id
 *
 * @apiParam (data返回数据结果) {Array} list 医生团队列表
 *
 * @apiParam (list列表内元素对象属性) {String} id 医生团队id
 * @apiParam (list列表内元素对象属性) {String} docTeamName 医生团队名称
 * @apiParam (list列表内元素对象属性) {String} mainDocName 主治医生名字
 * @apiParam (list列表内元素对象属性) {String} mainDocTel 主治医生联系电话
 * @apiParam (list列表内元素对象属性) {String} signCount 已签约人数
 * @apiParam (list列表内元素对象属性) {String} teamMembers 医生团队成员名字。逗号分隔字符串
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *          "docTeamList":[{
 *              "id":"",
 *              "docTeamName":"",
 *              "mainDocName":"",
 *              "mainDocTel":"",
 *              "signCount":"",
 *              "teamMembers":""
 *          },{
 *              "id":"",
 *              "docTeamName":"",
 *              "mainDocName":"",
 *              "mainDocTel":"",
 *              "signCount":"",
 *              "teamMembers":""
 *          }]
 *      }
 *  }
 */

/**
 * @apiGroup 03.FollowPlan
 * @api {POST} open/count/visitPlan 01、随访计划统计
 * @apiVersion 1.0.0
 * @apiName open/count/visitPlan
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识 
 *
 * @apiParam (data返回数据结果) {Int} firstVisit 首次随访未进行
 * @apiParam (data返回数据结果) {Int} dayVisit 本日应随访
 * @apiParam (data返回数据结果) {Int} weekVisit 本周应随访
 * @apiParam (data返回数据结果) {Int} auditsVisit 逾期随访
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "firstVisit":200,
 *        "dayVisit":500,
 *        "weekVisit":200,
 *        "auditsVisit":333
 *    }
 * }
 */

/**
 * @apiGroup 03.FollowPlan
 * @api {POST} open/count/crowdList 02、随访计划人群列表
 * @apiVersion 1.0.0
 * @apiName open/count/crowdList
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} classification 人群分类（多个用逗号隔开：a,b,c）
 * @apiParam (功能请求参数) {String} crowdType 随访计划类型 （1首次随访未进行 2本日应随访 3本周应随访 4逾期随访）
 * @apiParam (功能请求参数) {String} currentPage 当前页
 * @apiParam (功能请求参数) {String} pageSize 页码
 *
 * @apiSuccess (data返回数据结果) {Array} list 人群列表
 * @apiSuccess (data返回数据结果) {Object} page 分页对象
 *
 * @apiSuccess (list列表内元素对象属性) {String} id 随访记录号id
 * @apiSuccess (list列表内元素对象属性) {String} IDCard 随访用户身份证号码
 * @apiSuccess (list列表内元素对象属性) {String} name 随访用户姓名
 * @apiSuccess (list列表内元素对象属性) {String} age 随访用户年龄
 * @apiSuccess (list列表内元素对象属性) {String} sex 随访用户性别
 * @apiSuccess (list列表内元素对象属性) {String} phone 随访用户手机号码
 * @apiSuccess (list列表内元素对象属性) {String} address 随访用户地址
 * @apiSuccess (list列表内元素对象属性) {String} classificationList 人群分类
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":0,
 *    "errmsg":"",
 *    "data":{
 *        "page": {
 *            "totalPageCount": 1,
 *            "totalCount": 2,
 *            "pageSize": 100,
 *            "currentPage": 1
 *        },
 *        "list":[
 *            {
 *                "id":"334334344",
 *                "IDCard":"",
 *                "name":"",
 *                "age":"25",
 *                "sex":"",
 *                "phone":"19912121212",
 *                "address":"江苏省常州市新北区",
 *                "classificationList":["高血压","糖尿病","冠心病"]
 *            },
 *            {
 *                "id":"r2323r23",
 *                "IDCard":"",
 *                "name":"",
 *                "age":"25",
 *                "sex":"",
 *                "phone":"19912121212",
 *                "address":"江苏省常州市新北区",
 *                "classificationList":["高血压","糖尿病"]
 *            }
 *        ]
 *    }
 * }
 */

/**
 * @apiGroup 04.ChatCommunication
 * @api {POST} open/doctor/getChatToken 01、获取当前登录账号的token 医生
 * @apiVersion 1.0.0
 * @apiName open/doctor/getChatToken
 * @apiDescription 用户聊天token失效的情况，后台去请求融云，保证返回给前端的token永远是有效的
 *
 * @apiParam (功能请求参数) {String} doctorToken 用户有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识 
 *
 * @apiParam (data返回数据结果) {String} userToken 用户融云token
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *           "userToken":"9989d9yas9saydf9a9f",
 *      }
 *  }
 */

/**
 * @apiGroup 04.ChatCommunication
 * @api {POST} open/doctor/getChatUserInfo 02、获取当前聊天列表的头像和昵称
 * @apiVersion 1.0.0
 * @apiName open/doctor/getChatUserInfo
 *
 * @apiParam (功能请求参数) {String} userChatIds 列表的String 例如:"id1,id2,id3", 以,隔开
 *
 * @apiSuccess (data返回数据结果) {Array} userChatList 用户信息列表
 *
 * @apiSuccess (userChatList列表内元素对象属性) {String} userChatId 用户融云token
 * @apiSuccess (userChatList列表内元素对象属性) {String} userChatName 用户融云token
 * @apiSuccess (userChatList列表内元素对象属性) {String} userChatHeadUrl 用户融云token
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *          "userChatList":[{
 *              "userChatId:"12g3jh1gjhg",
 *              "userChatName:"丽萨",
 *              "userChatHeadUrl:"http://touxiang1.jpg"
 *          },{
 *              "userChatId:"2k2hk1hkj",
 *              "userChatName:"丽是",
 *              "userChatHeadUrl:"http://touxiang1.jpg"
 *          }]
 *      }
 *  }
 */

/**
 * @apiGroup 05.HealthRoom
 * @api {POST} open/doctor/getUserInfoByDoctor 01、医生端用户列表
 * @apiVersion 1.0.0
 * @apiName open/doctor/getUserInfoByDoctor
 *
 * @apiParam (功能请求参数) {String} doctorUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} keyword 用户名称搜索关键词
 * @apiParam (功能请求参数) {String} pageSize 每页条数
 * @apiParam (功能请求参数) {String} currentPage 第几页
 *
 * @apiSuccess (data返回数据结果) {Object} page 分页对象
 * @apiSuccess (data返回数据结果) {Array} list 用户列表
 *
 * @apiSuccess (list列表内数据结果) {String} name 姓名
 * @apiSuccess (list列表内数据结果) {String} sex 性别（，女）
 * @apiSuccess (list列表内数据结果) {String} identityCard 身份证号
 * @apiSuccess (list列表内数据结果) {Int} age 年龄
 * @apiSuccess (list列表内数据结果) {String} populateName 人群分类
 * @apiSuccess (list列表内数据结果) {String} testDate 最后一次测量时间
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"success",
 *      "data":{
 *          "page":{
 *              "pageSize":"20",
 *              "totalPageCount":"1",
 *              "currentPage":"1",
 *              "totalCount":"1"
 *          },
 *          "list":[{
 *              "sex":"",
 *              "name":"戴程云",
 *              "identityCard":"320483199706244911",
 *              "age":21,
 *              "testDate":"2018-11-20",
 *              "populateName":"五保户,低保户"
 *          }]
 *      }
 *  }
 */

/**
 * @apiGroup 05.HealthRoom
 * @api {POST} open/thirdhealthhut/summaryReportDateList 02、体检列表
 * @apiVersion 1.0.13
 * @apiName open/thirdhealthhut/summaryReportDateList
 * @apiDescription APP用户端同一个接口
 *
 * @apiParam (功能请求参数) {String} identityCard 身份证号
 *
 * @apiSuccess (data返回数据结果) {Array} list 体检列表
 *
 * @apiSuccess (list列表内数据结果) {String} date 体检时间
 * @apiSuccess (list列表内数据结果) {Array} detailList 体检详情列表
 *
 * @apiSuccess (detailList列表内数据结果) {String} reportProjectId 体检项id
 * @apiSuccess (detailList列表内数据结果) {String} reportProjectId 体检项名称
 * @apiSuccess (detailList列表内数据结果) {String} detailUrl 体检详情url
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"success",
 *      "data":{
 *          "list":[{
 *              "date":"2018-11-20",
 *              "detailList":[{
 *                  "reportProjectName":"基本体检项目",
 *                  "reportProjectId":"101",
 *                  "detailUrl":"http://192.168.10.12:8093/html/healthyHut/pad/basicPhysicalExamination.html?identityCard=320483199706244911&date=2018-11-20&type=101"
 *              }, {
 *                  "reportProjectName":"人体成分分析体检项目",
 *                  "reportProjectId":"108",
 *                  "detailUrl":"http://192.168.10.12:8093/html/healthyHut/pad/humanBodyCompositionExamination.html?identityCard=320483199706244911&date=2018-11-20&type=108"
 *              }]
 *          }]
 *      }
 *  }
 */

/**
 * @apiGroup 05.HealthRoom
 * @api {POST} open/thirdhealthhut/summaryReportDetailPad 03、健康体检详情
 * @apiVersion 1.0.0
 * @apiName open/thirdhealthhut/summaryReportDetailPad
 * @apiDescription APP医生端、APP用户端的详情页面使用同一个接口
 *
 * @apiParam (功能请求参数) {String} identityCard 身份证号
 * @apiParam (功能请求参数) {String} date 日期（yyyy-MM-dd）
 * @apiParam (功能请求参数) {String} type 100到108依次为：个人信息、基本体检项目、尿液分析体检项目、心电图体检项目、骨密度体检项目、肺功能体检项目、九型体质体检项目、血液分析体检项目、人体成分分析体检项目
 *
 * @apiSuccess (data返回数据结果) {Array} list 体检项列表
 *
 * @apiSuccess (list列表内数据结果) {String} date 体检时间
 * @apiSuccess (list列表内数据结果) {String} reportProjectName 体检项名称
 * @apiSuccess (list列表内数据结果) {Array} reportValueList 体检值列表（具体参见携康的健康小屋接口文档）
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"success",
 *      "data":{
 *          "list": [{
 *              "date": "2018-09-23",
 *              "reportProjectName": "UserInfo",
 *              "reportValueList": {
 *                  "nationName": "汉族",
 *                  "address": "广东省阳新县黄颡口镇凤凰村凤凰山291号",
 *                  "orgName": null,
 *                  "phone": "13510217417",
 *                  "name": "潘少华",
 *                  "genderName": "",
 *                  "birthDate": "1989-07-14"
 *              },
 *              "reportProjectId": "100"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "基本体检项目",
 *              "reportValueList": {
 *                  "Waistline": "暂无",
 *                  "VisionColor": "暂无",
 *                  "Chol": "暂无",
 *                  "LeftVsion": "暂无",
 *                  "BloodSugar": "暂无",
 *                  "BoPulse": "暂无",
 *                  "Hdl": "暂无",
 *                  "RightVsion": "暂无",
 *                  "BloodSugarType": "暂无",
 *                  "Dbp": "暂无",
 *                  "LungCapacity": "暂无",
 *                  "Ldl": "暂无",
 *                  "Hemoglobin": "暂无",
 *                  "BoPi": "暂无",
 *                  "Height": "暂无",
 *                  "MoistureContent": "暂无",
 *                  "Bmi": "暂无",
 *                  "Whr": "暂无",
 *                  "Sbp": "暂无",
 *                  "BodyTemperature": "暂无",
 *                  "Bmr": "暂无",
 *                  "Pulse": "暂无",
 *                  "Hipline": "暂无",
 *                  "Triglycerides": "暂无",
 *                  "Bo": "暂无",
 *                  "Weight": "暂无",
 *                  "PhysicalGluHb": "暂无",
 *                  "BloodKetone": "暂无",
 *                  "Fat": "暂无",
 *                  "Uric": "暂无"
 *              },
 *              "reportProjectId": "101"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "尿液分析体检项目",
 *              "reportValueList": {
 *                  "GLU": "暂无",
 *                  "RBC": "暂无",
 *                  "URO": "暂无",
 *                  "SG": "暂无",
 *                  "BIL": "暂无",
 *                  "NIT": "暂无",
 *                  "PH": "暂无",
 *                  "KET": "暂无",
 *                  "BLD": "暂无",
 *                  "PRO": "暂无",
 *                  "VC": "暂无",
 *                  "LEU": "暂无"
 *              },
 *              "reportProjectId": "102"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "骨密度体检项目",
 *              "reportValueList": {
 *                  "Site": "暂无",
 *                  "AGEPERCENT": "暂无",
 *                  "RRF": "暂无",
 *                  "TTO": "暂无",
 *                  "BUA": "暂无",
 *                  "ADULTPERCENT": "暂无",
 *                  "PAB": "暂无",
 *                  "EOA": "暂无",
 *                  "TSCORE": "暂无",
 *                  "SOS": "暂无",
 *                  "Refdata": "暂无",
 *                  "BQI": "暂无",
 *                  "ZSCORE": "暂无",
 *                  "RESULT": "暂无"
 *              },
 *              "reportProjectId": "104"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "肺功能体检项目",
 *              "reportValueList": {
 *                  "VCM": "暂无",
 *                  "IRVM": "暂无",
 *                  "VCP": "暂无",
 *                  "MVV_BSAM": "暂无",
 *                  "MMFM": "暂无",
 *                  "ERVM": "暂无",
 *                  "MVVM": "暂无",
 *                  "BSA1M": "暂无",
 *                  "MVM": "暂无",
 *                  "MVVP": "暂无",
 *                  "FEV1M": "暂无",
 *                  "TVM": "暂无",
 *                  "FEV3M": "暂无",
 *                  "RRM": "暂无",
 *                  "FEV2PerM": "暂无",
 *                  "V25HM": "暂无",
 *                  "FEV1P": "暂无",
 *                  "MMFP": "暂无",
 *                  "MBC": "暂无",
 *                  "Result": "暂无",
 *                  "V50P": "暂无",
 *                  "PEFM": "暂无",
 *                  "FEV3PerM": "暂无",
 *                  "PEFP": "暂无",
 *                  "V50M": "暂无",
 *                  "FVCM": "暂无",
 *                  "FVCP": "暂无",
 *                  "MVV_BSAP": "暂无",
 *                  "BSAM": "暂无",
 *                  "MVV1P": "暂无",
 *                  "FEV2M": "暂无",
 *                  "MVV1M": "暂无",
 *                  "V2M": "暂无",
 *                  "V25P": "暂无",
 *                  "ICM": "暂无",
 *                  "V25HP": "暂无",
 *                  "MB1M": "暂无",
 *                  "V25M": "暂无",
 *                  "FEV1PerM": "暂无",
 *                  "FEV1PerP": "暂无",
 *                  "V2P": "暂无",
 *                  "MB1P": "暂无",
 *                  "V75P": "暂无",
 *                  "V75M": "暂无"
 *              },
 *              "reportProjectId": "105"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "九型体质体检项目",
 *              "reportValueList": {
 *                  "Mentality": "暂无",
 *                  "Overall": "暂无",
 *                  "Adaptability": "暂无",
 *                  "Physique": "暂无",
 *                  "CorporeityName": "暂无",
 *                  "Morbidity": "暂无",
 *                  "Display": "暂无"
 *              },
 *              "reportProjectId": "106"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "血液分析体检项目",
 *              "reportValueList": {
 *                  "PCT": "暂无",
 *                  "MCV": "暂无",
 *                  "PDW": "暂无",
 *                  "HGB": "暂无",
 *                  "GRAN_per": "暂无",
 *                  "GRAN_": "暂无",
 *                  "P_LCC": "暂无",
 *                  "MPV": "暂无",
 *                  "RBC": "暂无",
 *                  "MCH": "暂无",
 *                  "MID_": "暂无",
 *                  "MCHC": "暂无",
 *                  "HCT": "暂无",
 *                  "PLT": "暂无",
 *                  "RDW_CV": "暂无",
 *                  "WBC": "暂无",
 *                  "MID_per": "暂无",
 *                  "LYM_": "暂无",
 *                  "LYM_per": "暂无",
 *                  "P_LCR": "暂无",
 *                  "RDW_SD": "暂无"
 *              },
 *              "reportProjectId": "107"
 *          },{
 *              "date": "2018-09-23",
 *              "reportProjectName": "人体成分分析体检项目",
 *              "reportValueList": {
 *                  "MuscleRegulation": "暂无",
 *                  "VisceralFatLevel": "暂无",
 *                  "Fatremoval": "暂无",
 *                  "BasalMetabolism": "暂无",
 *                  "Pbf": "暂无",
 *                  "LeanBodyWeight": "暂无",
 *                  "VFI": "暂无",
 *                  "Height": "暂无",
 *                  "Muscle": "暂无",
 *                  "OtherComponentValue": "暂无",
 *                  "SubcutaneousFatRate": "暂无",
 *                  "BMI": "暂无",
 *                  "Mineral": "暂无",
 *                  "Edema": "暂无",
 *                  "TBW": "暂无",
 *                  "SkeletalMuscleRate": "暂无",
 *                  "WeightRegulation": "暂无",
 *                  "Extracellular": "暂无",
 *                  "Weight": "暂无",
 *                  "Protein": "暂无",
 *                  "BodyWaterComponent": "暂无",
 *                  "BoneMass": "暂无",
 *                  "BodyWaterRate": "暂无",
 *                  "BodyFatMass": "暂无",
 *                  "SMM": "暂无",
 *                  "FatRegulation": "暂无",
 *                  "Bone": "暂无",
 *                  "Intracellular": "暂无"
 *              },
 *              "reportProjectId": "108"
 *          }]
 *      }
 *  }
 */








/**
 * @apiGroup 06.Index
 * @api {POST} open/count/signingStatistics 01、首页签约统计
 * @apiVersion 1.0.0
 * @apiName open/count/signingStatistics
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识 
 *
 * @apiSuccess (data返回数据结果) {Int} newSigningNumber 日新增签约数
 * @apiSuccess (data返回数据结果) {Int} cumulativeNumber 累积签约总数
 * @apiSuccess (data返回数据结果) {Int} overdueNumber 签约逾期总数
 * @apiSuccess (data返回数据结果) {Int} auditsNumber 签约待审核数量
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "newSigningNumber":200,
 *        "cumulativeNumber":500,
 *        "overdueNumber":200,
 *        "auditsNumber":333
 *    }
 * }
 */

/**
 * @apiGroup 06.Index
 * @api {POST} open/appinformation/newsClassesList 02、首页卫计专线资讯分类
 * @apiVersion 1.0.0
 * @apiName open/appinformation/newsClassesList
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 *
 * @apiSuccess (data返回数据结果) {Array} list 新闻类型列表
 *
 * @apiSuccess (list列表内元素对象属性) {String} id 新闻资讯类型id
 * @apiSuccess (list列表内元素对象属性) {String} name 新闻资讯类型名称
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *    "errcode":200,
 *    "errmsg":"",
 *    "data":{
 *        "list":[{
 *            "id":"1",
 *            "name":"时政要闻"
 *        },{
 *            "id":"2",
 *            "name":"政务公开"
 *        }]
 *    }
 * }
 */

/**
 * @apiGroup 06.Index
 * @api {POST} open/appinformation/newsRecommandList 03、首页卫计专线 新闻资讯
 * @apiVersion 1.0.0
 * @apiName open/appinformation/newsRecommandList
 *
 * @apiParam (功能请求参数) {String} doctorToken 医生有效性校验标识
 * @apiParam (功能请求参数) {String} userUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} newsClassesId 新闻资讯类型id,选填
 * @apiParam (功能请求参数) {String} currentPage 当前页
 * @apiParam (功能请求参数) {String} pageSize 页码
 *
 * @apiSuccess (data返回数据结果) {Array} list 新闻列表
 * @apiSuccess (data返回数据结果) {Object} page 分页对象
 *
 * @apiSuccess (list列表内元素对象属性) {String} id 新闻id
 * @apiSuccess (list列表内元素对象属性) {String} title 标题
 * @apiSuccess (list列表内元素对象属性) {String} simpleInfo 简介
 * @apiSuccess (list列表内元素对象属性) {Array} imageList 图片列表
 * @apiSuccess (list列表内元素对象属性) {String} detailUrl 详情地址链接
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *          "page": {
 *              "totalPageCount": 1,
 *              "totalCount": 2,
 *              "pageSize": 100,
 *              "currentPage": 1
 *          },
 *         "list":[{
 *              "id":"1",
 *              "title":"家庭医生服务开启",
 *              "simpleInfo":"简介你懂得",
 *              "imageList":["http://xxx/images/weather/day/00.png","http://xxx/images/weather/day/00.png"],
 *              "detailUrl":"http://209384209.com/2093o84jlkf"
 *          },{
 *              "id":"2",
 *              "title":"国务院新规定",
 *              "simpleInfo":"简介你懂得",
 *              "imageList":["http://xxx/images/weather/day/00.png","http://xxx/images/weather/day/00.png"],
 *              "detailUrl":"http://209384209.com/2093o84jlkf"
 *          }]
 *     }
 * }
 */
































/**
 * @apiGroup Config
 * @api {POST} open/appaddressconfig/getConfigByDoctor 01、城市功能配置（暂时不做）
 * @apiVersion 1.0.13
 * @apiName open/appaddressconfig/getConfigByDoctor
 * @apiDescription pad、APP医生端、小程序医生端通用。APP用户端用的是getConfigByUser接口
 *
 * @apiParam (功能请求参数) {String} uid 医生uid
 *
 * @apiSuccess (data返回数据结果) {String} delayComfirmDay 两卡制随访确认过期时间
 * @apiSuccess (data返回数据结果) {String} visitConfirm 两卡制随访（1开放，0不开放；下同）
 * @apiSuccess (data返回数据结果) {String} mtx MTX体检
 * @apiSuccess (data返回数据结果) {String} healthHut 健康小屋
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *      "errcode":200,
 *      "errmsg":"success",
 *      "data":{
 *          "visitConfirm":"0",
 *          "delayComfirmDay":"7",
 *          "mtx":"0",
 *          "healthHut":"0"
 *      }
 *  }
 */

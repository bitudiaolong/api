/**
 * 基本公卫-获取随访接口API文档
 * @author 李宏鹏
 */

/**
 * @apiGroup 00.FllowUpClassification
 * @api {GET} followUpType 01、随访信息用户所属人群分类列表
 * @apiVersion 1.0.0
 * @apiName followUpType 01、随访信息用户所属人群分类
 * @apiDescription 人群分类列表必定返回九个模块，根据1控制开启显示/0关闭隐藏模块 其中list为空则为【一般人群】显示默认图
 *
 * @apiParam (功能请求参数) {String} token 用户有效性校验（Android、iOS、小程序：必填token  TV端：允许为空）
 * @apiParam (功能请求参数) {String} identityCard 用户身份证号码（Android、iOS、小程序：根据用户绑定身份证查找人群分类）
 * @apiParam (功能请求参数) {String} signId 签约记录id（Android、iOS、小程序：signId写死为空""  TV端：必填signId）
 *
 * @apiParam (data元素对象属性) {Array} list 用户所属人群分类列表
 *
 * @apiParam (list元素对象属性) {String} peopleType 人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，52型糖尿病，6老年人，7严重精神障碍，8肺结核）
 * @apiParam (list元素对象属性) {int} openFlag 开启关闭标识（0关闭，1开启）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *    "errcode": 200,
 *    "data": {
 *        "list": [
 *            {
 *                "openFlag": 0,
 *                "peopleType": 0
 *            },
 *            {
 *                "openFlag": 0,
 *                "peopleType": 1
 *            },
 *            {
 *                "openFlag": 1,
 *                "peopleType": 2
 *            },
 *            {
 *                "openFlag": 1,
 *                "peopleType": 3
 *            },
 *            {
 *                "openFlag": 1,
 *                "peopleType": 4
 *            },
 *            {
 *                "openFlag": 1,
 *                "peopleType": 5
 *            },
 *            {
 *                "openFlag": 0,
 *                "peopleType": 6
 *            },
 *            {
 *                "openFlag": 1,
 *                "peopleType": 7
 *            },
 *            {
 *                "openFlag": 1,
 *                "peopleType": 8
 *            }
 *        ]
 *    },
 *    "errmsg": "success"
 * }
 */

/**
 * @apiGroup 00.FllowUpClassification
 * @api {GET} followUpList 02、用户随访记录列表
 * @apiVersion 1.0.0
 * @apiName followUpList 02、用户随访记录列表
 *
 * @apiParam (功能请求参数) {String} token 用户有效性校验（Android、iOS、小程序：必填token  TV端：允许为空）
 * @apiParam (功能请求参数) {String} identityCard 用户身份证号码（Android、iOS、小程序：根据用户绑定身份证查找随访记录）
 * @apiParam (功能请求参数) {String} signId 签约记录id（Android、iOS、小程序：signId写死为空""  TV端：必填signId）
 * @apiParam (功能请求参数) {String} peopleType 人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，52型糖尿病，6老年人，7严重精神障碍，8肺结核）
 *
 * @apiParam (data元素对象属性) {Array} list 随访记录一级列表
 *
 * @apiParam (list元素对象属性) {String} titleName 二级标题名（儿童 孕产妇 老年人 严重精神障碍 肺结核 五项有 其他项目为空）
 * @apiParam (list元素对象属性) {Array} recordList 随访记录二级列表--随访记录时间
 *
 * @apiParam (recordList元素对象属性) {String} followUpDate 随访记录日期
 * @apiParam (recordList元素对象属性) {String} followUpId 随访记录id
 * @apiParam (recordList元素对象属性) {String} detailUrl 随访详情url（详情使用h5页面）
 * @apiParam (recordList元素对象属性) {String} recordBelongsTo 人群所属二级分类（1 2 ... 18 ""）前端不做展示 pad识别验证时使用
 * @apiParam (recordList元素对象属性) {String} followUpStatus 随访记录作废情况（1正常数据 0已作废数据）
 * @apiParam (recordList元素对象属性) {String} useState 随访确认情况（1已确认 0待确认）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode":200,
 *      "errmsg":"",
 *      "data":{
 *          "list":[{
 *              "titleName":"随访服务记录",
 *              "recordList":[{
 *                  "followUpDate":"2018-09-19",
 *                  "followUpId":"4235425",
 *                  "detailUrl":"http://098234.html",
 *                  "recordBelongsTo":"",
 *                  "followUpStatus":"1",
 *                  "useState":"1"
 *              }]
 *          },{
 *              "titleName":"入户随访记录",
 *              "recordList":[{
 *                  "followUpDate":"2018-09-19",
 *                  "followUpId":"4235425",
 *                  "detailUrl":"http://098234.html",
 *                  "recordBelongsTo":"1",
 *                  "followUpStatus":"0",
 *                  "useState":"0"
 *          },{
 *                  "followUpDate":"2018-09-19",
 *                  "followUpId":"4235425",
 *                  "detailUrl":"http://098234.html",
 *                  "recordBelongsTo":"18",
 *                  "followUpStatus":"1",
 *                  "useState":"1"
 *              }]
 *          }]
 *      }
 *  }
 */
/**
 * @apiGroup 00.FllowUpClassification
 * @api {GET} open/doctor/getUserInfoByDoctor 03、医生随访用户列表
 * @apiVersion 1.0.0
 * @apiName open/doctor/getUserInfoByDoctor
 *
 * @apiParam (功能请求参数) {String} doctorUid 医生Uid,医生标识
 * @apiParam (功能请求参数) {String} keyword 搜索关键字(身份证号、手机号、姓名)
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
 * @apiGroup 01.Public
 * @api {POST} voidedFollowUpRecord 01、作废随访记录
 * @apiVersion 1.0.0
 * @apiName voidedFollowUpRecord 01、作废随访记录
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 * @apiParam (功能请求参数) {String} peopleType 人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，5糖尿病，6老年人，7精神病，8肺结核）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 * {
 *     "errcode": 200,
 *     "errmsg":"",
 *     "data": {
 *     }
 * }
 */

/**
 * @apiGroup 01.Public
 * @api {POST} exportFollowUpRecord 02、导出随访记录
 * @apiVersion 1.0.0
 * @apiName exportFollowUpRecord 02、导出随访记录
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 * @apiParam (功能请求参数) {String} peopleType 人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，5糖尿病，6老年人，7精神病，8肺结核）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 * {
 *     "errcode": 200,
 *     "errmsg":"",
 *     "data": {
 *     }
 * }
 */

/**
 * @apiGroup 02.Child
 * @api {GET} newChildFollowUp 01、新生儿的随访记录详情
 * @apiVersion 1.0.0
 * @apiName newChildFollowUp 01、新生儿的随访记录详情
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案编号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired 姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired 编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} sex 性别
 * @apiParam (data元素对象属性) {String} sexRequired 性别是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} birthday 出生日期
 * @apiParam (data元素对象属性) {String} birthdayRequired 出生日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} IDCardNum 身份证号
 * @apiParam (data元素对象属性) {String} IDCardNumRequired 身份证号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} address 家庭住址
 * @apiParam (data元素对象属性) {String} addressRequired 家庭住址是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fatherName 父亲名称
 * @apiParam (data元素对象属性) {String} fatherNameRequired 父亲名称是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fatherJob 父亲职业
 * @apiParam (data元素对象属性) {String} fatherJobRequired 父亲职业是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fatherBirthday 父亲生日
 * @apiParam (data元素对象属性) {String} fatherBirthdaynRequired 父亲生日是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fatherPhone 父亲电话
 * @apiParam (data元素对象属性) {String} fatherPhonenRequired 父亲电话是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} motherName 母亲名称
 * @apiParam (data元素对象属性) {String} motherNameRequired 母亲名称是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} motherJob 母亲职业
 * @apiParam (data元素对象属性) {String} motherJobRequired 母亲职业是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} motherBirthday 母亲生日
 * @apiParam (data元素对象属性) {String} motherBirthdayRequired 母亲生日是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} motherPhone 母亲电话
 * @apiParam (data元素对象属性) {String} motherPhoneRequired 母亲电话是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} birthGestationalWeek 出生孕周
 * @apiParam (data元素对象属性) {String} birthGestationalWeekRequired 出生孕周是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} motherPregnancyCondition 母亲妊娠期患病情况
 * @apiParam (data元素对象属性) {String} motherPregnancyConditionRequired 母亲妊娠期患病情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} MidwiferyOrg 助产机构
 * @apiParam (data元素对象属性) {String} MidwiferyOrgRequired 助产机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} birthCondition 出生情况
 * @apiParam (data元素对象属性) {String} birthConditionRequired 出生情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} asphyxiaNeonatorum 新生儿窒息
 * @apiParam (data元素对象属性) {String} asphyxiaNeonatorumRequired 新生儿窒息是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} malformation 畸形
 * @apiParam (data元素对象属性) {String} malformationRequired 畸形是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hearingScreening 听力筛查
 * @apiParam (data元素对象属性) {String} hearingScreeningRequired 听力筛查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} diseaseScreening 疾病筛查
 * @apiParam (data元素对象属性) {String} diseaseScreeningRequired 疾病筛查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired 体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} currentWeight 目前体重
 * @apiParam (data元素对象属性) {String} currentWeightRequired 目前体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} birthLength 出生身长
 * @apiParam (data元素对象属性) {String} birthLengthRequired 出生身长是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} feedingMode 喂养方式
 * @apiParam (data元素对象属性) {String} feedingModeRequired 喂养方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} milkAmount 吃奶量
 * @apiParam (data元素对象属性) {String} milkAmountRequired 吃奶量 是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} feedingTimes 吃奶次数
 * @apiParam (data元素对象属性) {String} feedingTimesRequired 吃奶次数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} vomit 呕吐
 * @apiParam (data元素对象属性) {String} vomitRequired 呕吐是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} stools 大便
 * @apiParam (data元素对象属性) {String} stoolsRequired 大便是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} stoolTimes 大便次数
 * @apiParam (data元素对象属性) {String} stoolTimesRequired 大便次数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} temperature 体温
 * @apiParam (data元素对象属性) {String} temperatureRequired 体温是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} heartRate 心率
 * @apiParam (data元素对象属性) {String} heartRateRequired 心率是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} respiratoryFrequency 呼吸频率
 * @apiParam (data元素对象属性) {String} respiratoryFrequencyRequired 呼吸频率是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complexion 面色
 * @apiParam (data元素对象属性) {String} complexionRequired  面色是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} siteOfJaundice 黄疸部位
 * @apiParam (data元素对象属性) {String} siteOfJaundiceRequired  黄疸部位是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} formerChimney 前囱
 * @apiParam (data元素对象属性) {String} formerChimneyRequired  前囱是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} eye 眼睛
 * @apiParam (data元素对象属性) {String} eyeRequired  眼睛是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} extremitiesActivity 四肢活动度
 * @apiParam (data元素对象属性) {String} extremitiesRequired  四肢活动度是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} auricularAppearance 耳外观
 * @apiParam (data元素对象属性) {String} auricularAppearanceRequired  耳外观是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} cervicalLump 颈部包块
 * @apiParam (data元素对象属性) {String} cervicalLumpRequired  颈部包块是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nose 鼻
 * @apiParam (data元素对象属性) {String} noseRequired  鼻是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} skin 皮肤
 * @apiParam (data元素对象属性) {String} skinRequired  皮肤是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} oralCavity 口腔
 * @apiParam (data元素对象属性) {String} oralCavityRequired  口腔是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} anus 肛门
 * @apiParam (data元素对象属性) {String} anusRequired  肛门是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} heartAndLungs 心肺听诊
 * @apiParam (data元素对象属性) {String} heartAndLungsRequired  心肺听诊是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} chest 胸部
 * @apiParam (data元素对象属性) {String} chestRequired  胸部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} abdominalPalpation 腹部触诊
 * @apiParam (data元素对象属性) {String} abdominalPalpationRequired  腹部触诊是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} spine 脊柱
 * @apiParam (data元素对象属性) {String} spineRequired  脊柱是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} externalGenitals 外生殖器
 * @apiParam (data元素对象属性) {String} externalGenitalsRequired  外生殖器是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} umbilicalCord 脐带
 * @apiParam (data元素对象属性) {String} umbilicalCordRequired  脐带是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired  转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired  指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dateOfThisVisit 本次访视日期
 * @apiParam (data元素对象属性) {String} dateOfThisVisitRequired  本次访视日期 是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} theNextPlaceUp 下次随访地点
 * @apiParam (data元素对象属性) {String} theNextPlaceUpRequired  下次随访地点是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "sex":"女",
 *          "sexRequired":"1",
 *          "birthday":"2018-1-23",
 *          "birthdayRequired":"1",
 *          "IDCardNum":"320722299999999999",
 *          "IDCardNumRequired":"1",
 *          "address":"常州市新北区人民路1号",
 *          "addressRequired":"1",
 *          "fatherName":"张思",
 *          "fatherNameRequired":"1",
 *          "fatherJob":"公务员",
 *          "fatherJobRequired":"1",
 *          "fatherBirthday":"1980-10-10",
 *          "fatherBirthdayRequired":"1",
 *          "fatherPhone":"13291223445",
 *          "fatherPhonenRequired":"1",
 *          "motherName":"王宏",
 *          "motherNameRequired":"1",
 *          "motherJob":"公务员",
 *          "motherJobRequired":"1",
 *          "motherBirthday":"1988-10-10",
 *          "motherBirthdayRequired":"1",
 *          "motherPhone":"13298888888",
 *          "motherPhoneRequired":"1",
 *          "birthGestationalWeek":"40",
 *          "birthGestationalWeekRequired":"1",
 *          "motherPregnancyCondition":"糖尿病",
 *          "motherPregnancyConditionRequired":"1",
 *          "MidwiferyOrg":"常州中医院",
 *          "MidwiferyOrgRequired":"1",
 *          "birthCondition":"顺产",
 *          "birthConditionRequired":"1",
 *          "asphyxiaNeonatorum":"无",
 *          "asphyxiaNeonatorumRequired":"1",
 *          "malformation":"无",
 *          "malformationRequired":"1",
 *          "hearingScreening":"通过",
 *          "hearingScreeningRequired":"1",
 *          "diseaseScreening":"未进行",
 *          "diseaseScreeningRequired":"1",
 *          "weight":"10",
 *          "weightRequired":"1",
 *          "currentWeight":"11",
 *          "currentWeightRequired":"1",
 *          "birthLength":"50",
 *          "birthLengthRequired":"1",
 *          "feedingMode":"纯母乳",
 *          "feedingModeRequired":"1",
 *          "milkAmount":"120",
 *          "milkAmountRequired":"1",
 *          "feedingTimes":"5",
 *          "feedingTimesRequired":"1",
 *          "vomit":"无",
 *          "vomitRequired":"1",
 *          "stools":"糊状",
 *          "stoolsRequired":"1",
 *          "stoolTimes":"3",
 *          "stoolTimesRequired":"1",
 *          "temperature":"37",
 *          "temperatureRequired":"1",
 *          "heartRate":"80",
 *          "heartRateRequired":"1",
 *          "respiratoryFrequency":"80",
 *          "respiratoryFrequencyRequired":"1",
 *          "complexion":"红润",
 *          "complexionRequired":"1",
 *          "siteOfJaundice":"无",
 *          "siteOfJaundiceRequired":"1",
 *          "formerChimney":"20*20 正常",
 *          "formerChimneyRequired":"1",
 *          "eye":"正常",
 *          "eyeRequired":"1",
 *          "extremitiesActivity":"未见异常",
 *          "extremitiesRequired":"1",
 *          "auricularAppearance":"未见异常",
 *          "auricularAppearanceRequired":"1",
 *          "cervicalLump":"无",
 *          "cervicalLumpRequired":"1",
 *          "nose":"未见异常",
 *          "noseRequired":"1",
 *          "skin":"未见异常",
 *          "skinRequired":"1",
 *          "oralCavity":"未见异常",
 *          "oralCavityRequired":"1",
 *          "anus":"未见异常",
 *          "anusRequired":"1",
 *          "heartAndLungs":"未见异常",
 *          "heartAndLungsRequired":"1",
 *          "chest":"未见异常",
 *          "chestRequired":"1",
 *          "abdominalPalpation":"未见异常",
 *          "abdominalPalpationRequired":"1",
 *          "spine":"未见异常",
 *          "spineRequired":"1",
 *          "externalGenitals":"未见异常",
 *          "externalGenitalsRequired":"1",
 *          "umbilicalCord":"未脱",
 *          "umbilicalCordRequired":"1",
 *          "referralAdvice":"有",
 *          "referralAdviceRequired":"1",
 *          "referralReason":"感冒",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"武进卫生室",
 *          "referralInstitutionRequired":"1",
 *          "guidance":"喂养指导",
 *          "guidanceRequired":"1",
 *          "dateOfThisVisit":"2018-1-10",
 *          "dateOfThisVisitRequired":"1",
 *          "theNextPlaceUp":"家",
 *          "theNextPlaceUpRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/2390o8u4.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 02.Child
 * @api {GET} lessThanEightMonthChildFollowUp 02、1~8月龄儿童健康检查记录表
 * @apiVersion 1.0.0
 * @apiName lessThanEightMonthChildFollowUp 02、1~8月龄儿童健康检查记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired 姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired 编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mongth 月龄
 * @apiParam (data元素对象属性) {String} mongthRequired 月龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired 随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired 体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} height 身长
 * @apiParam (data元素对象属性) {String} lengthRequired 身长是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} headCircumference 头围
 * @apiParam (data元素对象属性) {String} headCircumferenceRequired 头围是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complexion 面色
 * @apiParam (data元素对象属性) {String} complexionRequired 面色是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} skin 皮肤
 * @apiParam (data元素对象属性) {String} skinRequired 皮肤是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bregmatic 前囟
 * @apiParam (data元素对象属性) {String} bregmaticRequired 前囟是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} cervicalLump 颈部包块
 * @apiParam (data元素对象属性) {String} cervicalLumpRequired 颈部包块是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} eye 眼睛
 * @apiParam (data元素对象属性) {String} eyeRequired 眼睛是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nose 鼻
 * @apiParam (data元素对象属性) {String} noseRequired 鼻是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hearing 听力
 * @apiParam (data元素对象属性) {String} hearingRequired 听力是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} oralCavity 口腔
 * @apiParam (data元素对象属性) {String} oralCavityRequired 口腔是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} chest 胸部
 * @apiParam (data元素对象属性) {String} chestRequired 胸部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} abdomen 腹部
 * @apiParam (data元素对象属性) {String} abdomenRequired 腹部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} umbilicalCord 脐部
 * @apiParam (data元素对象属性) {String} umbilicalCordRequired 脐部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} limb 四肢
 * @apiParam (data元素对象属性) {String} limbRequired 四肢是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} suspiciousRickets 可疑佝偻病症状
 * @apiParam (data元素对象属性) {String} suspiciousRicketsRequired 可疑佝偻病症状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} suspiciousRicketsSigns 可疑佝偻病体征
 * @apiParam (data元素对象属性) {String} suspiciousRicketsSignsRequired 可疑佝偻病体征是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} anus 肛门
 * @apiParam (data元素对象属性) {String} anusRequired 肛门是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} externalGenitals 外生殖器
 * @apiParam (data元素对象属性) {String} externalGenitalsRequired 外生殖器是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hemoglobinValue 血红蛋白值
 * @apiParam (data元素对象属性) {String} hemoglobinValueRequired 血红蛋白值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} outdoorActivities 户外活动
 * @apiParam (data元素对象属性) {String} outdoorActivitiesRequired 户外活动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} takeVitaminD 服用维生素D
 * @apiParam (data元素对象属性) {String} takeVitaminDRequired 服用维生素D是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} developmentAssessment 发育评估
 * @apiParam (data元素对象属性) {String} developmentAssessmentRequired 发育评估是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} prevalence 两次随访间患病情况
 * @apiParam (data元素对象属性) {String} prevalenceRequired 两次随访间患病情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired 转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired 转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired 转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired 指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired 下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "mongth":"1",
 *          "mongthRequired":"1",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "weight":"10 中",
 *          "weightRequired":"1",
 *          "height":"11 上",
 *          "heightRequired":"1",
 *          "headCircumference":"50",
 *          "headCircumferenceRequired":"1",
 *          "complexion":"红润",
 *          "complexionRequired":"1",
 *          "skin":"未见异常",
 *          "skinRequired":"1",
 *          "bregmatic":"50*50 闭合",
 *          "bregmaticRequired":"1",
 *          "cervicalLump":"未见异常",
 *          "cervicalLumpRequired":"1",
 *          "eye":"未见异常",
 *          "eyeRequired":"1",
 *          "nose":"未见异常",
 *          "noseRequired":"1",
 *          "hearing":"未见异常",
 *          "hearingRequired":"1",
 *          "oralCavity":"未见异常",
 *          "oralCavityRequired":"1",
 *          "chest":"未见异常",
 *          "chestRequired":"1",
 *          "abdomen":"未见异常",
 *          "abdomenRequired":"1",
 *          "umbilicalCord":"未脱落",
 *          "umbilicalCordRequired":"1",
 *          "limb":"未见异常",
 *          "limbRequired":"1",
 *          "suspiciousRickets":"正常",
 *          "suspiciousRicketsRequired":"1",
 *          "suspiciousRicketsSigns":"未见异常",
 *          "suspiciousRicketsSignsRequired":"1",
 *          "anus":"未见异常",
 *          "anusRequired":"1",
 *          "externalGenitals":"未见异常",
 *          "externalGenitalsRequired":"1",
 *          "hemoglobinValue":"112",
 *          "hemoglobinValueRequired":"1",
 *          "outdoorActivities":"4",
 *          "outdoorActivitiesRequired":"1",
 *          "takeVitaminD":"1",
 *          "takeVitaminDRequired":"1",
 *          "developmentAssessment":"未见异常",
 *          "developmentAssessmentRequired":"1",
 *          "heartAndLungs":"未见异常",
 *          "heartAndLungsRequired":"1",
 *          "prevalence":"无",
 *          "prevalenceRequired":"1",
 *          "referralAdvice":"有",
 *          "referralAdviceRequired":"1",
 *          "referralReason":"感冒",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"武进卫生室",
 *          "referralInstitutionRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/23048u.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 02.Child
 * @api {GET} twelveToThirtyMonthChildFollowUp 03、12~30月龄儿童健康检查记录表
 * @apiVersion 1.0.0
 * @apiName twelveToThirtyMonthChildFollowUp 03、12~30月龄儿童健康检查记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired 姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired 编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mongth 月龄
 * @apiParam (data元素对象属性) {String} mongthRequired 月龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired 随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} toothdecay 龋齿数
 * @apiParam (data元素对象属性) {String} mongthRequired 月龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired 体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} height 身长
 * @apiParam (data元素对象属性) {String} heightRequired 身长是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complexion 面色
 * @apiParam (data元素对象属性) {String} complexionRequired 面色是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} skin 皮肤
 * @apiParam (data元素对象属性) {String} skinRequired 皮肤是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bregmatic 前囟
 * @apiParam (data元素对象属性) {String} bregmaticRequired 前囟是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} eye 眼睛
 * @apiParam (data元素对象属性) {String} eyeRequired 眼睛是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} earAppearance 耳外观
 * @apiParam (data元素对象属性) {String} earAppearanceRequired 耳外观是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hearing 听力
 * @apiParam (data元素对象属性) {String} hearingRequired 听力是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} teething 出牙/龋齿数
 * @apiParam (data元素对象属性) {String} teethingRequired 出牙/龋齿数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} chest 胸部
 * @apiParam (data元素对象属性) {String} chestRequired 胸部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} abdomen 腹部
 * @apiParam (data元素对象属性) {String} abdomenRequired 腹部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} limb 四肢
 * @apiParam (data元素对象属性) {String} limbRequired 四肢是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} gait 步态
 * @apiParam (data元素对象属性) {String} gaitRequired 步态是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} suspiciousRicketsSigns 可疑佝偻病体征
 * @apiParam (data元素对象属性) {String} suspiciousRicketsSignsRequired  可疑佝偻病体征是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hemoglobinValue 血红蛋白值
 * @apiParam (data元素对象属性) {String} hemoglobinValueRequired 血红蛋白值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} outdoorActivities 户外活动
 * @apiParam (data元素对象属性) {String} outdoorActivitiesRequired 户外活动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} takeVitaminD 服用维生素D
 * @apiParam (data元素对象属性) {String} takeVitaminDRequired 服用维生素D是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} developmentAssessment 发育评估
 * @apiParam (data元素对象属性) {String} developmentAssessmentRequired 发育评估是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} prevalence 两次随访间患病情况
 * @apiParam (data元素对象属性) {String} prevalenceRequired  两次随访间患病情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired 转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired 转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired 转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired 指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired 下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "mongth":"女",
 *          "mongthRequired":"1",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "toothdecay":"1",
 *          "weight":"10 中",
 *          "weightRequired":"1",
 *          "height":"11 上",
 *          "heightRequired":"1",
 *          "complexion":"红润",
 *          "complexionRequired":"1",
 *          "skin":"未见异常",
 *          "skinRequired":"1",
 *          "bregmatic":"50*50 闭合",
 *          "bregmaticRequired":"1",
 *          "eye":"未见异常",
 *          "eyeRequired":"1",
 *          "earAppearance":"未见异常",
 *          "earAppearanceRequired":"1",
 *          "hearing":"未见异常",
 *          "hearingRequired":"1",
 *          "teething":"出牙/1",
 *          "teethingRequired":"1",
 *          "chest":"未见异常",
 *          "chestRequired":"1",
 *          "abdomen":"未见异常",
 *          "abdomenRequired":"1",
 *          "limb":"未见异常",
 *          "limbRequired":"1",
 *          "gait":"---",
 *          "gaitRequired":"1",
 *          "suspiciousRicketsSigns":"未见异常",
 *          "suspiciousRicketsSignsRequired":"1",
 *          "hemoglobinValue":"112",
 *          "hemoglobinValueRequired":"1",
 *          "outdoorActivities":"4",
 *          "outdoorActivitiesRequired":"1",
 *          "takeVitaminD":"1",
 *          "takeVitaminDRequired":"1",
 *          "developmentAssessment":"未见异常",
 *          "developmentAssessmentRequired":"1",
 *          "heartAndLungs":"未见异常",
 *          "heartAndLungsRequired":"1",
 *          "prevalence":"无",
 *          "prevalenceRequired":"1",
 *          "referralAdvice":"有",
 *          "referralAdviceRequired":"1",
 *          "referralReason":"感冒",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"武进卫生室",
 *          "referralInstitutionRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.xxx.com/3231.png"
 *      }
 *  }
 */

/**
 * @apiGroup 02.Child
 * @api {GET} threeToSixYearChildFollowUp 04、3~6岁儿童健康检查记录表
 * @apiVersion 1.0.0
 * @apiName threeToSixYearChildFollowUp 04、3~6岁儿童健康检查记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired 姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired 编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mongth 月龄
 * @apiParam (data元素对象属性) {String} mongthRequired 月龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired 随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} toothdecay 龋齿数
 * @apiParam (data元素对象属性) {String} visionleft 左视力 
 * @apiParam (data元素对象属性) {String} visionright 右视力 
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired 体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} height 身长
 * @apiParam (data元素对象属性) {String} heightRequired 身长是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weightPlength 体重/身高(上中下)
 * @apiParam (data元素对象属性) {String} weightPlengthRequired  体重/身高是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} physicalDevelopment 体格发育评价
 * @apiParam (data元素对象属性) {String} physicalDevelopmentRequired  体格发育评价是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} vision 视力
 * @apiParam (data元素对象属性) {String} visionRequired 视力是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hearing 听力
 * @apiParam (data元素对象属性) {String} hearingRequired 听力是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} teething 出牙/龋齿数
 * @apiParam (data元素对象属性) {String} teethingRequired 出牙/龋齿数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} chest 胸部
 * @apiParam (data元素对象属性) {String} chestRequired 胸部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} abdomen 腹部
 * @apiParam (data元素对象属性) {String} abdomenRequired 腹部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hemoglobinValue 血红蛋白值
 * @apiParam (data元素对象属性) {String} hemoglobinValueRequired 血红蛋白值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他
 * @apiParam (data元素对象属性) {String} otherRequired 其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} developmentAssessment 发育评估
 * @apiParam (data元素对象属性) {String} developmentAssessmentRequired 发育评估是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} prevalence 两次随访间患病情况
 * @apiParam (data元素对象属性) {String} prevalenceRequired 两次随访间患病情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired 转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired 转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired 转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired 指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired 下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "mongth":"女",
 *          "mongthRequired":"1",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "toothdecay":"1",
 *          "visionleft":"1",
 *          "visionright":"1",
 *          "weight":"10 中",
 *          "weightRequired":"1",
 *          "height":"11 上",
 *          "heightRequired":"1",
 *          "weightPlength":"中",
 *          "weightPlengthRequired":"1",
 *          "physicalDevelopment":"正常",
 *          "physicalDevelopmentRequired":"1",
 *          "vision":"2.0",
 *          "visionRequired":"1",
 *          "hearing":"未见异常",
 *          "hearingRequired":"1",
 *          "teething":"出牙/1",
 *          "teethingRequired":"1",
 *          "chest":"未见异常",
 *          "chestRequired":"1",
 *          "abdomen":"未见异常",
 *          "abdomenRequired":"1",
 *          "hemoglobinValue":"112",
 *          "hemoglobinValueRequired":"1",
 *          "other":"无",
 *          "otherRequired":"1",
 *          "developmentAssessment":"未见异常",
 *          "developmentAssessmentRequired":"1",
 *          "heartAndLungs":"未见异常",
 *          "heartAndLungsRequired":"1",
 *          "prevalence":"无",
 *          "prevalenceRequired":"1",
 *          "referralAdvice":"有",
 *          "referralAdviceRequired":"1",
 *          "referralReason":"感冒",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"武进卫生室",
 *          "referralInstitutionRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/o3w289u.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 02.Child
 * @api {GET} childHealthManageFollowUp 05、儿童中医药健康管理服务记录表
 * @apiVersion 1.0.0
 * @apiName childHealthManageFollowUp 05、儿童中医药健康管理服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired 姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired 编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mongth 月龄
 * @apiParam (data元素对象属性) {String} mongthRequired 月龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired 随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} healthManagement 中医药健康管理服务
 * @apiParam (data元素对象属性) {String} healthManagementRequired 中医药健康管理服务是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired 下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "mongth":"女",
 *          "mongthRequired":"1",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "healthManagement":"2018-01-09",
 *          "healthManagementRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/230984.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 03.Maternal
 * @api {GET} pregnantWomanBaseInformation 01、孕妇基本信息
 * @apiVersion 1.0.0
 * @apiName pregnantWomanBaseInformation 01、孕妇基本信息
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} pregnantName 孕妇姓名
 * @apiParam (data元素对象属性) {String} pregnantNameRequired  孕妇姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantNumber 孕妇卡号
 * @apiParam (data元素对象属性) {String} pregnantNumberRequired  孕妇卡号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantCard 孕妇身份证号
 * @apiParam (data元素对象属性) {String} pregnantCardRequired  孕妇身份证号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantAge 孕妇年龄
 * @apiParam (data元素对象属性) {String} pregnantAgeRequired  孕妇年龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantEducation 孕妇文化程度
 * @apiParam (data元素对象属性) {String} pregnantEducationRequired  孕妇文化程度是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantOccupation 孕妇职业
 * @apiParam (data元素对象属性) {String} pregnantOccupationRequired  孕妇职业是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantPhone 孕妇电话
 * @apiParam (data元素对象属性) {String} pregnantPhoneRequired  孕妇电话是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantNation 孕妇民族
 * @apiParam (data元素对象属性) {String} pregnantNationRequired  孕妇民族是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantResidence 孕妇户口所在地
 * @apiParam (data元素对象属性) {String} pregnantResidenceRequired  孕妇户口所在地是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantPresentPlace 孕妇现住地
 * @apiParam (data元素对象属性) {String} pregnantPresentPlaceRequired  孕妇现住地是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} postpartumPlace 产后休养地
 * @apiParam (data元素对象属性) {String} postpartumPlaceRequired  产后休养地是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantWorkUnit 孕妇工作单位
 * @apiParam (data元素对象属性) {String} pregnantWorkUnitRequired  孕妇工作单位是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandName 丈夫姓名
 * @apiParam (data元素对象属性) {String} husbandNameRequired  丈夫姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandAge 丈夫年龄
 * @apiParam (data元素对象属性) {String} husbandAgeRequired  丈夫年龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandPhone 丈夫手机号
 * @apiParam (data元素对象属性) {String} husbandPhoneRequired  丈夫手机号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandEducation 丈夫文化程度
 * @apiParam (data元素对象属性) {String} husbandEducationRequired  丈夫文化程度是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandOccupation 丈夫职业
 * @apiParam (data元素对象属性) {String} husbandOccupationRequired  丈夫职业是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandNation 丈夫民族
 * @apiParam (data元素对象属性) {String} husbandRequired  丈夫民族是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandWorkUnit 丈夫工作单位
 * @apiParam (data元素对象属性) {String} husbandWorkUnitRequired  丈夫工作单位是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "pregnantName":"张三",
 *          "pregnantNameRequired":"0",
 *          "pregnantNumber":"00999888888",
 *          "pregnantNumberRequired":"0",
 *          "pregnantCard":"320722188888888888",
 *          "pregnantCardRequired":"1",
 *          "pregnantAge":"30",
 *          "pregnantAgeRequired":"1",
 *          "pregnantEducation":"本科",
 *          "pregnantEducationRequired":"1",
 *          "pregnantOccupation":"科员",
 *          "pregnantOccupationRequired":"1",
 *          "pregnantPhone":"13291332878",
 *          "pregnantPhoneRequired":"1",
 *          "pregnantNation":"汉",
 *          "pregnantNationRequired":"1",
 *          "pregnantResidence":"江苏常州",
 *          "pregnantResidenceRequired":"1",
 *          "pregnantPresentPlace":"武进区牛汤证",
 *          "pregnantPresentPlaceRequired":"1",
 *          "pregnantWorkUnit":"武进纺织有限公司",
 *          "pregnantWorkUnitRequired":"1",
 *          "husbandName":"张三",
 *          "husbandNameRequired":"1",
 *          "husbandAge":"30",
 *          "husbandAgeRequired":"1",
 *          "husbandPhone":"13292333333",
 *          "husbandPhoneRequired":"1",
 *          "husbandEducation":"职员",
 *          "husbandEducationRequired":"1",
 *          "husbandEducation":"本科",
 *          "husbandEducationquired":"1",
 *          "husbandNation":"汉族",
 *          "husbandNationRequired":"1",
 *          "husbandWorkUnit":"中科大有限公司",
 *          "husbandWorkUnitRequired":"1",
 *      }
 *  }
 */

/**
 * @apiGroup 03.Maternal
 * @api {GET} pregnantFirstFollowUp 02、第1次产前随访服务记录表
 * @apiVersion 1.0.0
 * @apiName pregnantFirstFollowUp 02、第1次产前随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 孕妇姓名
 * @apiParam (data元素对象属性) {String} pnameRequired  孕妇姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 填表日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  填表日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantWeeks 孕周
 * @apiParam (data元素对象属性) {String} pregnantWeeksRequired  孕周是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} age 年龄
 * @apiParam (data元素对象属性) {String} ageRequired  年龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandName 丈夫姓名
 * @apiParam (data元素对象属性) {String} husbandNameRequired  丈夫姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandAge 丈夫年龄
 * @apiParam (data元素对象属性) {String} husbandAgeRequired  丈夫年龄是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandPhone 丈夫手机号
 * @apiParam (data元素对象属性) {String} husbandPhoneRequired  丈夫手机号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantTime 孕次
 * @apiParam (data元素对象属性) {String} pregnantTimeRequired  孕次是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} productionTime 产次
 * @apiParam (data元素对象属性) {String} productionTimeRequired  产次是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} lastMenstruation 末次月经
 * @apiParam (data元素对象属性) {String} lastMenstruationRequired  末次月经是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dueDate 预产期
 * @apiParam (data元素对象属性) {String} dueDateRequired  预产期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} husbandPhone 丈夫手机号
 * @apiParam (data元素对象属性) {String} husbandPhoneRequired  丈夫手机号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pastHistory 既往史
 * @apiParam (data元素对象属性) {String} pastHistoryRequired  既往史是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} familyHistory 家族史
 * @apiParam (data元素对象属性) {String} familyHistoryRequired  家族史是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} personalHistory 个人史
 * @apiParam (data元素对象属性) {String} personalHistoryRequired  个人史是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} historyOfSurgery 手术史
 * @apiParam (data元素对象属性) {String} historyOfSurgeryRequired  手术史是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnancyHistory 孕产史
 * @apiParam (data元素对象属性) {String} pregnancyHistoryRequired  孕产史是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} height 身高
 * @apiParam (data元素对象属性) {String} heightRequired  身高是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired  体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} BMI 体质指数
 * @apiParam (data元素对象属性) {String} BMIRequired  体质指数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPressure 血压
 * @apiParam (data元素对象属性) {String} bloodPressureRequired  血压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} heart 心脏
 * @apiParam (data元素对象属性) {String} heartRequired  心脏是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} lungs 肺部
 * @apiParam (data元素对象属性) {String} lungsRequired  肺部是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} vulva 外阴
 * @apiParam (data元素对象属性) {String} vulvaRequired  外阴是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} cervical 宫颈
 * @apiParam (data元素对象属性) {String} cervicalRequired  宫颈是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} enclosure 附件
 * @apiParam (data元素对象属性) {String} enclosureRequired  附件是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} vagina 阴道
 * @apiParam (data元素对象属性) {String} vaginaRequired  阴道是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} enuterusclosure 子宫
 * @apiParam (data元素对象属性) {String} enclosureRequired  子宫是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hemoglobin 血红蛋白值
 * @apiParam (data元素对象属性) {String} hemoglobinRequired  血红蛋白值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} leucocyte 白细胞计数值
 * @apiParam (data元素对象属性) {String} leucocyteRequired  白细胞计数值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} thrombocytopenia 血小板计数值
 * @apiParam (data元素对象属性) {String} thrombocytopeniaRequired  血小板计数值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodOther 血常规其他
 * @apiParam (data元素对象属性) {String} bloodOtherRequired  血常规其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} proteinuria 尿蛋白
 * @apiParam (data元素对象属性) {String} proteinuriaRequired  尿蛋白是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} urine 尿糖
 * @apiParam (data元素对象属性) {String} urineRequired  尿糖是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} ketone 尿酮体
 * @apiParam (data元素对象属性) {String} ketoneRequired  尿酮体是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bld 尿潜血
 * @apiParam (data元素对象属性) {String} bldRequired  尿潜血是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} urineOther 尿常规其他
 * @apiParam (data元素对象属性) {String} urineOtherRequired  尿常规其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodType 血型
 * @apiParam (data元素对象属性) {String} bloodTypeRequired  血型是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodSugar 血糖
 * @apiParam (data元素对象属性) {String} bloodSugarRequired  血糖是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} seropropane 血清谷丙转氨酶
 * @apiParam (data元素对象属性) {String} seropropaneRequired  血清谷丙转氨酶是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} aminotransferase 血清谷草转氨酶
 * @apiParam (data元素对象属性) {String} aminotransferaseRequired  血清谷草转氨酶是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodProtein 血蛋白
 * @apiParam (data元素对象属性) {String} bloodProteinRequired  血蛋白是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} totalBilirubin 总胆红素
 * @apiParam (data元素对象属性) {String} totalBilirubinRequired  总胆红素是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bilirubin 结合胆红素
 * @apiParam (data元素对象属性) {String} bilirubinRequired  结合胆红素是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} serumCreatinine 血清肌酐
 * @apiParam (data元素对象属性) {String} serumCreatinineRequired  血清肌酐是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodUrea 血尿素
 * @apiParam (data元素对象属性) {String} bloodUreaRequired  血尿素是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} vaginalSecretions 阴道分泌物
 * @apiParam (data元素对象属性) {String} vaginalSecretionsRequired  阴道分泌物是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} vaginaCleanliness 阴道清洁度
 * @apiParam (data元素对象属性) {String} vaginaCleanlinessRequired  阴道清洁度是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} surfaceAntigen 乙型肝炎表面抗原
 * @apiParam (data元素对象属性) {String} surfaceAntigenRequired  乙型肝炎表面抗原是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} surfaceAntibody 乙型肝炎表面抗体
 * @apiParam (data元素对象属性) {String} surfaceAntibodyRequired  乙型肝炎表面抗体是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} EAntigen 乙型肝炎e抗原
 * @apiParam (data元素对象属性) {String} EAntigenBRequired  乙型肝炎e抗原是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} EAntibody 乙型肝炎e抗体
 * @apiParam (data元素对象属性) {String} EAntibodyBRequired  乙型肝炎e抗体是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} coreAntibody 乙型肝炎核心抗体
 * @apiParam (data元素对象属性) {String} coreAntibodyBRequired  乙型肝炎核心抗体是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} serological 梅毒血清学试验
 * @apiParam (data元素对象属性) {String} serologicalRequired  梅毒血清学试验是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} HIV HIV抗体检测
 * @apiParam (data元素对象属性) {String} HIVlRequired  HIV抗体检测是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} BUltrasound B超
 * @apiParam (data元素对象属性) {String} BUltrasoundRequired  B超是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} overallAssessment 总体评估
 * @apiParam (data元素对象属性) {String} overallAssessmentRequired  总体评估是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired  转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired  指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-01-01",
 *          "followUpDateRequired":"1",
 *          "pregnantWeeks":"20",
 *          "pregnantWeeksRequired":"1",
 *          "age":"30",
 *          "ageRequired":"1",
 *          "husbandName":"张三",
 *          "husbandNameRequired":"1",
 *          "husbandAge":"30",
 *          "husbandAgeRequired":"1",
 *          "husbandPhone":"13292333333",
 *          "husbandPhoneRequired":"1",
 *          "pregnantTime":"1",
 *          "pregnantTimeRequired":"1",
 *          "productionTime":"剖宫产1次",
 *          "productionTimeRequired":"1",
 *          "lastMenstruation":"2017-10-10",
 *          "lastMenstruationRequired":"1",
 *          "dueDate":"2018-10-10",
 *          "dueDateRequired":"1",
 *          "pastHistory":"无",
 *          "pastHistoryRequired":"1",
 *          "personalHistory":"贫血",
 *          "personalHistoryRequired":"1",
 *          "historyOfSurgery":"无",
 *          "historyOfSurgeryRequired":"1",
 *          "pregnancyHistory":"自然流产",
 *          "pregnancyHistoryRequired":"1",
 *          "height":"154",
 *          "heightRequired":"1",
 *          "weight":"154",
 *          "weightRequired":"1",
 *          "weight":"15kg/m2",
 *          "weightRequired":"1",
 *          "bloodPressure":"139/69mmHg",
 *          "bloodPressureRequired":"1",
 *          "heart":"未见异常",
 *          "heartRequired":"1",
 *          "lungs":"未见异常",
 *          "lungsRequired":"1",
 *          "vulva":"未见异常",
 *          "vulvaRequired":"1",
 *          "cervical":"未见异常",
 *          "cervicalRequired":"1",
 *          "enclosure":"未见异常",
 *          "enclosureRequired":"1",
 *          "vagina":"未见异常",
 *          "vaginaRequired":"1",
 *          "enclosure":"未见异常",
 *          "enclosureRequired":"1",
 *          "hemoglobin":"112",
 *          "hemoglobinRequired":"1",
 *          "leucocyte":"112",
 *          "leucocyteRequired":"1",
 *          "thrombocytopenia":"112",
 *          "thrombocytopeniaRequired":"1",
 *          "bloodOther":"112",
 *          "bloodOtherRequired":"1",
 *          "proteinuria":"12",
 *          "proteinuriaRequired":"1",
 *          "urine":"12",
 *          "urineRequired":"1",
 *          "ketone":"12",
 *          "ketoneRequired":"1",
 *          "bld":"12",
 *          "bldRequired":"1",
 *          "urineOther":"12",
 *          "urineOtherRequired":"1",
 *          "bloodType":"o",
 *          "bloodTypeRequired":"1",
 *          "bloodSugar":"8mmol/L",
 *          "bloodSugarRequired":"1",
 *          "seropropane":"2",
 *          "seropropaneRequired":"1",
 *          "aminotransferase":"2",
 *          "aminotransferaseRequired":"1",
 *          "bloodProtein":"2",
 *          "bloodProteinRequired":"1",
 *          "totalBilirubin":"2",
 *          "totalBilirubinRequired":"1",
 *          "bilirubin":"2",
 *          "bilirubinRequired":"1",
 *          "serumCreatinine":"1",
 *          "serumCreatinineRequired":"1",
 *          "bloodUrea":"1",
 *          "bloodUreaRequired":"1",
 *          "vaginalSecretions":"未见异常",
 *          "vaginalSecretionsRequired":"1",
 *          "vaginaCleanliness":"I",
 *          "vaginaCleanlinessRequired":"1",
 *          "surfaceAntigen":"+",
 *          "surfaceAntigenRequired":"1",
 *          "surfaceAntibody":"+",
 *          "surfaceAntibodyRequired":"1",
 *          "EAntigen":"+",
 *          "EAntigenRequired":"1",
 *          "EAntibody":"+",
 *          "EAntibodyRequired":"1",
 *          "coreAntibody":"+",
 *          "coreAntibodyRequired":"1",
 *          "serological":"阴性",
 *          "serologicalRequired":"1",
 *          "HIV":"阴性",
 *          "HIVRequired":"1",
 *          "BUltrasound":"有",
 *          "BUltrasoundRequired":"1",
 *          "overallAssessment":"未见异常",
 *          "overallAssessmentRequired":"1",
 *          "referralAdvice":"无",
 *          "referralAdviceRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/203984u.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 03.Maternal
 * @api {GET} pregnantNTimesFollowUp 03、第2~5次产前随访服务记录表
 * @apiVersion 1.0.0
 * @apiName pregnantNTimesFollowUp 03、第2~5次产前随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} times 第几次（前端校验第几次随访，5次以后不显示，提交入口，后台同样校验）
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired 姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pregnantWeeks 孕周
 * @apiParam (data元素对象属性) {String} pregnantWeeksRequired  孕周是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mainComplaint 主 诉
 * @apiParam (data元素对象属性) {String} mainComplaintRequired  主 诉是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired  体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fundusHeight 宫底高度
 * @apiParam (data元素对象属性) {String} fundusHeightRequired  宫底高度是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} abdominalCircumference 腹 围
 * @apiParam (data元素对象属性) {String} abdominalCircumferenceRequired  腹 围是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} babyPosition 胎 位
 * @apiParam (data元素对象属性) {String} babyPositionRequired  胎 位是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fetalHeartRate 胎心率
 * @apiParam (data元素对象属性) {String} fetalHeartRateRequired  胎心率是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPressure 血 压
 * @apiParam (data元素对象属性) {String} bloodPressureRequired  血 压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hemoglobin 血红蛋白
 * @apiParam (data元素对象属性) {String} hemoglobinRequired  血红蛋白是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} urineProtein 尿蛋白
 * @apiParam (data元素对象属性) {String} urineProteinRequired  尿蛋白是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他辅助检查
 * @apiParam (data元素对象属性) {String} otherRequired  其他辅助检查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 分 类
 * @apiParam (data元素对象属性) {String} classificationRequired  分 类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired  转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired  指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "times":"2",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "pregnantWeeks":"40",
 *          "pregnantWeeksRequired":"1",
 *          "mainComplaint":"无",
 *          "mainComplaintRequired":"1",
 *          "fundusHeight":"50",
 *          "fundusHeightRequired":"1",
 *          "weight":"50",
 *          "weightRequired":"1",
 *          "abdominalCircumference":"100",
 *          "abdominalCircumferenceRequired":"1",
 *          "babyPosition":"头",
 *          "babyPositionRequired":"1",
 *          "fetalHeartRate":"140",
 *          "fetalHeartRateRequired":"1",
 *          "bloodPressure":"136/90",
 *          "bloodPressureRequired":"1",
 *          "hemoglobin":"114",
 *          "hemoglobinRequired":"1",
 *          "urineProtein":"12",
 *          "urineProteinRequired":"1",
 *          "other":"未见异常",
 *          "otherRequired":"1",
 *          "classification":"未见异常",
 *          "classificationRequired":"1",
 *          "prevalence":"无",
 *          "prevalenceRequired":"1",
 *          "referralAdvice":"无",
 *          "referralAdviceRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/230984.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 03.Maternal
 * @api {GET} postpartumFollowUp 04、产后访视记录
 * @apiVersion 1.0.0
 * @apiName postpartumFollowUp 04、产后访视记录
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dateOfDelivery 分娩日期
 * @apiParam (data元素对象属性) {String} dateOfDeliveryRequired  分娩日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dischargeDate 出院日期
 * @apiParam (data元素对象属性) {String} dischargeDateRequired  出院日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} temperature 体 温
 * @apiParam (data元素对象属性) {String} temperatureRequired  体 温是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} generalHealth 一般健康情况
 * @apiParam (data元素对象属性) {String} generalHealthRequired  一般健康情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} psychologicalCondition 一般心理状况
 * @apiParam (data元素对象属性) {String} psychologicalConditionRequired  一般心理状况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPressure 血 压
 * @apiParam (data元素对象属性) {String} bloodPressureRequired  血 压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} breast 乳房
 * @apiParam (data元素对象属性) {String} breastRequired  乳房是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} lochia 恶露
 * @apiParam (data元素对象属性) {String} lochiaRequired  恶露是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} uterus 子宫
 * @apiParam (data元素对象属性) {String} uterusRequired  子宫是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} wound 伤口
 * @apiParam (data元素对象属性) {String} woundRequired  伤口是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他
 * @apiParam (data元素对象属性) {String} otherRequired  其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 分 类
 * @apiParam (data元素对象属性) {String} classificationRequired  分 类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired  转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired  指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "dateOfDelivery":"2018-01-09",
 *          "dateOfDeliveryRequired":"1",
 *          "dischargeDate":"2018-01-16",
 *          "dischargeDateRequired":"1",
 *          "temperature":"50",
 *          "temperatureRequired":"1",
 *          "generalHealth":"良好",
 *          "generalHealthRequired":"1",
 *          "psychologicalCondition":"良好",
 *          "psychologicalConditionRequired":"1",
 *          "bloodPressure":"140/90",
 *          "bloodPressureRequired":"1",
 *          "breast":"良好",
 *          "breastRequired":"1",
 *          "lochia":"无",
 *          "lochiaRequired":"1",
 *          "uterus":"良好",
 *          "uterusRequired":"1",
 *          "wound":"未见异常",
 *          "woundRequired":"1",
 *          "other":"未见异常",
 *          "otherRequired":"1",
 *          "prevalence":"无",
 *          "prevalenceRequired":"1",
 *          "referralAdvice":"无",
 *          "referralAdviceRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/3w904u7.jpg"
 *      }
 *  }
 */


/**
 * @apiGroup 03.Maternal
 * @api {GET} postpartumFollowUp 05、产后42天健康检查记录表
 * @apiVersion 1.0.0
 * @apiName postpartumFollowUp 05、产后42天健康检查记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dateOfDelivery 分娩日期
 * @apiParam (data元素对象属性) {String} dateOfDeliveryRequired  分娩日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dischargeDate 出院日期
 * @apiParam (data元素对象属性) {String} dischargeDateRequired  出院日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} temperature 体 温
 * @apiParam (data元素对象属性) {String} temperatureRequired  体 温是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} generalHealth 一般健康情况
 * @apiParam (data元素对象属性) {String} generalHealthRequired  一般健康情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} psychologicalCondition 一般心理状况
 * @apiParam (data元素对象属性) {String} psychologicalConditionRequired  一般心理状况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPressure 血 压
 * @apiParam (data元素对象属性) {String} bloodPressureRequired  血 压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} breast 乳房
 * @apiParam (data元素对象属性) {String} breastRequired  乳房是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} lochia 恶露
 * @apiParam (data元素对象属性) {String} lochiaRequired  恶露是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} uterus 子宫
 * @apiParam (data元素对象属性) {String} uterusRequired  子宫是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} wound 伤口
 * @apiParam (data元素对象属性) {String} woundRequired  伤口是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他
 * @apiParam (data元素对象属性) {String} otherRequired  其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 分 类
 * @apiParam (data元素对象属性) {String} classificationRequired  分 类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralAdvice 转诊建议
 * @apiParam (data元素对象属性) {String} referralAdviceRequired  转诊建议是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} guidance 指导
 * @apiParam (data元素对象属性) {String} guidanceRequired  指导是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-01-09",
 *          "followUpDateRequired":"1",
 *          "dateOfDelivery":"2018-01-09",
 *          "dateOfDeliveryRequired":"1",
 *          "dischargeDate":"2018-01-16",
 *          "dischargeDateRequired":"1",
 *          "temperature":"50",
 *          "temperatureRequired":"1",
 *          "generalHealth":"良好",
 *          "generalHealthRequired":"1",
 *          "psychologicalCondition":"良好",
 *          "psychologicalConditionRequired":"1",
 *          "bloodPressure":"140/90",
 *          "bloodPressureRequired":"1",
 *          "breast":"良好",
 *          "breastRequired":"1",
 *          "lochia":"无",
 *          "lochiaRequired":"1",
 *          "uterus":"良好",
 *          "uterusRequired":"1",
 *          "wound":"未见异常",
 *          "woundRequired":"1",
 *          "other":"未见异常",
 *          "otherRequired":"1",
 *          "prevalence":"无",
 *          "prevalenceRequired":"1",
 *          "referralAdvice":"无",
 *          "referralAdviceRequired":"1",
 *          "guidance":"科学喂养",
 *          "guidance":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/3w904u7.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 04.OldPeople
 * @api {GET} oldPeopleAbility 01、老年人生活自理能力评估表
 * @apiVersion 1.0.0
 * @apiName oldPeopleAbility 01、老年人生活自理能力评估表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} toiletRequired 如厕（1必填 0非必填）
 * @apiParam (data元素对象属性) {String} toiletValue 等级（1可自理 2轻度依赖 3中度依赖 4不能自理）
 * @apiParam (data元素对象属性) {String} toilet 如厕分数（0 1 5 10）
 * @apiParam (data元素对象属性) {String} dressingRequired 穿衣（1必填 0非必填）
 * @apiParam (data元素对象属性) {String} dressingValue 等级（1可自理 2轻度依赖 3中度依赖 4不能自理）
 * @apiParam (data元素对象属性) {String} dressing 穿衣分数（0 0 3 5）
 * @apiParam (data元素对象属性) {String} mealRequired 进餐（1必填 0非必填）
 * @apiParam (data元素对象属性) {String} mealValue 等级（1可自理 2轻度依赖 3中度依赖 4不能自理）
 * @apiParam (data元素对象属性) {String} meal 进餐分数（0 0 3 5）
 * @apiParam (data元素对象属性) {String} fresheningRequired 梳洗（1必填 0非必填）
 * @apiParam (data元素对象属性) {String} fresheningValue 等级（1可自理 2轻度依赖 3中度依赖 4不能自理）
 * @apiParam (data元素对象属性) {String} freshening 梳洗分数（0 1 3 5）
 * @apiParam (data元素对象属性) {String} avtivityRequired 活动（1必填 0非必填）
 * @apiParam (data元素对象属性) {String} activityValue 等级（1可自理 2轻度依赖 3中度依赖 4不能自理）
 * @apiParam (data元素对象属性) {String} activity 活动分数（0 1 5 10）
 * @apiParam (data元素对象属性) {String} nameRequired 姓名（1必填 0非必填）
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} numberRequired 
 * @apiParam (data元素对象属性) {String} number  
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} totalScore 总分
 * @apiParam (data元素对象属性) {String} pictureUrlOne 合照图片一
 * @apiParam (data元素对象属性) {String} pictureUrlTwo 合照图片二
 * @apiParam (data元素对象属性) {String} status 记录状态（1正常 0删除）
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 * {
 *    "errcode": 200,
 *    "data": {
 *        "toiletRequired": "1",
 *        "toiletValue": "1",
 *        "toilet": "0",
 *        "dressingRequired": "1",
 *        "dressingValue": "1",
 *        "dressing": "0",
 *        "mealRequired": "1",
 *        "mealValue": "1",
 *        "meal": "0",
 *        "fresheningRequired": "1",
 *        "fresheningValue": "1",
 *        "freshening": "0",
 *        "avtivityRequired": "1",
 *        "activityValue": "1",
 *        "activity": "0",
 *        "nameRequired": "1",
 *        "name": "唐山",
 *        "numberRequired": "1",
 *        "number": "",
 *        "fileNumber": "",
 *        "totalScore": "0",
 *        "pictureUrlOne": "",
 *        "pictureUrlTwo": "",
 *        "status": 1
 *    },
 *    "errmsg": "success"
 * }
 */

/**
 * @apiGroup 04.OldPeople
 * @api {GET} oldPeopleHealthManagement 02、老年人中医药健康管理服务记录表
 * @apiVersion 1.0.0
 * @apiName oldPeopleHealthManagement 02、老年人中医药健康管理服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} sublingualVeinStasisPurpleOrThickeningRequired 舌下静脉瘀紫或增粗(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} afterEatingColdFoodWillBeUncomfortable 吃喝了凉的后会不舒服(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} coldHandsAndFeet 手脚发凉(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} brownPatchesOnFace 面色出现褐色斑块(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} feelUnhappyRequired 心情不愉快(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} thickAndGreasyTongue 舌苔厚腻(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} limbsNumbnessRequired 肢体麻木(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired 编号(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired 随访医生签名图片地址(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} backOrWaistAndKneesColdRequired 背部或腰膝部怕冷(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryStoolRequired 大便干燥(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} skinEczemaSoresRequired 皮肤湿疹、疮疖(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} thickAndGreasyTongueRequired 舌苔厚腻(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} brownPatchesOnFaceRequired 面色出现褐色斑块(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} excessiveBodyRequired 身体超重(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} noEnergyToSpeak 话没力气(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} noEnergyToSpeakRequired 话没力气(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryLipsOrDrySkinRequired 皮肤或口唇干(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryMouthAndThroatRequired 口干咽燥(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryStool 大便干燥(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} easyToFeelScared 感到害怕(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} facialGreasy 面部油腻(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} sleepSnoringRequired 睡眠打鼾(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryLipsOrDrySkin 皮肤或口唇干(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} sublingualVeinStasisPurpleOrThickening 舌下静脉瘀紫或增粗(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} anxiety 焦虑不安(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} fullOfEnergy 精力充沛(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} abdominalHypertrophyRequired 腹部肥大(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} canNotStandTheCold 受不了寒冷(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} coldHandsAndFeetRequired 手脚发凉(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} stoolStickyRequired 大便黏滞(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} feelLonelyRequired 感到孤独(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} pictureUrlTwo 医生用户合照2
 * @apiParam (data元素对象属性) {String} anxietyRequired 焦虑不安(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} limbsNumbness 肢体麻木(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} excessiveBody 身体超重(1BMI＜24 224≤BMI＜25 325≤BMI＜26 426≤BMI＜28 5BMI≥28)
 * @apiParam (data元素对象属性) {String} abdominalHypertrophy 腹部肥大(1腹围<80cm，相当于2.4尺 2腹围80-85cm，2.4-2.55尺 3腹围86-90cm，2.56-2.7尺 4腹围1-105cm，2.71-3.15尺 5腹围>105cm或3.15尺)
 * @apiParam (data元素对象属性) {String} sleepSnoring 睡眠打鼾(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} status 记录状态(1正常 0删除)
 * @apiParam (data元素对象属性) {String} easyToFatigueRequired 容易疲乏(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} easyToFeelScaredRequired 感到害怕(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} badBreathRequired 嘴里有异味(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} skinEczemaSores 皮肤湿疹、疮疖(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} feelUnhappy 心情不愉快(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} scratches 皮肤一抓就红(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} shortnessOfBreathRequired 呼吸短促(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} facialGreasyRequired 面部油腻(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} badBreath 嘴里有异味(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} dryMouthAndThroat 口干咽燥(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} numberOfColdEveryYear 每年感冒的次数(1一年＜2次 2一年感冒2-4次 3一年感冒5-6次 4一年8次以上 5几乎每月)
 * @apiParam (data元素对象属性) {String} pictureUrlOne 医生用户合照1
 * @apiParam (data元素对象属性) {String} cymbidiumBruiseSubcutaneousBleeding 出现青紫瘀斑、皮下出血(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} createDate 创建时间
 * @apiParam (data元素对象属性) {String} urticariaRequired 容易起荨麻疹(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} easilyAllergic 容易过敏(1从来没有 2一年1、2次 3一年3、4次 4一年5、6次 5每次遇到上述原因都过敏)
 * @apiParam (data元素对象属性) {String} nasalCongestionRunnyNose 鼻塞、流鼻涕(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} nasalCongestionRunnyNoseRequired 鼻塞、流鼻涕(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} cymbidiumBruiseSubcutaneousBleedingRequired 出现青紫瘀斑、皮下出血(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} nameRequired 姓名(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryEyesRequired 眼睛干涩(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} canNotStandTheColdRequired 受不了寒冷(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} numberOfColdEveryYearRequired 每年感冒的次数(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} afterEatingColdFoodWillBeUncomfortableRequired 吃喝了凉的后会不舒服(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} dryEyes 眼睛干涩(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} backOrWaistAndKneesCold 背部或腰膝部怕冷(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} easilyAllergicRequired 容易过敏(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} easyToFatigue 容易疲乏(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} scratchesRequired 皮肤一抓就红(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} feelLonely 感到孤独(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} urticaria 容易起荨麻疹(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} shortnessOfBreath 呼吸短促(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} fullOfEnergyRequired 精力充沛(1必填 0非必填)
 * @apiParam (data元素对象属性) {String} stoolSticky 大便黏滞(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (data元素对象属性) {String} physiqueList 体质列表（一个体质可能对应多个问题，具体算法后台控制）
 *
 * @apiParam (physiqueList数组元素对象属性) {String} physiqueIdentification 体质辨识（1得分；2是；3倾向是）
 * @apiParam (physiqueList数组元素对象属性) {String} physiqueScore 体质分数
 * @apiParam (physiqueList数组元素对象属性) {String} healthGuidance 保健指导
 * @apiParam (physiqueList数组元素对象属性) {String} physiqueName 体质名称
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 * {
 *    "errcode": 200,
 *    "data": {
 *        "sublingualVeinStasisPurpleOrThickeningRequired": "1",
 *        "afterEatingColdFoodWillBeUncomfortable": "3",
 *        "coldHandsAndFeet": "4",
 *        "brownPatchesOnFace": "3",
 *        "fileNumber": "",
 *        "feelUnhappyRequired": "1",
 *        "doctorSignNameImageUrlRequired": "1",
 *        "thickAndGreasyTongue": "3",
 *        "limbsNumbnessRequired": "1",
 *        "number": "",
 *        "backOrWaistAndKneesColdRequired": "1",
 *        "dryStoolRequired": "1",
 *        "skinEczemaSoresRequired": "1",
 *        "thickAndGreasyTongueRequired": "1",
 *        "brownPatchesOnFaceRequired": "1",
 *        "excessiveBodyRequired": "1",
 *        "noEnergyToSpeak": "3",
 *        "noEnergyToSpeakRequired": "1",
 *        "dryLipsOrDrySkinRequired": "1",
 *        "dryMouthAndThroatRequired": "1",
 *        "dryStool": "3",
 *        "easyToFeelScared": "3",
 *        "facialGreasy": "3",
 *        "sleepSnoringRequired": "1",
 *        "dryLipsOrDrySkin": "3",
 *        "sublingualVeinStasisPurpleOrThickening": "3",
 *        "anxiety": "3",
 *        "fullOfEnergy": "3",
 *        "abdominalHypertrophyRequired": "1",
 *        "canNotStandTheCold": "4",
 *        "coldHandsAndFeetRequired": "1",
 *        "stoolStickyRequired": "1",
 *        "feelLonelyRequired": "1",
 *        "numberRequired": "1",
 *        "pictureUrlTwo": "",
 *        "anxietyRequired": "1",
 *        "limbsNumbness": "3",
 *        "name": "慕容雨",
 *        "excessiveBody": "3",
 *        "abdominalHypertrophy": "3",
 *        "sleepSnoring": "3",
 *        "status": 1,
 *        "easyToFatigueRequired": "1",
 *        "easyToFeelScaredRequired": "1",
 *        "badBreathRequired": "1",
 *        "skinEczemaSores": "3",
 *        "feelUnhappy": "3",
 *        "scratches": "2",
 *        "shortnessOfBreathRequired": "1",
 *        "facialGreasyRequired": "1",
 *        "badBreath": "3",
 *        "dryMouthAndThroat": "3",
 *        "numberOfColdEveryYear": "3",
 *        "pictureUrlOne": "http://192.168.10.14:8099/open/file/download?data=M80%2FCELarJLLVuHx7ebBTTPL9DV0tTTlx0bocjvRWkAFIdWeIaWif1cAU059yW8G",
 *        "cymbidiumBruiseSubcutaneousBleeding": "3",
 *        "createDate": "2018-09-05",
 *        "urticariaRequired": "1",
 *        "easilyAllergic": "3",
 *        "nasalCongestionRunnyNose": "3",
 *        "nasalCongestionRunnyNoseRequired": "1",
 *        "physiqueList": [
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "12",
 *                "healthGuidance": "",
 *                "physiqueName": "气虚质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "14",
 *                "healthGuidance": "",
 *                "physiqueName": "阳虚质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "13",
 *                "healthGuidance": "",
 *                "physiqueName": "阴虚质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "12",
 *                "healthGuidance": "",
 *                "physiqueName": "痰湿质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "12",
 *                "healthGuidance": "",
 *                "physiqueName": "湿热质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "12",
 *                "healthGuidance": "",
 *                "physiqueName": "血瘀质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "12",
 *                "healthGuidance": "",
 *                "physiqueName": "气郁质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "11",
 *                "healthGuidance": "",
 *                "physiqueName": "特禀质"
 *            },
 *            {
 *                "physiqueIdentification": "是",
 *                "physiqueScore": "14",
 *                "healthGuidance": "",
 *                "physiqueName": "平和质"
 *            }
 *        ],
 *        "cymbidiumBruiseSubcutaneousBleedingRequired": "1",
 *        "doctorSignNameImageUrl": "http://192.168.10.14:8099/open/file/download?data=M80%2FCELarJLLVuHx7ebBTd7OXvY5VZNa2Jm3pV6GYi5ZOOgW4cHRXJK5E4FoKB81",
 *        "nameRequired": "1",
 *        "dryEyesRequired": "1",
 *        "canNotStandTheColdRequired": "1",
 *        "numberOfColdEveryYearRequired": "1",
 *        "afterEatingColdFoodWillBeUncomfortableRequired": "1",
 *        "dryEyes": "4",
 *        "backOrWaistAndKneesCold": "3",
 *        "easilyAllergicRequired": "1",
 *        "easyToFatigue": "3",
 *        "scratchesRequired": "1",
 *        "feelLonely": "3",
 *        "urticaria": "3",
 *        "shortnessOfBreath": "3",
 *        "fullOfEnergyRequired": "1",
 *        "stoolSticky": "3"
 *    },
 *    "errmsg": "success"
 * }
 */

/**
 * @apiGroup 05.HighBloodPressure
 * @api {GET} highBloodPressureFollowUp 01、高血压患者随访服务记录表
 * @apiVersion 1.0.0
 * @apiName highBloodPressureFollowUp 01、高血压患者随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 * @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} symptom 症 状
 * @apiParam (data元素对象属性) {String} symptomRequired  症 状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPress 血压
 * @apiParam (data元素对象属性) {String} bloodPressRequired  血压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} targetWeight 目标体重
 * @apiParam (data元素对象属性) {String} weightRequired  体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} BMI 体质指数
 * @apiParam (data元素对象属性) {String} targetBMI 目标体质指数
 * @apiParam (data元素对象属性) {String} BMIRequired  体质指数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} heartRate 心率
 * @apiParam (data元素对象属性) {String} heartRateRequired  心率是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他
 * @apiParam (data元素对象属性) {String} otherRequired  其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailySmoking 日吸烟量
 * @apiParam (data元素对象属性) {String} targetDailySmoking 下次目标日吸烟量
 * @apiParam (data元素对象属性) {String} dailySmokingRequired  日吸烟量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailyDrink 日饮酒量
 * @apiParam (data元素对象属性) {String} targetDailyDrink 下次目标日饮酒量
 * @apiParam (data元素对象属性) {String} dailyDrinkRequired  日饮酒量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} motion 运动 
 * @apiParam (data元素对象属性) {object} targetMotion 下次目标运动
 * @apiParam (data元素对象属性) {String} motionRequired  运动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} saltUptake 摄盐情况
 * @apiParam (data元素对象属性) {String} targetSaltUptake 目标摄盐情况
 * @apiParam (data元素对象属性) {String} saltUptakeRequired  摄盐情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} psychological 心理调整
 * @apiParam (data元素对象属性) {String} psychologicalRequired  心理调整是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complianceBehavior 遵医行为
 * @apiParam (data元素对象属性) {String} complianceBehaviorRequired  遵医行为是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} otherExamination 其他辅助检查
 * @apiParam (data元素对象属性) {String} otherExaminationRequired  其他辅助检查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugCompliance 服药依从性
 * @apiParam (data元素对象属性) {String} drugComplianceRequired  服药依从性查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseDrugReaction 药物不良反应
 * @apiParam (data元素对象属性) {String} adverseDrugReactionRequired  药物不良反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 此次随访分类
 * @apiParam (data元素对象属性) {String} classificationRequired  此次随访分类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Array}  drugList 用药情况
 * @apiParam (data元素对象属性) {String} drugRequired  用药情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiParam (symptom对象属性) {Object} symptom 症 状
 * @apiParam (symptom对象属性) {String} other 其他
 *
 * @apiParam (motion对象属性) {String} motionWeeks 运动(次/周)
 * @apiParam (motion对象属性) {String} motionTimes 运动(分钟/次)
 *
 * @apiParam (targetMotion对象属性) {String} targetMotionWeeks 下次目标运动(次/周)
 * @apiParam (targetMotion对象属性) {String} targetMotionTimes 下次目标运动(分钟/次)
 *
 * @apiParam (drugList元素对象属性) {String} drugName 药物名称
 * @apiParam (drugList元素对象属性) {String} drugTimes 每日次
 * @apiParam (drugList元素对象属性) {String} drugConsumption 每次用量
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "symptom":{
 *              "symptom":"1,2,3",
 *              "other":"无"
 *          },
 *          "symptomRequired":"1",
 *          "bloodPress":"0",
 *          "bloodPressRequired":"1",
 *          "weight":"0",
 *          "targetWeight":"0",
 *          "weightRequired":"1",
 *          "BMI":"0",
 *          "targetBMI":"0",
 *          "BMIRequired":"1",
 *          "heartRate":"0",
 *          "heartRateRequired":"1",
 *          "other":"0",
 *          "otherRequired":"1",
 *          "dailySmoking":"无",
 *          "targetDailySmoking":"无",
 *          "dailySmokingRequired":"1",
 *          "dailyDrink":"无",
 *          "targetDailyDrink":"无",
 *          "dailyDrinkRequired":"1",
 *          "motion":{
 *              "motionWeeks":"2次/周",
 *              "motionTimes":"20分钟/次"
 *          },
 *          "targetMotion":{
 *              "targetMotionWeeks":"2次/周",
 *              "targetMotionTimes":"20分钟/次"
 *          },
 *          "motionRequired":"1",
 *          "saltUptake":"中",
 *          "targetSaltUptake":"中",
 *          "saltUptakeRequired":"1",
 *          "psychological":"中",
 *          "psychologicalRequired":"1",
 *          "complianceBehavior":"中",
 *          "complianceBehaviorRequired":"1",
 *          "otherExamination":"无",
 *          "otherExaminationRequired":"1",
 *          "drugCompliance":"无",
 *          "drugComplianceRequired":"1",
 *          "adverseDrugReaction":"无",
 *          "adverseDrugReactionRequired":"1",
 *          "classification":"控制满意",
 *          "classificationRequired":"1",
 *          "drugList":[{
 *              "drugName":"药物名称",
 *              "drugTimes":"3",
 *              "drugConsumption":"1片"
 *          }],
 *          "referralReason":"无",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"红糖卫生室",
 *          "referralInstitutionRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrl":"http://img.gagctv.com/203948.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 06.Diabetes
 * @api {GET} diabetesFollowUp 01、2型糖尿病患者随访服务记录表
 * @apiVersion 1.0.0
 * @apiName diabetesFollowUp 01、2型糖尿病患者随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 * @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} symptom 症 状
 * @apiParam (data元素对象属性) {String} symptomRequired  症 状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPress 血压
 * @apiParam (data元素对象属性) {String} bloodPressRequired  血压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} targetWeight 目标体重
 * @apiParam (data元素对象属性) {String} weightRequired  体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} BMI 体质指数
 * @apiParam (data元素对象属性) {String} targetBMI 目标体质指数
 * @apiParam (data元素对象属性) {String} BMIRequired  体质指数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pulse 足背动脉搏动
 * @apiParam (data元素对象属性) {String} pulseRequired  足背动脉搏动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他
 * @apiParam (data元素对象属性) {String} otherRequired  其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailySmoking 日吸烟量
 * @apiParam (data元素对象属性) {String} targetDailySmoking 下次目标日吸烟量
 * @apiParam (data元素对象属性) {String} dailySmokingRequired  日吸烟量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailyDrink 日饮酒量
 * @apiParam (data元素对象属性) {String} targetDailyDrink 下次目标日饮酒量
 * @apiParam (data元素对象属性) {String} dailyDrinkRequired  日饮酒量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} motion 运动
 * @apiParam (data元素对象属性) {object} targetMotion 下次目标运动
 * @apiParam (data元素对象属性) {String} motionRequired  运动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} stapleFood 主食
 * @apiParam (data元素对象属性) {String} targetStapleFood 目标主食
 * @apiParam (data元素对象属性) {String} stapleFoodRequired 主食是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} psychological 心理调整
 * @apiParam (data元素对象属性) {String} psychologicalRequired  心理调整是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complianceBehavior 遵医行为
 * @apiParam (data元素对象属性) {String} complianceBehaviorRequired  遵医行为是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodGlucose 空腹血糖值
 * @apiParam (data元素对象属性) {String} bloodGlucoseRequired  空腹血糖值是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hemoglobin 糖化血红蛋白
 * @apiParam (data元素对象属性) {String} hemoglobinRequired 糖化血红蛋白是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} date 检查日期
 * @apiParam (data元素对象属性) {String} dateRequired 检查日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugCompliance 服药依从性
 * @apiParam (data元素对象属性) {String} drugComplianceRequired  服药依从性查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseDrugReaction 药物不良反应
 * @apiParam (data元素对象属性) {String} adverseDrugReactionRequired  药物不良反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hypoglycemia 低血糖反应
 * @apiParam (data元素对象属性) {String}  hypoglycemiaRequired  低血糖反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 此次随访分类
 * @apiParam (data元素对象属性) {String} classificationRequired  此次随访分类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Array}  drugList 用药情况
 * @apiParam (data元素对象属性) {String} drugRequired  用药情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} insulinType 胰岛素种类
 * @apiParam (data元素对象属性) {String} insulinTypeRequired  胰岛素种类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} insulinDosage 胰岛素用法和用量
 * @apiParam (data元素对象属性) {String} insulinDosageRequired  胰岛素用法和用量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiParam (symptom对象属性) {Object} symptom 症 状
 * @apiParam (symptom对象属性) {String} other 其他
 *
 * @apiParam (motion元素对象属性) {String} motionWeeks 运动(次/周)
 * @apiParam (motion元素对象属性) {String} motionTimes 运动(分钟/次)
 *
 * @apiParam (targetMotion对象属性) {String} targetMotionWeeks 下次目标运动(次/周)
 * @apiParam (targetMotion对象属性) {String} targetMotionTimes 下次目标运动(分钟/次)
 *
 * @apiParam (drugList元素对象属性) {String} drugName 药物名称
 * @apiParam (drugList元素对象属性) {String} drugTimes 每日次
 * @apiParam (drugList元素对象属性) {String} drugConsumption 每次用量
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "symptom":{
 *              "symptom":"1,2,3",
 *              "other":"无"
 *          },
 *          "symptomRequired":"1",
 *          "bloodPress":"0",
 *          "bloodPressRequired":"1",
 *          "weight":"0",
 *          "targerWeight":"0",
 *          "weightRequired":"1",
 *          "BMI":"0",
 *          "targetBMI":"0",
 *          "BMIRequired":"1",
 *          "pulse":"0",
 *          "pulseRequired":"1",
 *          "bloodGlucose":"6",
 *          "bloodGlucoseRequired":"1",
 *          "other":"无",
 *          "otherRequired":"1",
 *          "hemoglobin":"23",
 *          "hemoglobingRequired":"1",
 *          "date":"2017-01-01",
 *          "dategRequired":"1",
 *          "dailySmoking":"无",
 *          "targetDailySmoking":"无",
 *          "dailySmokingRequired":"1",
 *          "dailyDrink":"无",
 *          "targetDailyDrink":"无",
 *          "dailyDrinkRequired":"1",
 *          "motion":{
 *              "motionWeeks":"2次/周",
 *              "motionTimes":"20分钟/次"
 *          },
 *          "targetMotion":{
 *              "targetMotionWeeks":"2次/周",
 *              "targetMotionTimes":"20分钟/次"
 *          },
 *          "motionRequired":"1",
 *          "stapleFood":"中",
 *          "targetStapleFood":"中",
 *          "stapleFoodRequired":"1",
 *          "psychological":"中",
 *          "psychologicalRequired":"1",
 *          "complianceBehavior":"中",
 *          "complianceBehaviorRequired":"1",
 *          "drugCompliance":"无",
 *          "drugComplianceRequired":"1",
 *          "adverseDrugReaction":"无",
 *          "adverseDrugReactionRequired":"1",
 *          "hypoglycemia":"偶尔",
 *          "hypoglycemiaRequired":"1",
 *          "classification":"控制满意",
 *          "classificationRequired":"1",
 *          "drugList":[{
 *              "drugName":"药物名称",
 *              "drugTimes":"3",
 *              "drugConsumption":"1片"
 *          }],
 *          "insulinType":"无",
 *          "insulinTypeRequired":"1",
 *          "insulinDosage":"12",
 *          "insulinDosageRequired":"1",
 *          "referralReason":"无",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"红糖卫生室",
 *          "referralInstitutionRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/o32u.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 07.MentalDisorder
 * @api {GET} supplementMentalDisorderInformation 01、严重精神障碍患者个人信息补充表
 * @apiVersion 1.0.0
 * @apiName supplementMentalDisorderInformation 01、严重精神障碍患者个人信息补充表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nameOfGuardian 监护人姓名
 * @apiParam (data元素对象属性) {String} nameOfGuardianRequired  监护人姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} relationship 与患者关系
 * @apiParam (data元素对象属性) {String} relationshipRequired  与患者关系是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} addressOfGuardian 监护人住址
 * @apiParam (data元素对象属性) {String} addressOfGuardianRequired  监护人住址是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} phoneOfGuardian 监护人电话
 * @apiParam (data元素对象属性) {String} phoneOfGuardianRequired  监护人电话是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} neighborhoodContact 居委会联系人
 * @apiParam (data元素对象属性) {String} neighborhoodContactRequired  居委会联系人是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} contactPhone 居委会电话
 * @apiParam (data元素对象属性) {String} contactPhoneRequired  居委会电话是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} households 户别
 * @apiParam (data元素对象属性) {String} householdsRequired  户别是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} employment 就业情况
 * @apiParam (data元素对象属性) {String} employmentRequired  就业情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} agree 同意参加管理
 * @apiParam (data元素对象属性) {String} agreeRequired  同意参加管理是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} sign 签字
 * @apiParam (data元素对象属性) {String} signRequired  签字是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} signDate 签字时间
 * @apiParam (data元素对象属性) {String} signDateRequired  签字时间是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} sign 签字
 * @apiParam (data元素对象属性) {String} signDate 签字时间
 * @apiParam (data元素对象属性) {String} firstOnset 初次发病时间
 * @apiParam (data元素对象属性) {String} firstOnsetRequired  初次发病时间是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mainSymptoms 主要症状
 * @apiParam (data元素对象属性) {String} mainSymptomsRequired  主要症状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} lockingSituation 关锁情况
 * @apiParam (data元素对象属性) {String} lockingSituationRequired 关锁情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pastOutpatient 既往治疗情况-门诊
 * @apiParam (data元素对象属性) {String} pastOutpatientRequired 既往治疗情况-门诊是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pastTreatmentDate 既往治疗情况-首次抗精神病药治疗时间
 * @apiParam (data元素对象属性) {String} pastTreatmentDateRequired 首次抗精神病药治疗时间是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} pastHospitalization 既往治疗情况-住院
 * @apiParam (data元素对象属性) {String} pastHospitalizationRequired 住院是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} treatmentRequired  既往治疗情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} currentDiagnosis 目前诊断
 * @apiParam (data元素对象属性) {String} currentDiagnosisRequired  目前诊断是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hospital 确诊医院
 * @apiParam (data元素对象属性) {String} hospitalRequired  确诊医院是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} diagnosisDate 确诊日期
 * @apiParam (data元素对象属性) {String} diagnosisDateRequired  确诊日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} latestTreatment 最近一次治疗效果
 * @apiParam (data元素对象属性) {String} latestTreatmentRequired  最近一次治疗效果是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mildTrouble 轻度滋事
 * @apiParam (data元素对象属性) {String} mildTroubleRequired  轻度滋事是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} accident 肇事
 * @apiParam (data元素对象属性) {String} accidentRequired  肇事是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} trouble 肇祸
 * @apiParam (data元素对象属性) {String} troubleRequired  肇祸是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} harmfulBehavior 其他危害行为
 * @apiParam (data元素对象属性) {String} harmfulBehaviorRequired  其他危害行为是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} selfInjury 自伤
 * @apiParam (data元素对象属性) {String} selfInjuryRequired  自伤是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} attemptedSuicide 自杀未遂
 * @apiParam (data元素对象属性) {String} attemptedSuicideRequired  自杀未遂是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nothing 无危险行为（0无，1有）
 * @apiParam (data元素对象属性) {String} economic 经济状况
 * @apiParam (data元素对象属性) {String} economicRequired  经济状况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} advice 专科医生的意见
 * @apiParam (data元素对象属性) {String} adviceRequired  专科医生的意见是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} date 填表日期
 * @apiParam (data元素对象属性) {String} dateRequired  填表日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 *  @apiSuccessExample {JSON} 执行成功示例":
 *     {
 *         "errcode": 200,
 *         "errmsg":"",
 *         "data": {
 *           "fileNumber":"213421",
 *           "name":"张三",
 *           "nameRequired":"0",
 *           "number":"00999888888",
 *           "numberRequired":"0",
 *           "nameOfGuardian":"张三",
 *           "nameOfGuardianRequired":"1",
 *           "relationship":"子女",
 *           "relationshipdRequired":"1",
 *           "addressOfGuardian":"恬静四合院",
 *           "addressOfGuardianRequired":"1",
 *           "phoneOfGuardian":"13291332890",
 *           "phoneOfGuardianRequired":"1",
 *           "neighborhoodContact":"里斯",
 *           "neighborhoodContactRequired":"1",
 *           "contactPhone":"1329188909",
 *           "contactPhoneRequired":"1",
 *           "households":"城镇",
 *           "householdsRequired":"1",
 *           "employment":"在职",
 *           "employmentRequired":"1",
 *           "agree":"同意"，
 *           "agreeRequired":"1",
 *           "sign":"张三"
 *           "signRequired":"1",
 *           "signDate":"2017-01-01",
 *           "signDateRequired":"1",
 *           "informedRequired":"1",
 *           "firstOnset":"2017-10-10",
 *           "firstOnsetRequired":"1",
 *           "mainSymptoms":"交流困难",
 *           "mainSymptomsRequired":"1",
 *           "lockingSituation":"无",
 *           "lockingSituationRequired":"1",
 *           "pastOutpatient":"连续治疗",
 *           "pastTreatmentDate":"2017-09-10",
 *           "pastHospitalization":"2",
 *           "treatmentRequired":"1",
 *           "currentDiagnosis":"中",
 *           "currentDiagnosisRequired":"1",
 *           "hospital":"中医院",
 *           "hospitalRequired":"1",
 *           "diagnosisDate":"无",
 *           "diagnosisDateRequired":"1",
 *           "latestTreatment":"无",
 *           "latestTreatmentRequired":"1",
 *           "mildTrouble":"3",
 *           "mildTroubleRequired":"1",
 *           "accident":"3",
 *           "accidentRequired":"1",
 *           "trouble":"2",
 *           "troubleRequired":"1",
 *           "harmfulBehavior":"1",
 *           "harmfulBehaviorRequired":"1",
 *           "selfInjury":"2",
 *           "selfInjuryRequired":"1",
 *           "attemptedSuicide":"2",
 *           "attemptedSuicideRequired":"1",
 *           "nothing":"0",
 *           "economic":"2018-2-10",
 *           "economicRequired":"1",
 *           "advice":"2018-2-10",
 *           "adviceRequired":"1",
 *           "date":"2018-2-10",
 *           "dateRequired":"1",
 *           "doctorSignNameImageUrl":"诸葛镇",
 *           "doctorSignNameImageUrlRequired":"http://img.gagctv.com/23o0u8.jpg"
 *          }
 *     }
 */

/**
 * @apiGroup 07.MentalDisorder
 * @api {GET} mentalDisorderFollowUp 02、严重精神障碍患者随访服务记录表
 * @apiVersion 1.0.0
 * @apiName mentalDisorderFollowUp 02、严重精神障碍患者随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 * @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} reason 失访原因
 * @apiParam (data元素对象属性) {String} reasonRequired  失访原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} deathDate 死亡日期
 * @apiParam (data元素对象属性) {String} deathDateRequired  死亡日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} deathReason 死亡原因
 * @apiParam (data元素对象属性) {String} deathReasonRequired  死亡原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} riskAssessment 危险性评估
 * @apiParam (data元素对象属性) {String} riskAssessmentRequired  危险性评估是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} currentSymptoms 目前症状
 * @apiParam (data元素对象属性) {String} currentSymptomsRequired  目前症状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} insight 自知力
 * @apiParam (data元素对象属性) {String} insightRequired  自知力是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} sleepCondition 睡眠情况
 * @apiParam (data元素对象属性) {String} sleepConditionRequired  睡眠情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} diet 饮食情况
 * @apiParam (data元素对象属性) {String} dietRequired  饮食情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} lifeCuisine 个人生活料理
 * @apiParam (data元素对象属性) {String} lifeCuisineRequired  个人生活料理是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} housework 家务劳动
 * @apiParam (data元素对象属性) {String} houseworkRequired 家务劳动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} work 生产劳动及工作
 * @apiParam (data元素对象属性) {String} workRequired  生产劳动及工作是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} study 学习能力
 * @apiParam (data元素对象属性) {String} studyRequired  学习能力是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} socialContact 社会人际交往
 * @apiParam (data元素对象属性) {String} socialContactRequired  社会人际交往是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} mildTrouble 轻度滋事
 * @apiParam (data元素对象属性) {String} mildTroubleRequired  轻度滋事是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} accident 肇事
 * @apiParam (data元素对象属性) {String} accidentRequired  肇事是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} trouble 肇祸
 * @apiParam (data元素对象属性) {String} troubleRequired  肇祸是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} harmfulBehavior 其他危害行为
 * @apiParam (data元素对象属性) {String} harmfulBehaviorRequired  其他危害行为是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} selfInjury 自伤
 * @apiParam (data元素对象属性) {String} selfInjuryRequired  自伤是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} attemptedSuicide 自杀未遂
 * @apiParam (data元素对象属性) {String} attemptedSuicideRequired  自杀未遂是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nothing 无危险行为（0无，1有）
 * @apiParam (data元素对象属性) {String} lockingSituation 关锁情况
 * @apiParam (data元素对象属性) {String} lockingSituationRequired 关锁情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hospitalization 住院情况
 * @apiParam (data元素对象属性) {String} hospitalizationRequired 住院情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dischargeTime 出院时间
 * @apiParam (data元素对象属性) {String} dischargeTimeRequired  出院时间是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} examination 实验室检查
 * @apiParam (data元素对象属性) {String} examinationceRequired  实验室检查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugCompliance 服药依从性
 * @apiParam (data元素对象属性) {String} drugComplianceRequired  服药依从性查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseDrugReaction 药物不良反应
 * @apiParam (data元素对象属性) {String} adverseDrugReactionRequired  药物不良反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} treatment 治疗效果
 * @apiParam (data元素对象属性) {String} latestTreatmentRequired  治疗效果是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Array}  drugList 用药情况
 * @apiParam (data元素对象属性) {String} drugRequired  用药情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Array}  drugGuidList 用药指导
 * @apiParam (data元素对象属性) {String} measures 康复措施
 * @apiParam (data元素对象属性) {String} measuresRequired  康复措施是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 此次随访分类
 * @apiParam (data元素对象属性) {String} classificationRequired  此次随访分类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} date 填表日期
 * @apiParam (data元素对象属性) {String} dateRequired  填表日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiParam (drugList元素对象属性) {String} drugName 药物名称
 * @apiParam (drugList元素对象属性) {String} drugTimes 每日次
 * @apiParam (drugList元素对象属性) {String} drugConsumption 每次用量
 *
 * @apiParam (drugGuidList元素对象属性) {String} drugName 药物名称
 * @apiParam (drugGuidList元素对象属性) {String} drugTimes 每日次
 * @apiParam (drugGuidList元素对象属性) {String} drugConsumption 每次用量
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "reason":"外出打工",
 *          "reasonRequired":"1",
 *          "deathDate":"2012-09-09",
 *          "deathDateRequired":"1",
 *          "deathReason":"肿瘤",
 *          "deathReasonRequired":"1",
 *          "riskAssessment":"0",
 *          "riskAssessmentRequired":"1",
 *          "currentSymptoms":"0",
 *          "currentSymptomsRequired":"1",
 *          "insight":"完全",
 *          "insightRequired":"1",
 *          "sleepCondition":"良好",
 *          "sleepConditionRequired":"1",
 *          "diet":"良好",
 *          "dietRequired":"1",
 *          "lifeCuisine":"良好",
 *          "lifeCuisineRequired":"1",
 *          "housework":"良好",
 *          "houseworkRequired":"1",
 *          "work":"良好",
 *          "workRequired":"1",
 *          "study":"良好",
 *          "studyRequired":"1",
 *          "socialContact":"良好",
 *          "socialContactRequired":"1",
 *          "mildTrouble":"3",
 *          "mildTroubleRequired":"1",
 *          "accident":"3",
 *          "accidentRequired":"1",
 *          "trouble":"2",
 *          "troubleRequired":"1",
 *          "harmfulBehavior":"1",
 *          "harmfulBehaviorRequired":"1",
 *          "selfInjury":"2",
 *          "selfInjuryRequired":"1",
 *          "attemptedSuicide":"2",
 *          "attemptedSuicideRequired":"1",
 *          "nothing":"0",
 *          "lockingSituation":"无关锁",
 *          "lockingSituationRequired":"1",
 *          "hospitalization":"无",
 *          "hospitalizationRequired":"1",
 *          "dischargeTime":"2017-12-10",
 *          "dischargeTimeRequired":"1",
 *          "examination":"无",
 *          "examinationRequired":"1",
 *          "drugCompliance":"无",
 *          "drugComplianceRequired":"1",
 *          "adverseDrugReaction":"无",
 *          "adverseDrugReactionRequired":"1",
 *          "treatment":"痊愈",
 *          "treatmentRequired":"1",
 *          "referralReason":"无",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"红糖卫生室",
 *          "referralInstitutionRequired":"1",
 *          "drugList":[{
 *             "drugName":"药物名称",
 *             "drugTimes":"3",
 *             "drugConsumption":"1片"
 *          }],
 *          "drugGuidList":[{
 *              "drugName":"药物名称",
 *              "drugTimes":"3",
 *              "drugConsumption":"1片"
 *          }],
 *          "measures":"生活劳动能力",
 *          "measuresRequired":"1",
 *          "classification":"基本稳定",
 *          "classificationRequired":"1",
 *          "date":"2018-2-10",
 *          "dateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/2308.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 08.CerebralApoplexy
 * @api {GET} cerebralApoplexyFollowUp 01、脑卒中患者随访服务记录表
 * @apiVersion 1.0.0
 * @apiName cerebralApoplexyFollowUp 01、脑卒中患者随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 * @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Object} symptom 症 状
 * @apiParam (data元素对象属性) {String} symptomRequired  症 状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} bloodPress 血压
 * @apiParam (data元素对象属性) {String} bloodPressRequired  血压是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} weight 体重
 * @apiParam (data元素对象属性) {String} weightRequired  体重是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他
 * @apiParam (data元素对象属性) {String} otherRequired  其他是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} takeDrugs 服用何种药物
 * @apiParam (data元素对象属性) {String} takeDrugsRequired  服用何种药物是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailySmoking 烟酒注意事项
 * @apiParam (data元素对象属性) {String} dailySmokingRequired  烟酒注意事项是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} motion 运动注意事项
 * @apiParam (data元素对象属性) {String} motionRequired  运动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} saltUptake 摄盐注意事项
 * @apiParam (data元素对象属性) {String} saltUptakeRequired  摄盐注意事项是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} psychological 心理调整
 * @apiParam (data元素对象属性) {String} psychologicalRequired  心理调整是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complianceBehavior 遵医行为
 * @apiParam (data元素对象属性) {String} complianceBehaviorRequired  遵医行为是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} otherExamination 其他辅助检查
 * @apiParam (data元素对象属性) {String} otherExaminationRequired  其他辅助检查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugCompliance 服药依从性
 * @apiParam (data元素对象属性) {String} drugComplianceRequired  服药依从性查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseDrugReaction 药物不良反应
 * @apiParam (data元素对象属性) {String} adverseDrugReactionRequired  药物不良反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 此次随访分类
 * @apiParam (data元素对象属性) {String} classificationRequired  此次随访分类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Array}  drugList 用药情况
 * @apiParam (data元素对象属性) {String} drugRequired  用药情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiParam (symptom对象属性) {Object} symptom 症 状
 * @apiParam (symptom对象属性) {String} other 其他
 *
 * @apiParam (drugList元素对象属性) {String} drugName 药物名称
 * @apiParam (drugList元素对象属性) {String} drugTimes 每日次
 * @apiParam (drugList元素对象属性) {String} drugConsumption 每次用量
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "symptom":{
 *              "symptom":"1,2,3",
 *              "other":"无"
 *          },
 *          "symptomRequired":"1",
 *          "bloodPress":"0",
 *          "bloodPressRequired":"1",
 *          "weight":"0",
 *          "weightRequired":"1",
 *          "other":"0",
 *          "otherRequired":"1",
 *          "dailySmoking":"无",
 *          "dailySmokingRequired":"1",
 *          "motion":"每天运动2小时",
 *          "motionRequired":"1",
 *          "saltUptake":"中",
 *          "saltUptakeRequired":"1",
 *          "psychological":"中",
 *          "psychologicalRequired":"1",
 *          "complianceBehavior":"中",
 *          "complianceBehaviorRequired":"1",
 *          "otherExamination":"无",
 *          "otherExaminationRequired":"1",
 *          "takeDrugs":"无",
 *          "takeDrugsRequired":"1",
 *          "drugCompliance":"无",
 *          "drugComplianceRequired":"1",
 *          "adverseDrugReaction":"无",
 *          "adverseDrugReactionRequired":"1",
 *          "classification":"控制满意",
 *          "classificationRequired":"1",
 *          "drugList":[{
 *              "drugName":"药物名称",
 *              "drugTimes":"3",
 *              "drugConsumption":"1片"
 *          }],
 *          "referralReason":"无",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"红糖卫生室",
 *          "referralInstitutionRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/w3ou89.jpg"
 *      }
 *  }
 */

/**
 *  @apiGroup 09.CoronaryHeartDisease
 *  @api {GET} coronaryHeartDiseaseFollowUp 01、冠心病患者随访服务记录表（文档暂时保留）
 *  @apiVersion 1.0.0
 *  @apiName coronaryHeartDiseaseFollowUp 01、冠心病患者随访服务记录表
 *
 *  @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 *  @apiParam (data元素对象属性) {String} fileNumber 档案号
 *  @apiParam (data元素对象属性) {String} name 姓名
 *  @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} number 编号
 *  @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} followUpDate 随访日期
 *  @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 *  @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {Object} symptom 症 状
 *  @apiParam (data元素对象属性) {String} symptomRequired  症 状是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} bloodPress 血压
 *  @apiParam (data元素对象属性) {String} bloodPressRequired  血压是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} weight 体重
 *  @apiParam (data元素对象属性) {String} weightRequired  体重是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} heartWeakened 第一心音是否减弱
 *  @apiParam (data元素对象属性) {String} heartWeakenedRequired  其他是否必填（0.非必填，1.必填）
 *  @apiParam (data元素对象属性) {String} atrialFibrillation 心率失常是否闻及早搏心房纤颤
 *  @apiParam (data元素对象属性) {String} atrialFibrillationRequired  心率失常是否闻及早搏心房纤颤是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} gallop 心肩部是否闻及奔马律
 * @apiParam (data元素对象属性) {String} gallopRequired  心肩部是否闻及奔马律是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailySmoking 烟酒注意事项
 * @apiParam (data元素对象属性) {String} dailySmokingRequired  烟酒注意事项是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} motionAttention 运动注意事项
 * @apiParam (data元素对象属性) {String} motionAttentionRequired  运动是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} saltUptake 摄盐注意事项
 * @apiParam (data元素对象属性) {String} saltUptakeRequired  摄盐注意事项是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} psychological 心理调整
 * @apiParam (data元素对象属性) {String} psychologicalRequired  心理调整是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complianceBehavior 遵医行为
 * @apiParam (data元素对象属性) {String} complianceBehaviorRequired  遵医行为是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} other 其他辅助检查
 * @apiParam (data元素对象属性) {String} otherRequired  其他辅助检查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} remission 服用硝酸甘油后是否缓解
 * @apiParam (data元素对象属性) {String} remissionRequired  服用硝酸甘油后是否缓解是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugCompliance 服药依从性
 * @apiParam (data元素对象属性) {String} drugComplianceRequired  服药依从性查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseDrugReaction 药物不良反应
 * @apiParam (data元素对象属性) {String} adverseDrugReactionRequired  药物不良反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} classification 此次随访分类
 * @apiParam (data元素对象属性) {String} classificationRequired  此次随访分类是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Array}  drugList 用药情况
 * @apiParam (drug元素对象属性) {String} drugName 药物名称
 * @apiParam (drug元素对象属性) {String} drugTimes 每日次
 * @apiParam (drug元素对象属性) {String} drugConsumption 每次用量
 * @apiParam (data元素对象属性) {String} drugRequired  用药情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiParam (drugList元素对象属性) {String} drugName 药物名称
 * @apiParam (drugList元素对象属性) {String} drugTimes 每日次
 * @apiParam (drugList元素对象属性) {String} drugConsumption 每次用量
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "symptom":{
 *              "symptom":"1,2,3",
 *              "other":"无"
 *          },
 *          "symptomRequired":"1",
 *          "bloodPress":"0",
 *          "bloodPressRequired":"1",
 *          "weight":"0",
 *          "weightRequired":"1",
 *          "heartWeakened":"是",
 *          "heartWeakenedRequired":"1",
 *          "atrialFibrillation":"是",
 *          "atrialFibrillationRequired":"1",
 *          "gallop":"无",
 *          "gallopRequired":"1",
 *          "dailySmoking":"无",
 *          "dailySmokingRequired":"1",
 *          "motionAttention":"每天运动2小时",
 *          "motionAttentionRequired":"1",
 *          "saltUptake":"中",
 *          "saltUptakeRequired":"1",
 *          "psychological":"中",
 *          "psychologicalRequired":"1",
 *          "complianceBehavior":"中",
 *          "complianceBehaviorRequired":"1",
 *          "other":"无",
 *          "otherRequired":"1",
 *          "remission":"无",
 *          "remissionRequired":"1",
 *          "takeDrugs":"无",
 *          "takeDrugsRequired":"1",
 *          "drugCompliance":"无",
 *          "drugComplianceRequired":"1",
 *          "adverseDrugReaction":"无",
 *          "adverseDrugReactionRequired":"1",
 *          "classification":"控制满意",
 *          "classificationRequired":"1",
 *          "drugList":[{
 *              "drugName":"药物名称",
 *              "drugTimes":"3",
 *              "drugConsumption":"1片"
 *          }],
 *          "referralReason":"无",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"红糖卫生室",
 *          "referralInstitutionRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/230ou9.jpg"
 *      }
 *  }
 */

/**
 * @apiGroup 10.Tuberculosis
 * @api {GET} tuberculosisService 01、肺结核患者随访服务记录表
 * @apiVersion 1.0.0
 * @apiName tuberculosisService 01、肺结核患者随访服务记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 * @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} month 治疗月序
 * @apiParam (data元素对象属性) {String} monthRequired  治疗月序是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} supervisor 督导人员
 * @apiParam (data元素对象属性) {String} supervisorRequired  督导人员是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Object} symptom 症 状
 * @apiParam (data元素对象属性) {String} symptomRequired  症 状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailySmoking 日吸烟量
 * @apiParam (data元素对象属性) {String} targetDailySmoking 下次目标日吸烟量
 * @apiParam (data元素对象属性) {String} dailySmokingRequired  日吸烟量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailyDrink 日饮酒量
 * @apiParam (data元素对象属性) {String} targetDailyDrink 下次目标日饮酒量
 * @apiParam (data元素对象属性) {String} dailyDrinkRequired  日饮酒量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {object} chemotherapy 化疗方案
 * @apiParam (data元素对象属性) {String} chemotherapyRequired  化疗方案是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} usage 用法
 * @apiParam (data元素对象属性) {String} usageRequired  用法是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugFormulations 药品剂型
 * @apiParam (data元素对象属性) {String} drugFormulationsRequired  药品剂型是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} missed 漏服
 * @apiParam (data元素对象属性) {String} missedRequired  漏服是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseDrugReaction 药物不良反应
 * @apiParam (data元素对象属性) {String} adverseDrugReactionRequired  药物不良反应是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} complications 并发症或合并症
 * @apiParam (data元素对象属性) {String} complicationsRequired  并发症或合并症查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralReason 转诊原因
 * @apiParam (data元素对象属性) {String} referralReasonRequired  转诊原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} referralInstitution 转诊机构
 * @apiParam (data元素对象属性) {String} referralInstitutionRequired  转诊机构是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} results 2周内随访，随访结果
 * @apiParam (data元素对象属性) {String} resultsRequired  2周内随访，随访结果是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} opinions 处理意见
 * @apiParam (data元素对象属性) {String} opinionsRequired  处理意见是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} stopTime 停止治疗时间
 * @apiParam (data元素对象属性) {String} stopTimeRequired  停止治疗时间是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} stopReasion 停止治疗原因
 * @apiParam (data元素对象属性) {String} stopReasionRequired  停止治疗原因是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} shouldTimes 应访视患者次数
 * @apiParam (data元素对象属性) {String} shouldTimesRequired  应访视患者次数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} actualTimes 实际访视次数
 * @apiParam (data元素对象属性) {String} actualTimesRequired  实际访视次数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} shouldTakeTimes 应服药次数
 * @apiParam (data元素对象属性) {String} shouldTakeTimesRequired  应服药次数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} actualTakeTimes 实际服药次数
 * @apiParam (data元素对象属性) {String} actualTakeTimesRequired  实际服药次数是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} medicationRate 服药率
 * @apiParam (data元素对象属性) {String} medicationRateRequired  服药率是否必填（0.非必填，1.必填）
 *
 * @apiParam (symptom对象属性) {Object} symptom 症 状
 * @apiParam (symptom对象属性) {String} other 其他
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *    {
 *        "errcode": 200,
 *        "errmsg":"",
 *        "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "month":"2",
 *          "monthRequired":"1",
 *          "supervisor":"2",
 *          "supervisorRequired":"1",
 *          "symptom":{
 *             "symptom":"1,2,3",
 *             "other":"无"
 *          },
 *          "symptomRequired":"1",
 *          "dailySmoking":"无",
 *          "targetDailySmoking":"无",
 *          "dailySmokingRequired":"1",
 *          "dailyDrink":"每天运动2小时",
 *          "targetDailyDrink":"无",
 *          "dailyDrinkRequired":"1",
 *          "chemotherapy":"无",
 *          "chemotherapyRequired":"1",
 *          "usage":"每日",
 *          "usageRequired":"1",
 *          "drugFormulations":"固定剂量复合制剂",
 *          "drugFormulationsRequired":"1",
 *          "missed":"1",
 *          "missedRequired":"1",
 *          "adverseDrugReaction":"无",
 *          "adverseDrugReactionRequired":"1",
 *          "complications":"无",
 *          "complicationsRequired":"1",
 *          "referralReason":"无",
 *          "referralReasonRequired":"1",
 *          "referralInstitution":"红糖卫生室",
 *          "referralInstitutionRequired":"1",
 *          "opinions":"良好",
 *          "opinionsRequired":"1",
 *          "results":"良好",
 *          "resultsRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/o32u09.jpg",
 *          "stopTime":"2018-2-10",
 *          "stopTimeRequired":"1",
 *          "stopReasion":"完成疗程",
 *          "stopReasionRequired":"1",
 *          "shouldTimes":"5",
 *          "shouldTimesRequired":"1",
 *          "actualTimes":"5",
 *          "actualTimesRequired":"1",
 *          "shouldTakeTimes":"5",
 *          "shouldTakeTimesRequired":"1",
 *          "actualTakeTimes":"5",
 *          "actualTakeTimesRequired":"1",
 *          "medicationRate":"5",
 *          "medicationRateRequired":"1",
 *      }
 *  }
 */

/**
 * @apiGroup 11.PulmonaryTuberculosis
 * @api {GET} pulmonaryTuberculosisFirstFollowUp 01、肺结核患者第一次入户随访记录表
 * @apiVersion 1.0.0
 * @apiName pulmonaryTuberculosisFirstFollowUp 01、肺结核患者第一次入户随访记录表
 *
 * @apiParam (功能请求参数) {String} followUpId 随访记录id，必填
 *
 * @apiParam (data元素对象属性) {String} fileNumber 档案号
 * @apiParam (data元素对象属性) {String} name 姓名
 * @apiParam (data元素对象属性) {String} nameRequired  姓名是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} number 编号
 * @apiParam (data元素对象属性) {String} numberRequired  编号是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpDate 随访日期
 * @apiParam (data元素对象属性) {String} followUpDateRequired  随访日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} followUpMethod 随访方式
 * @apiParam (data元素对象属性) {String} followUpMethodRequired  随访方式是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} patientType 患者类型
 * @apiParam (data元素对象属性) {String} patientTypeRequired  患者类型是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} phlegm 痰菌情况
 * @apiParam (data元素对象属性) {String} phlegmRequired  痰菌情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} resistant 耐药情况
 * @apiParam (data元素对象属性) {String} resistantRequired  耐药情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} supervisor 督导人员
 * @apiParam (data元素对象属性) {String} supervisorRequired  督导人员是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {Object} symptom 症 状
 * @apiParam (data元素对象属性) {String} symptomRequired  症 状是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailySmoking 日吸烟量
 * @apiParam (data元素对象属性) {String} targetDailySmoking 下次目标日吸烟量
 * @apiParam (data元素对象属性) {String} dailySmokingRequired  日吸烟量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} dailyDrink 日饮酒量
 * @apiParam (data元素对象属性) {String} targetDailyDrink 下次目标日饮酒量
 * @apiParam (data元素对象属性) {String} dailyDrinkRequired  日饮酒量是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} chemotherapy 化疗方案
 * @apiParam (data元素对象属性) {String} chemotherapyRequired  化疗方案是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} usage 用法
 * @apiParam (data元素对象属性) {String} usageRequired  用法是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} drugFormulations 药品剂型
 * @apiParam (data元素对象属性) {String} drugFormulationsRequired  药品剂型是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} hasHouse 单独的居室
 * @apiParam (data元素对象属性) {String} hasHouseRequired  单独的居室是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} ventilation 通风情况
 * @apiParam (data元素对象属性) {String} ventilationRequired  通风情况是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} takingPlace 取药地点
 * @apiParam (data元素对象属性) {String} takingPlaceRequired  取药地点是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} takingTime 取药时间
 * @apiParam (data元素对象属性) {String} takingTimeRequired  取药时间是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} fillCard 服药记录卡的填写
 * @apiParam (data元素对象属性) {String} fillCardRequired  服药记录卡的填写是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} storage 服药方法及药品存放
 * @apiParam (data元素对象属性) {String} storageRequired  服药方法及药品存放是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} courses 肺结核治疗疗程
 * @apiParam (data元素对象属性) {String} coursesRequired  肺结核治疗疗程	是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} harm 不规律服药危害
 * @apiParam (data元素对象属性) {String} harmRequired  不规律服药危害	是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} adverseReaction 服药后不良反应及处理
 * @apiParam (data元素对象属性) {String} adverseReactionRequired  服药后不良反应及处理是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} sputum 治疗期间复诊查痰
 * @apiParam (data元素对象属性) {String} sputumRequired  治疗期间复诊查痰是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} takeMedicine 外出期间如何坚持服药
 * @apiParam (data元素对象属性) {String} takeMedicineRequired  外出期间如何坚持服药是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} attention 生活习惯及注意事项
 * @apiParam (data元素对象属性) {String} attentionRequired  生活习惯及注意事项是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} closeExamination 密切接触者检查
 * @apiParam (data元素对象属性) {String} closeExaminationRequired  密切接触者检查是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} nextVisitDate 下次访视日期
 * @apiParam (data元素对象属性) {String} nextVisitDateRequired  下次访视日期是否必填（0.非必填，1.必填）
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrl 随访医生签名图片地址
 * @apiParam (data元素对象属性) {String} doctorSignNameImageUrlRequired  随访医生签名是否必填（0.非必填，1.必填）
 *
 * @apiParam (symptom对象属性) {Object} symptom 症 状
 * @apiParam (symptom对象属性) {String} other 其他
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {
 *          "fileNumber":"213421",
 *          "name":"张三",
 *          "nameRequired":"0",
 *          "number":"00999888888",
 *          "numberRequired":"0",
 *          "followUpDate":"2018-09-09",
 *          "followUpDateRequired":"1",
 *          "followUpMethod":"家庭",
 *          "followUpMethodRequired":"1",
 *          "patientType":"初治",
 *          "patientTypeRequired":"1",
 *          "phlegm":"阳性",
 *          "phlegmRequired":"1",
 *          "resistant":"耐药",
 *          "resistantRequired":"1",
 *          "supervisor":"医生",
 *          "supervisorRequired":"1",
 *          "symptom":{
 *              "symptom":"1,2,3",
 *              "other":"无"
 *          },
 *          "symptomRequired":"1",
 *          "dailySmoking":"无",
 *          "targetDailySmoking":"无",
 *          "dailySmokingRequired":"1",
 *          "dailyDrink":"每天运动2小时",
 *          "targetDailyDrink":"无",
 *          "dailyDrinkRequired":"1",
 *          "chemotherapy":"无",
 *          "chemotherapyRequired":"1",
 *          "usage":"每日",
 *          "usageRequired":"1",
 *          "drugFormulations":"固定剂量复合制剂",
 *          "drugFormulationsRequired":"1",
 *          "hasHouse":"良好",
 *          "hasHouseRequired":"1",
 *          "Ventilation":"无",
 *          "VentilationRequired":"1",
 *          "takingPlace":"无",
 *          "takingPlaceRequired":"1",
 *          "takingTime":"2018-01-01",
 *          "takingTimeRequired":"1",
 *          "fillCard":"掌握",
 *          "fillCardRequired":"1",
 *          "storage":"掌握",
 *          "storageRequired":"1",
 *          "courses":"掌握",
 *          "coursesRequired":"1",
 *          "harm":"掌握",
 *          "harmRequired":"1",
 *          "adverseReaction":"掌握",
 *          "adverseReactionRequired":"1",
 *          "sputum":"掌握",
 *          "sputumRequired":"1",
 *          "takeMedicine":"掌握",
 *          "takeMedicineRequired":"1",
 *          "attention":"掌握",
 *          "attentionRequired":"1",
 *          "closeExamination":"掌握",
 *          "closeExaminationRequired":"1",
 *          "nextVisitDate":"2018-2-10",
 *          "nextVisitDateRequired":"1",
 *          "doctorSignNameImageUrl":"诸葛镇",
 *          "doctorSignNameImageUrlRequired":"http://img.gagctv.com/23o908u4.jpg"
 *      }
 *  }
 */

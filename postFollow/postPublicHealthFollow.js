/**
 * 基本公卫-提交随访接口API文档
 * @author 李宏鹏
 */
/**
 * @apiGroup 01.Child
 * @api {POST} newChildFamily 01、新生儿家庭随访
 * @apiVersion 1.0.0
 * @apiName newChildFamily 01、新生儿家庭随访
 *
 * @apiParam (功能请求参数) {String} fileNumber 档案编号
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {int} 	 sex	性别(1男 2女 9未说明的性别 0未知的性别)
 * @apiParam (功能请求参数) {String} birthday	出生日期
 * @apiParam (功能请求参数) {String} identityCard	身份证号
 * @apiParam (功能请求参数) {String} address	家庭住址
 * @apiParam (功能请求参数) {String} fatherName		父亲姓名
 * @apiParam (功能请求参数) {String} motherName		母亲姓名
 * @apiParam (功能请求参数) {String} fatherWork		父亲职业
 * @apiParam (功能请求参数) {String} motherWork		母亲职业
 * @apiParam (功能请求参数) {String} fatherPhone	父亲联系电话
 * @apiParam (功能请求参数) {String} motherPhone	母亲联系电话
 * @apiParam (功能请求参数) {String} fatherBirthday		父亲出生日期
 * @apiParam (功能请求参数) {String} motherBirthday		母亲出生日期
 * @apiParam (功能请求参数) {int} 	 gestationalWeeks	出生孕周(单位:周)
 * @apiParam (功能请求参数) {String} illnessDuringPregnancy		母亲妊娠期患病情况(1无 2糖尿病 3妊娠期高血压 4其他)
 * @apiParam (功能请求参数) {String} illnessDuringPregnancyOther	母亲妊娠期患病情况(其他)
 * @apiParam (功能请求参数) {String} midwiferyName		助产机构名称
 * @apiParam (功能请求参数) {String} birthSituation		出生情况(1顺产 2胎头吸引 3产钳 4剖宫 5双多胎 6臀位 7其他)
 * @apiParam (功能请求参数) {String} birthSituationOther	出生情况(其他)
 * @apiParam (功能请求参数) {int} 	 neonatalAsphyxia	新生儿窒息(1无 2有)
 * @apiParam (功能请求参数) {int} 	 apgarScore		Apgar评分(11min 25min 3不详)
 * @apiParam (功能请求参数) {int} 	 deformity		畸形(1无 2有)
 * @apiParam (功能请求参数) {int} 	 hearingScreening		新生儿听力筛查(1通过  2未通过  3未筛查 4不详)
 * @apiParam (功能请求参数) {String} diseaseScreening		新生儿疾病筛查(1未进行 2检查均阴性 3甲低 4苯丙酮尿症 5其他遗传代谢病)
 * @apiParam (功能请求参数) {String} birthWeight	新生儿出生体重(kg)
 * @apiParam (功能请求参数) {String} currWeight		目前体重(kg)
 * @apiParam (功能请求参数) {String} birthHeight	出生身长(cm)
 * @apiParam (功能请求参数) {int} 	 feedingMethod		喂养方式(1纯母乳 2混合 3人工)
 * @apiParam (功能请求参数) {int} 	 eatMilkQuantity	吃奶量(mL/次)
 * @apiParam (功能请求参数) {int} 	 eatMilkTime	吃奶次数(次/日
 * @apiParam (功能请求参数) {int} 	 vomit	呕吐(1无 2有)
 * @apiParam (功能请求参数) {int} 	 stool	大便(1糊状2稀3其他)
 * @apiParam (功能请求参数) {String} stoolOther		大便(其他)
 * @apiParam (功能请求参数) {int} 	 stoolFrequency	大便次数(次/日)
 * @apiParam (功能请求参数) {String} bodyTemperature	体温(℃)
 * @apiParam (功能请求参数) {int} 	 heartRate	心率(次/分钟)
 * @apiParam (功能请求参数) {int} 	 respiratoryRate	呼吸频率(次/分钟)
 * @apiParam (功能请求参数) {int} 	 complexion		面色(1红润 2黄染 3其他)
 * @apiParam (功能请求参数) {String} complexionOther	面色(其他)
 * @apiParam (功能请求参数) {String} jaundiceSite	黄疸部位(1无 2面部 3躯干 4四肢 5手足)
 * @apiParam (功能请求参数) {String} anteriorFontanelleBeforeSize	前囟(_cm)
 * @apiParam (功能请求参数) {String} anteriorFontanelleAfterSize	前囟(_cm)
 * @apiParam (功能请求参数) {int} 	 anteriorFontanelle		前囟(1正常 2膨隆 3凹陷 4其他)
 * @apiParam (功能请求参数) {String} anteriorFontanelleOther	前囟(其他)
 * @apiParam (功能请求参数) {int} 	 eyes	眼睛(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} eyesOdd	眼睛(异常)
 * @apiParam (功能请求参数) {int} 	 fourLimbsActivity		四肢活动度(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} fourLimbsActivityOdd		四肢活动度(异常)
 * @apiParam (功能请求参数) {int} 	 earAppearance		耳外观(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} earAppearanceOdd	耳外观(异常)
 * @apiParam (功能请求参数) {int} 	 neckMass	颈部包块(1无 2有)
 * @apiParam (功能请求参数) {int} 	 nose	鼻(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} noseOdd	鼻(异常)
 * @apiParam (功能请求参数) {int} 	 skin	皮肤(1未见异常 2湿疹 3糜烂 4其他)
 * @apiParam (功能请求参数) {String} skinOther	皮肤(其他)
 * @apiParam (功能请求参数) {int} 	 oral	口腔(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} oralOdd	口腔(异常)
 * @apiParam (功能请求参数) {int} 	 anus	肛门(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} anusOdd	肛门(异常)
 * @apiParam (功能请求参数) {int} 	 cardiopulmonaryAuscultation	心肺听诊(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} cardiopulmonaryAuscultationOdd	心肺听诊(异常)
 * @apiParam (功能请求参数) {int} 	 chest	胸部(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} chestOdd	胸部(异常)
 * @apiParam (功能请求参数) {int} 	 abdominalPalpation	腹部触诊(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} abdominalPalpationOdd	腹部触诊(异常)
 * @apiParam (功能请求参数) {int} 	 spine	脊柱(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} spineOdd	脊柱(异常)
 * @apiParam (功能请求参数) {int} 	 genitalia	外生殖器(1未见异常  2异常)
 * @apiParam (功能请求参数) {String} genitaliaOdd	外生殖器(异常)
 * @apiParam (功能请求参数) {int} 	 umbilicalCord	脐带(1未脱 2脱落 3脐部有渗出 4其他)
 * @apiParam (功能请求参数) {String} umbilicalCordOther	脐带(其他)
 * @apiParam (功能请求参数) {int} 	 referralAdvice	转诊建议(1无2有)
 * @apiParam (功能请求参数) {String} referralReason	转诊原因
 * @apiParam (功能请求参数) {String} agenciesDepartments	机构及科室
 * @apiParam (功能请求参数) {String} advising	指导(1喂养指导 2发育指导 3防病指导 4预防伤害指导 5口腔保健指导 6.其他)
 * @apiParam (功能请求参数) {String} advisingOther	指导(其他)
 * @apiParam (功能请求参数) {String} thisVisitDate	本次随访日期
 * @apiParam (功能请求参数) {String} thisVisitAddr	本次随访地点
 * @apiParam (功能请求参数) {String} nextVisitDate	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignature	随访医生签名
 * @apiParam (功能请求参数) {String} lng	经度
 * @apiParam (功能请求参数) {String} lat	纬度
 * @apiParam (功能请求参数) {String} pictureOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 01.Child
 * @api {POST} newChild1To8 02、1～8月龄儿童健康检查记录
 * @apiVersion 1.0.0
 * @apiName newChild1To8 02、1～8月龄儿童健康检查记录
 *
 * @apiParam (功能请求参数) {String} visitDateOne	随访日期
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} weightSizeOne	体重(kg)
 * @apiParam (功能请求参数) {int} 	 weightOne		体重指标(1上 2中 3下)
 * @apiParam (功能请求参数) {String} heightSizeOne	身长(cm)
 * @apiParam (功能请求参数) {int} 	 heightOne		身长指标(1上 2中 3下)
 * @apiParam (功能请求参数) {int} 	 headWidthOne 	头围(cm)
 * @apiParam (功能请求参数) {int} 	 complexionOne	面色(1红润2黄染3其他)
 * @apiParam (功能请求参数) {String} complexionOtherOne	面色（其他）
 * @apiParam (功能请求参数) {int} 	 skinOne		皮肤(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} skinOddOne		皮肤(异常)
 * @apiParam (功能请求参数) {int} 	 anteriorFontanelleOne	前囱(1闭合 2未闭)
 * @apiParam (功能请求参数) {String} anteriorFontanelleSizeBeforeOne	前囟尺寸(前cm)
 * @apiParam (功能请求参数) {String} anteriorFontanelleSizeAfterOne		前囟尺寸(后cm)
 * @apiParam (功能请求参数) {int} 	 neckMassOne		颈部包块(1有 2无)
 * @apiParam (功能请求参数) {int} 	 eyeOne			眼睛（1未见异常2异常）
 * @apiParam (功能请求参数) {String} eyeOddOne		眼睛（异常）
 * @apiParam (功能请求参数) {int} 	 earOne			耳(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} earOddOne		耳(异常)
 * @apiParam (功能请求参数) {int} 	 hearingOne		听力(1通过  2未通过)
 * @apiParam (功能请求参数) {int} 	 osOne			1~2:口腔(1未见异常 2异常)  3~4:出牙数
 * @apiParam (功能请求参数) {String} osOddOne		口腔(异常)
 * @apiParam (功能请求参数) {int} 	 chestOne		胸部(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} chestOddOne		胸部(异常)
 * @apiParam (功能请求参数) {int} 	 abdomenOne		腹部(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} abdomenOddOne	腹部(异常)
 * @apiParam (功能请求参数) {int} 	 umbilicusOne	脐部 1:(1未脱 2脱落 3脐部有渗出 4其他) 2:(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} umbilicusOddOne	脐部(其他/异常)
 * @apiParam (功能请求参数) {int} 	 fourLimbsOne	四肢(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} fourLimbsOddOne	四肢(异常)
 * @apiParam (功能请求参数) {String} ricketsSymptomsOne		可疑佝偻病症状(1无2夜惊3多汗4烦躁)
 * @apiParam (功能请求参数) {String} suspectedRicketsSignsOne		可疑佝偻病体征 2:(1无 2颅骨软化) 3~4:(1无 2肋串珠 3肋软骨沟 4鸡胸 5手足镯 6颅骨软化 7方颅)
 * @apiParam (功能请求参数) {int} 	 sexualOrgansOne		肛门/外生殖器(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} sexualOrgansOddOne	肛门/外生殖器(异常)
 * @apiParam (功能请求参数) {int} 	 hemoglobinValueOne	血红蛋白值(g/L)
 * @apiParam (功能请求参数) {String} outdoorActivitiesOne	户外活动(小时/日)
 * @apiParam (功能请求参数) {int} 	 takeVitaminDone		服用维生素D(IU/日)
 * @apiParam (功能请求参数) {String} developmentalAssessmentOne	发育评估2:(1对很大声音没有反应2逗引时不发音或不会微笑3不注视人脸，不追视移动人或物品4俯卧时不会抬头)3:(1发音少，不会笑出声2不会伸手抓物3紧握拳松不开4.不能扶坐)4:(1听到声音无应答2不会区分生人和熟人3双手间不会传递玩具4不会独坐)
 * @apiParam (功能请求参数) {String} illnessOne	两次随访间患病情况(1无 2肺炎 3腹泻 4外伤 5其他)
 * @apiParam (功能请求参数) {String} illnessOtherOne	两次随访间患病情况(其他)
 * @apiParam (功能请求参数) {int} 	 illnessPneumoniaOne	[肺炎次数]
 * @apiParam (功能请求参数) {int} 	 illnessDiarrheaOne	[腹泻次数]
 * @apiParam (功能请求参数) {int} 	 illnessTraumaOne	[外伤次数]
 * @apiParam (功能请求参数) {String} otherOne	[其他]
 * @apiParam (功能请求参数) {int} 	 referralAdviceOne	转诊建议(1无2有)
 * @apiParam (功能请求参数) {String} referralReasonOne	转诊原因
 * @apiParam (功能请求参数) {String} agenciesDepartmentsOne	机构及科室
 * @apiParam (功能请求参数) {String} advisingOne	指导(1科学喂养2生长发育3疾病预防4预防伤害5口腔保健6其他)
 * @apiParam (功能请求参数) {String} advisingOtherOne	指导(其他)
 * @apiParam (功能请求参数) {String} nextVisitDateOne	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignatureOne	随访医生签名
 * @apiParam (功能请求参数) {String} lngOne	经度
 * @apiParam (功能请求参数) {String} latOne	纬度
 * @apiParam (功能请求参数) {String} pictureOneOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwoOne	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 01.Child
 * @api {POST} newChild12To30 03、12～30月龄儿童随访
 * @apiVersion 1.0.0
 * @apiName newChild12To30 03、12～30月龄儿童随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDateTwelve	随访日期
 * @apiParam (功能请求参数) {String} weightSizeTwelve	体重/kg
 * @apiParam (功能请求参数) {int} 	 weightTwelve	体重指标(1上 2中 3下)
 * @apiParam (功能请求参数) {int} 	 heightSizeTwelve	身长(/cm)
 * @apiParam (功能请求参数) {int} 	 heightTwelve	身长指标(1上 2中 3下)
 * @apiParam (功能请求参数) {int} 	 complexionTwelve	面色(1红润2其他)
 * @apiParam (功能请求参数) {String} complexionOtherTwelve	面色（其他）
 * @apiParam (功能请求参数) {int} 	 skinTwelve	皮肤(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} skinOddTwelve	皮肤(异常)
 * @apiParam (功能请求参数) {int} 	 anteriorFontanelleTwelve	前囱(1闭合 2未闭)
 * @apiParam (功能请求参数) {String} anteriorFontanelleSizeBeforeTwelve	前囟尺寸<前>(cm)
 * @apiParam (功能请求参数) {String} anteriorFontanelleSizeAfterTwelve	前囟尺寸<后>(cm)
 * @apiParam (功能请求参数) {int} 	 eyeTwelve	眼睛（1未见异常2异常）
 * @apiParam (功能请求参数) {String} eyeOddTwelve	眼睛(异常)
 * @apiParam (功能请求参数) {int} 	 earTwelve	耳外观(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} earOddTwelve	耳外观(异常)
 * @apiParam (功能请求参数) {int} 	 hearingTwelve	听力(1通过  2未通过)
 * @apiParam (功能请求参数) {int} 	 toothTwelve	出牙(颗)
 * @apiParam (功能请求参数) {int} 	 dentalCariesTwelve	龋齿数(颗)
 * @apiParam (功能请求参数) {int} 	 chestTwelve	胸部(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} chestOddTwelve	胸部(异常)
 * @apiParam (功能请求参数) {int} 	 abdomenTwelve	腹部(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} abdomenOddTwelve	腹部(异常)
 * @apiParam (功能请求参数) {int} 	 fourLimbsTwelve	四肢(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} fourLimbsOddTwelve	四肢(异常)
 * @apiParam (功能请求参数) {int} 	 gaitTwelve	步态(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} gaitOddTwelve	步态(异常)
 * @apiParam (功能请求参数) {String} suspectedRicketsSignsTwelve	可疑佝偻病体征(1无2肋串珠3肋软骨沟4鸡胸5手足镯6O型腿7X型腿)
 * @apiParam (功能请求参数) {int} 	 hemoglobinValueTwelve	血红蛋白值(g/L)
 * @apiParam (功能请求参数) {String} outdoorActivitiesTwelve	户外活动(小时/日)
 * @apiParam (功能请求参数) {int} 	 takeVitaminDtwelve	服用维生素D(IU/日)
 * @apiParam (功能请求参数) {String} developmentalAssessmentTwelve	发育评估 12月:(1.呼唤名字无反应2.不会模仿“再见”或“欢迎”动作3.不会用拇食指对捏小物品4.不会扶物站立)18月：(1.不会有意识叫“爸爸”或“妈妈”2.不会按要求指人或物3.与人无目光交流4.不会独走)24月:(1.不会说3个物品的名称2.不会按吩咐做简单事情3.不会用勺吃饭4.不会扶栏上楼梯/台阶)30月:(1.不会说2-3个字的短语2.兴趣单一、刻板3.不会示意大小便4.不会跑)
 * @apiParam (功能请求参数) {String} illnessTwelve	两次随访间患病情况(1无 2肺炎 3腹泻 4外伤 5其他)
 * @apiParam (功能请求参数) {String} illnessOddTwelve	两次随访间患病情况(其他)
 * @apiParam (功能请求参数) {int} 	 illnessPneumoniaTwelve	[肺炎次数]
 * @apiParam (功能请求参数) {int} 	 illnessDiarrheaTwelve	[腹泻次数]
 * @apiParam (功能请求参数) {int} 	 illnessTraumaTwelve	[外伤次数]
 * @apiParam (功能请求参数) {String} illnessOtherTwelve	[其他]
 * @apiParam (功能请求参数) {int} 	 referralAdviceTwelve	转诊建议(1无2有)
 * @apiParam (功能请求参数) {String} referralReasonTwelve	转诊原因
 * @apiParam (功能请求参数) {String} agenciesDepartmentsTwelve	机构及科室
 * @apiParam (功能请求参数) {String} advisingTwelve	指导(1科学喂养2生长发育3疾病预防4预防伤害5口腔保健6其他)
 * @apiParam (功能请求参数) {String} advisingOtherTwelve	指导(其他)
 * @apiParam (功能请求参数) {String} nextVisitDateTwelve	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignatureTwelve	随访医生签名
 * @apiParam (功能请求参数) {String} lngTwelve	经度
 * @apiParam (功能请求参数) {String} latTwelve	纬度
 * @apiParam (功能请求参数) {String} pictureOneTwelve	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwoTwelve	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 01.Child
 * @api {POST} newChild3To6 04、3~6岁龄新生儿随访
 * @apiVersion 1.0.0
 * @apiName newChild3To6 04、3~6岁龄新生儿随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDateThree	随访日期
 * @apiParam (功能请求参数) {String} weightSizeThree	体重(kg)
 * @apiParam (功能请求参数) {int} 	 weightThree	体重指标(1上 2中 3下)
 * @apiParam (功能请求参数) {int} 	 heightSizeThree	身长(cm)
 * @apiParam (功能请求参数) {int} 	 heightThree	身长指标(1上 2中 3下)
 * @apiParam (功能请求参数) {String} weightAndHeightSizeThree	体重/身高
 * @apiParam (功能请求参数) {int} 	 weightAndHeightThree	体重/身高指标(1上 2中 3下)
 * @apiParam (功能请求参数) {int} 	 physicalGrowthThree	体格发育评价(1正常 2低体重 3消瘦 4生长迟缓 5超重)
 * @apiParam (功能请求参数) {String} sightLeftThree	视力(左)
 * @apiParam (功能请求参数) {String} sightRightThree	视力(右)
 * @apiParam (功能请求参数) {int} 	 hearingThree	听力(1通过  2未通过)
 * @apiParam (功能请求参数) {int} 	 toothThree	出牙(颗)
 * @apiParam (功能请求参数) {int} 	 dentalCariesThree	龋齿数(颗)
 * @apiParam (功能请求参数) {int} 	 chestThree	胸部(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} chestOddThree	胸部(异常)
 * @apiParam (功能请求参数) {int} 	 abdomenThree	腹部(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} abdomenOddThree	腹部(异常)
 * @apiParam (功能请求参数) {int} 	 hemoglobinValueThree	血红蛋白值(g/L)
 * @apiParam (功能请求参数) {String} otherThree	  其他
 * @apiParam (功能请求参数) {String} growthAssessmentThree  发育评估 3岁:(1.不会说自己的名字2.不会玩“拿棍当马骑”等假想游戏3.不会模仿画圆4.不会双脚跳)4岁:(1.不会说带形容词的句子2.不能按要求等待或轮流3.不会独立穿衣4.不会单脚站立)5岁:(1.不能简单叙说事情经过2.不知道自己的性别3.不会用筷子吃饭4.不会单脚跳)6岁:(1.不会表达自己的感受或想法2.不会玩角色扮演的集体游戏3.不会画方形4.不会奔跑)
 * @apiParam (功能请求参数) {String} illnessThree	两次随访间患病情况(1无 2肺炎 3腹泻 4外伤 5其他)
 * @apiParam (功能请求参数) {String} illnessOddThree	两次随访间患病情况(其他)
 * @apiParam (功能请求参数) {int} 	 illnessPneumoniaThree	[肺炎次数]
 * @apiParam (功能请求参数) {int} 	 illnessDiarrheaThree	[腹泻次数]
 * @apiParam (功能请求参数) {int} 	 illnessTraumaThree	[外伤次数]
 * @apiParam (功能请求参数) {String} illnessOtherThree	[其他]
 * @apiParam (功能请求参数) {int} 	 referralAdviceThree	转诊建议(1无2有)
 * @apiParam (功能请求参数) {String} referralReasonThree	转诊原因
 * @apiParam (功能请求参数) {String} agenciesDepartmentsThree	机构及科室
 * @apiParam (功能请求参数) {String} advisingThree	指导(1合理膳食2生长发育3疾病预防4预防伤害5口腔保健6其他)
 * @apiParam (功能请求参数) {String} advisingOtherThree	指导(其他)
 * @apiParam (功能请求参数) {String} nextVisitDateThree	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignatureThree	随访医生签名
 * @apiParam (功能请求参数) {String} lngThree	经度
 * @apiParam (功能请求参数) {String} latThree	纬度
 * @apiParam (功能请求参数) {String} pictureOneThree	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwoThree	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 01.Child
 * @api {POST} health6To18 05、6～18月中医药健康管理服务随访
 * @apiVersion 1.0.0
 * @apiName health6To18 05、6～18月中医药健康管理服务随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDateSix	随访日期
 * @apiParam (功能请求参数) {String} healthServeSix	中医药健康管理服务(6月龄) 1中医饮食调养指导，2中医起居调摄指导，3传授摩腹、捏脊方法，4其他
 * @apiParam (功能请求参数) {String} healthServeSixOther	中医药健康管理服务(6月龄) 其他
 * @apiParam (功能请求参数) {String} nextVisitDateSix	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignatureSix	随访医生签名
 * @apiParam (功能请求参数) {String} lngSix	经度
 * @apiParam (功能请求参数) {String} latSix	纬度
 * @apiParam (功能请求参数) {String} pictureOneSix	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwoSix	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 01.Child
 * @api {POST} health24To36 06、24～36月中医药健康管理服务随访
 * @apiVersion 1.0.0
 * @apiName health24To36 06、24～36月中医药健康管理服务随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDateTwentyFour	随访日期
 * @apiParam (功能请求参数) {String} healthServeTwentyFour	中医药健康管理服务(24月龄) 1中医饮食调养指导，2中医起居调摄指导，3传授摩腹、捏脊方法，4其他
 * @apiParam (功能请求参数) {String} healthServeTwentyFourOther	中医药健康管理服务(24月龄) 其他
 * @apiParam (功能请求参数) {String} nextVisitDateTwentyFour	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignatureTwentyFour	随访医生签名
 * @apiParam (功能请求参数) {String} lngTwentyFour	经度
 * @apiParam (功能请求参数) {String} latTwentyFour	纬度
 * @apiParam (功能请求参数) {String} pictureOneTwentyFour	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwoTwentyFour	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 02.Antenatal
 * @api {POST} antenatalInfo 01、孕妇信息表
 * @apiVersion 1.0.0
 * @apiName antenatalInfo 01、孕妇信息表
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} card	卡号
 * @apiParam (功能请求参数) {String} identityCard	身份证件-号码
 * @apiParam (功能请求参数) {int} 	 age	年龄
 * @apiParam (功能请求参数) {int} 	 edBgCd	文化程度	1:研究生,2:大学本科,3:大学专科和专科学校,4:中等专业学校,5:技工学校,6:高中,7:初中,8:小学,9:文盲或半文盲,10:不详
 * @apiParam (功能请求参数) {String} edBgName	文化程度名称
 * @apiParam (功能请求参数) {String} occuTypeCd	职业	0:国家机关、党群组织、企业、事业单位负责人,1:专业技术人员,2:办事人员和有关人员,3:商业、服务业人员,4:农、林、牧、渔水利业生产人员,5:生产、运输设备操作人员及有关人员,6:军人,7:不便分类的其他从业人员,8:无职业
 * @apiParam (功能请求参数) {String} occuTypeName	职业名称
 * @apiParam (功能请求参数) {String} phone	本人电话
 * @apiParam (功能请求参数) {String} nationCd	民族	01汉族,02蒙古族,03回族,04藏族,05维吾尔族,06苗族,07彝族,08壮族,09布依族,10朝鲜族,11满族,12侗族,13瑶族,14白族,15土家族,16哈尼族,17哈萨克族,18傣族,19黎族,20傈僳族,21佤族,22畲族,23高山族,24拉祜族,25水族,26东乡族,27纳西族,28景颇族,29柯尔克孜族,30土族,31达斡尔族,32仫佬族,33羌族,34布朗族,35撒拉族,36毛南族,37仡佬族,38锡伯族,39阿昌族,40普米族,41塔吉克族,42怒族,43乌孜别克族,44俄罗斯族,45鄂温克族,46崩龙族,47保安族,48裕固族,49京族,50塔塔尔族,51独龙族,52鄂伦春族,53赫哲族,54门巴族,55珞巴族,56基诺族,97其他,98外国血统中国籍人士
 * @apiParam (功能请求参数) {String} nationName	民族名称
 * @apiParam (功能请求参数) {String} regAddress	户籍地址
 * @apiParam (功能请求参数) {String} address	现住址
 * @apiParam (功能请求参数) {String} postpartumAddress	产后休养地
 * @apiParam (功能请求参数) {String} wokingUnitName	工作单位名称
 * @apiParam (功能请求参数) {String} husbandName	丈夫姓名
 * @apiParam (功能请求参数) {int} 	 husbandAge	丈夫年龄
 * @apiParam (功能请求参数) {String} husbandPhone	丈夫电话
 * @apiParam (功能请求参数) {int} 	 husbandEdBgCd	丈夫文化程度	1:研究生,2:大学本科,3:大学专科和专科学校,4:中等专业学校,5:技工学校,6:高中,7:初中,8:小学,9:文盲或半文盲,10:不详
 * @apiParam (功能请求参数) {String} husbandEdBgName	丈夫文化程度名称
 * @apiParam (功能请求参数) {String} husbandOccuTypeCd	丈夫职业	0:国家机关、党群组织、企业、事业单位负责人,1:专业技术人员,2:办事人员和有关人员,3:商业、服务业人员,4:农、林、牧、渔水利业生产人员,5:生产、运输设备操作人员及有关人员,6:军人,7:不便分类的其他从业人员,8:无职业
 * @apiParam (功能请求参数) {String} husbandOccuTypeName	丈夫职业名称
 * @apiParam (功能请求参数) {String} husbandNationName	丈夫民族名称
 * @apiParam (功能请求参数) {String} husbandNationCd	丈夫民族	01汉族,02蒙古族,03回族,04藏族,05维吾尔族,06苗族,07彝族,08壮族,09布依族,10朝鲜族,11满族,12侗族,13瑶族,14白族,15土家族,16哈尼族,17哈萨克族,18傣族,19黎族,20傈僳族,21佤族,22畲族,23高山族,24拉祜族,25水族,26东乡族,27纳西族,28景颇族,29柯尔克孜族,30土族,31达斡尔族,32仫佬族,33羌族,34布朗族,35撒拉族,36毛南族,37仡佬族,38锡伯族,39阿昌族,40普米族,41塔吉克族,42怒族,43乌孜别克族,44俄罗斯族,45鄂温克族,46崩龙族,47保安族,48裕固族,49京族,50塔塔尔族,51独龙族,52鄂伦春族,53赫哲族,54门巴族,55珞巴族,56基诺族,97其他,98外国血统中国籍人士
 * @apiParam (功能请求参数) {String} husbandWokingUnitName	丈夫工作单位名称
 * @apiParam (功能请求参数) {String} lng	经度
 * @apiParam (功能请求参数) {String} lat	纬度
 * @apiParam (功能请求参数) {String} pictureOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 02.Antenatal
 * @api {POST} antenatalFirst 02、第一次产前随访
 * @apiVersion 1.0.0
 * @apiName antenatalFirst 02、第一次产前随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} completeDate	填表日期
 * @apiParam (功能请求参数) {int} 	 gestationalWeek	出生孕周(周)
 * @apiParam (功能请求参数) {int} 	 pregnantWomenAge	孕妇年龄
 * @apiParam (功能请求参数) {String} husbandName	丈夫姓名
 * @apiParam (功能请求参数) {int} 	 husbandAge	丈夫年龄
 * @apiParam (功能请求参数) {String} husbandPhone	丈夫电话
 * @apiParam (功能请求参数) {int} 	 numberOfPregnanciesVaginalDelivery	孕次(总计)
 * @apiParam (功能请求参数) {int} 	 numberOfPregnanciesParturition	孕次(阴道分娩<次>)
 * @apiParam (功能请求参数) {int} 	 numberOfPregnanciesCesareanSection	孕次(剖宫产<次>)
 * @apiParam (功能请求参数) {String} lastMenstruation	末次月经时间(_年_月_日或不详)
 * @apiParam (功能请求参数) {String} dueDate	预产期(_年_月_日)
 * @apiParam (功能请求参数) {String} pastMedicalHistory	既往史(1无2心脏病3肾脏疾病 4肝脏疾病5高血压6贫血7糖尿病8其他)
 * @apiParam (功能请求参数) {String} pastMedicalHistoryOther	既往史(其他)
 * @apiParam (功能请求参数) {String} familyMedicalHistory	家族史(1无 2遗传性疾病史　3精神疾病史 4其他)
 * @apiParam (功能请求参数) {String} familyMedicalHistoryOther	家族史(其他)
 * @apiParam (功能请求参数) {String} personalHistory	个人史(1无特殊 2吸烟 3饮酒 4服用药物 5接触有毒有害物质 6接触放射线 7其他)
 * @apiParam (功能请求参数) {String} personalHistoryOther	个人史(其他)
 * @apiParam (功能请求参数) {int} 	 gynecologicalSurgeryHistory	妇产科手术史(1无 ２有)
 * @apiParam (功能请求参数) {String} maternalHistory	孕产史(1自然流产2人工流产3死胎4死产5新生儿死亡6出生缺陷儿)
 * @apiParam (功能请求参数) {int} 	 maternalNaturalAbortion	孕产史(自然流产次数)
 * @apiParam (功能请求参数) {int} 	 maternalAbortion	孕产史(人工流产次数)
 * @apiParam (功能请求参数) {int} 	 maternalStillbirth	孕产史(死胎次数)
 * @apiParam (功能请求参数) {int} 	 maternalDeadbirth	孕产史(死产次数)
 * @apiParam (功能请求参数) {int} 	 maternalNeonatalDeath	孕产史(新生儿死亡次数)
 * @apiParam (功能请求参数) {int} 	 maternalBirthDefects	孕产史(出生缺陷儿次数)
 * @apiParam (功能请求参数) {int} 	 height	身高(cm)
 * @apiParam (功能请求参数) {String} weight	体重(kg)
 * @apiParam (功能请求参数) {String} physiqueExponent 体质指数(kg/m2)
 * @apiParam (功能请求参数) {int} 	 bloodPressureHigh	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 bloodPressureLow	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 heartAuscultation	心脏听诊(1未见异常2异常)
 * @apiParam (功能请求参数) {String} heartAuscultationOdd	心脏听诊(异常)
 * @apiParam (功能请求参数) {int} 	 lungAuscultation	肺部听诊(1未见异常2异常)
 * @apiParam (功能请求参数) {String} lungAuscultationOdd	肺部听诊(异常)
 * @apiParam (功能请求参数) {int} 	 vulva	外阴(1未见异常2异常)
 * @apiParam (功能请求参数) {String} vulvaOdd	外阴(异常)
 * @apiParam (功能请求参数) {int} 	 vaginal	阴道(1未见异常2异常)
 * @apiParam (功能请求参数) {String} vaginalOdd	阴道(异常)
 * @apiParam (功能请求参数) {int} 	 cervix	宫颈(1未见异常2异常)
 * @apiParam (功能请求参数) {String} cervixOdd	宫颈(异常)
 * @apiParam (功能请求参数) {int} 	 uterus	子宫(1未见异常2异常)
 * @apiParam (功能请求参数) {String} uterusOdd	子宫(异常)
 * @apiParam (功能请求参数) {int} 	 annex	附件(1未见异常2异常)
 * @apiParam (功能请求参数) {String} annexOdd	附件(异常)
 * @apiParam (功能请求参数) {int} 	 bloodRoutineHemoglobinValue	血红蛋白值(g/L)
 * @apiParam (功能请求参数) {String} bloodRoutineWbcCount	白细胞计数值(/L)
 * @apiParam (功能请求参数) {String} bloodRoutinePlateletCountValue	血小板计数值(/L)
 * @apiParam (功能请求参数) {String} bloodRoutineOther	其他
 * @apiParam (功能请求参数) {String} urineRoutineProteinuria	尿蛋白
 * @apiParam (功能请求参数) {String} urineRoutineGlycosuria	尿糖
 * @apiParam (功能请求参数) {String} urineRoutineKetoneBody	尿酮体
 * @apiParam (功能请求参数) {String} urineRoutineUrineOccultBlood	尿潜血
 * @apiParam (功能请求参数) {String} urineRoutineOther	其他
 * @apiParam (功能请求参数) {String} bloodAbo	ABO血型
 * @apiParam (功能请求参数) {String} bloodRh	血型rh
 * @apiParam (功能请求参数) {String} bloodSugar	血糖(mmol/L)
 * @apiParam (功能请求参数) {String} liverAlt	血清谷丙转氨酶(U/L)
 * @apiParam (功能请求参数) {String} liverAst	血清谷草转氨酶(U/L)
 * @apiParam (功能请求参数) {String} liverAlb	白蛋白(g/L)
 * @apiParam (功能请求参数) {String} liverTbil	总胆红素(μmol/L)
 * @apiParam (功能请求参数) {String} liverDbil	结合胆红素(μmol/L)
 * @apiParam (功能请求参数) {String} kidneyCr	血清肌酐(μmol/L)
 * @apiParam (功能请求参数) {String} kidneyUre	血尿素(mmol/L)
 * @apiParam (功能请求参数) {String} vaginalSecretions	阴道分泌物(1未见异常 2滴虫 3假丝酵母菌 4其他)
 * @apiParam (功能请求参数) {String} vaginalSecretionsOther	阴道分泌物(其他)
 * @apiParam (功能请求参数) {int} 	 vaginalCleanliness	阴道清洁度(1Ⅰ度 2Ⅱ度 3 Ⅲ度 4 Ⅳ度)
 * @apiParam (功能请求参数) {String} viralHepatitisTypeBhbsag	乙型肝炎表面抗原
 * @apiParam (功能请求参数) {String} viralHepatitisTypeBhbeag	乙型肝炎E抗原
 * @apiParam (功能请求参数) {String} viralHepatitisTypeBantiHbs	乙型肝炎表面抗体
 * @apiParam (功能请求参数) {String} viralHepatitisTypeBantiHbe	乙型肝炎e抗体
 * @apiParam (功能请求参数) {String} viralHepatitisTypeBhbcab	乙型肝炎表面抗原
 * @apiParam (功能请求参数) {int} 	 serologicTestForSyphilis	梅毒血清学试验(1阴性 2阳性)
 * @apiParam (功能请求参数) {int} 	 hivAntibodyTest	HIV抗体检测(1阴性 2阳性)
 * @apiParam (功能请求参数) {String} bscanUltrasonography	B超
 * @apiParam (功能请求参数) {String} other	其他
 * @apiParam (功能请求参数) {int} 	 overallAssessment	总体评估(1未见异常 2异常)
 * @apiParam (功能请求参数) {String} overallAssessmentOdd	总体评估(异常)
 * @apiParam (功能请求参数) {String} healthGuidance	保健指导(1生活方式 2心理 3营养 4避免致畸因素和疾病对胚胎的不良影响 5产前筛查宣传告知 6其他)
 * @apiParam (功能请求参数) {String} healthGuidanceOther	保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 referralAdvice	转诊建议(1无   2有)
 * @apiParam (功能请求参数) {String} referralAdviceReason	转诊原因
 * @apiParam (功能请求参数) {String} agenciesAndDepartments	机构及科室
 * @apiParam (功能请求参数) {String} nextVisitDate	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignature	随访医生签名
 * @apiParam (功能请求参数) {String} lng	经度
 * @apiParam (功能请求参数) {String} lat	纬度
 * @apiParam (功能请求参数) {String} pictureOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 02.Antenatal
 * @api {POST} antenatal2To5 03、第2～5次产前随访
 * @apiVersion 1.0.0
 * @apiName antenatal2To5 03、第2～5次产前随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} times	第几次随访，仅四个值：2、3、4、5。前端根据列表返回数判断隐藏提交入口
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} completeDate2nd	(随访/督促)日期
 * @apiParam (功能请求参数) {int} 	 gestationalWeek2nd	出生孕周
 * @apiParam (功能请求参数) {String} chiefComplaint2nd	主诉
 * @apiParam (功能请求参数) {String} weight2nd	体重(kg)
 * @apiParam (功能请求参数) {int} 	 palaceHeight2nd	宫底高度(cm)
 * @apiParam (功能请求参数) {int} 	 abdominalCircumference2nd	腹围(cm)
 * @apiParam (功能请求参数) {String} fetalPosition2nd	胎位
 * @apiParam (功能请求参数) {int} 	 fetalHeartRate2nd	胎心率(次/分钟)
 * @apiParam (功能请求参数) {String} bloodPressureHigh2nd	血压(mmHg)
 * @apiParam (功能请求参数) {String} bloodPressureLow2nd	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 hemoglobin2nd	血红蛋白(g/L)
 * @apiParam (功能请求参数) {String} proteinuria2nd	尿蛋白(g/L)
 * @apiParam (功能请求参数) {String} auxiliaryExamination2nd	其他辅助检查
 * @apiParam (功能请求参数) {int} 	 classification2nd	分类(1未见异常2异常)
 * @apiParam (功能请求参数) {String} classificationOdd2nd	分类(异常)
 * @apiParam (功能请求参数) {String} guide2nd	指导2:(1.生活方式2.营养3.心理4.运动5其他)3:(1.生活方式2.营养3.心理4.运动5.自我监护6.母乳喂养7其他)4~5:(1.生活方式2.营养3.心理4.运动5.自我监测6.分娩准备7.母乳喂养8其他)
 * @apiParam (功能请求参数) {String} guideOther2nd	指导(其他)
 * @apiParam (功能请求参数) {int} 	 referralAdvice2nd	转诊建议(1无 2有)
 * @apiParam (功能请求参数) {String} referralAdviceReason2nd	转诊原因
 * @apiParam (功能请求参数) {String} agenciesAndDepartments2nd	机构及科室
 * @apiParam (功能请求参数) {String} nextVisitDate2nd	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignature2nd	随访医生签名
 * @apiParam (功能请求参数) {String} lng2nd	经度
 * @apiParam (功能请求参数) {String} lat2nd	纬度
 * @apiParam (功能请求参数) {String} pictureOne2nd	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo2nd	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 02.Antenatal
 * @api {POST} postpartum 04、产后随访
 * @apiVersion 1.0.0
 * @apiName postpartum 04、产后随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDate	随访日期
 * @apiParam (功能请求参数) {String} birthDate	分娩日期
 * @apiParam (功能请求参数) {String} dischargeDate	出院日期
 * @apiParam (功能请求参数) {String} bodyTemperature	体温(℃)
 * @apiParam (功能请求参数) {String} healthCondition	一般健康情况
 * @apiParam (功能请求参数) {String} mentalCondition	一般心理状况
 * @apiParam (功能请求参数) {int} 	 bloodPressureHigh	血压<高压>(mmHg)
 * @apiParam (功能请求参数) {int} 	 bloodPressureLow	血压<低压>(mmHg)
 * @apiParam (功能请求参数) {int} 	 breast	乳房(1未见异常2异常)
 * @apiParam (功能请求参数) {String} breastOdd	乳房(异常)
 * @apiParam (功能请求参数) {int} 	 lochia	恶露(1未见异常2异常)
 * @apiParam (功能请求参数) {String} lochiaOdd	恶露(异常)
 * @apiParam (功能请求参数) {int} 	 uterus	子宫(1未见异常2异常)
 * @apiParam (功能请求参数) {String} uterusOdd	子宫(异常)
 * @apiParam (功能请求参数) {int} 	 wound	伤口(1未见异常2异常)
 * @apiParam (功能请求参数) {String} woundOdd	伤口(异常)
 * @apiParam (功能请求参数) {String} other	其他
 * @apiParam (功能请求参数) {int} 	 classification	分类(1未见异常2异常)
 * @apiParam (功能请求参数) {String} classificationOdd	分类(异常)
 * @apiParam (功能请求参数) {String} guide	指导(1个人卫生2心理3营养4母乳喂养5新生儿护理与喂养6其他)
 * @apiParam (功能请求参数) {String} guideOther	指导(其他)
 * @apiParam (功能请求参数) {int} 	 referral	转诊(1无 2有)
 * @apiParam (功能请求参数) {String} referralReasone	转诊原因
 * @apiParam (功能请求参数) {String} agenciesAndDepartment	机构及科室
 * @apiParam (功能请求参数) {String} nextVisitDate	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignature	随访医生签名
 * @apiParam (功能请求参数) {String} lng	经度
 * @apiParam (功能请求参数) {String} lat	纬度
 * @apiParam (功能请求参数) {String} pictureOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 02.Antenatal
 * @api {POST} postpartum42 05、产后42天随访
 * @apiVersion 1.0.0
 * @apiName postpartum42 05、产后42天随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDate	随访日期
 * @apiParam (功能请求参数) {String} birthDate	分娩日期
 * @apiParam (功能请求参数) {String} dischargeDate	出院日期
 * @apiParam (功能请求参数) {String} healthCondition	一般健康情况
 * @apiParam (功能请求参数) {String} mentalCondition	一般心理状况
 * @apiParam (功能请求参数) {int} 	 bloodPressureHigh	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 bloodPressureLow	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 breast	乳房(1未见异常2异常)
 * @apiParam (功能请求参数) {String} breastOdd	乳房(异常)
 * @apiParam (功能请求参数) {int} 	 lochia	恶露(1未见异常2异常)
 * @apiParam (功能请求参数) {String} lochiaOdd	恶露(异常)
 * @apiParam (功能请求参数) {int} 	 uterus	子宫(1未见异常2异常)
 * @apiParam (功能请求参数) {String} uterusOdd	子宫(异常)
 * @apiParam (功能请求参数) {int} 	 wound	伤口(1未见异常2异常)
 * @apiParam (功能请求参数) {String} woundOdd	伤口(异常)
 * @apiParam (功能请求参数) {String} other	其他
 * @apiParam (功能请求参数) {int} 	 classification	分类(1已恢复 2未恢复)
 * @apiParam (功能请求参数) {String} classificationOdd	分类(异常)
 * @apiParam (功能请求参数) {String} guide	指导(1心理保健 2性保健与避孕 3婴儿喂养 4产妇营养 5其他)
 * @apiParam (功能请求参数) {String} guideOther	指导(其他)
 * @apiParam (功能请求参数) {int} 	 handle	处理(1结案 2转诊)
 * @apiParam (功能请求参数) {String} handleReferralReasone	转诊原因
 * @apiParam (功能请求参数) {String} agenciesAndDepartment	机构及科室
 * @apiParam (功能请求参数) {String} doctorSignature	随访医生签名
 * @apiParam (功能请求参数) {String} lng	经度
 * @apiParam (功能请求参数) {String} lat	纬度
 * @apiParam (功能请求参数) {String} pictureOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 03.UserInfo
 * @api {POST} userBase 01、用户基本信息
 * @apiDescription  描述：包含于第三版个人基本信息表、以及签约相关信息
 * @apiVersion 1.0.0
 * @apiName userBase 01、用户基本信息
 *
 * @apiParam (功能请求参数) {String} name  姓名
 * @apiParam (功能请求参数) {String} address  现住址
 * @apiParam (功能请求参数) {String} regAddress  户籍地址
 * @apiParam (功能请求参数) {String} phone  本人电话)
 * @apiParam (功能请求参数) {String} villageName  村/小区名称(村（居）委会名称)
 * @apiParam (功能请求参数) {String} townName  乡/镇名称
 * @apiParam (功能请求参数) {String} organizationUid  建档单位(医生所在单位)
 * @apiParam (功能请求参数) {String} organizationName  建档单位名称(医生所在单位)
 * @apiParam (功能请求参数) {String} doctorName  责任医生
 * @apiParam (功能请求参数) {String} recordDate  建档日期
 * @apiParam (功能请求参数) {String} nationCd  民族		01汉族,02蒙古族,03回族,04藏族,05维吾尔族,06苗族,07彝族,08壮族,09布依族,10朝鲜族,11满族,12侗族,13瑶族,14白族,15土家族,16哈尼族,17哈萨克族,18傣族,19黎族,20傈僳族,21佤族,22畲族,23高山族,24拉祜族,25水族,26东乡族,27纳西族,28景颇族,29柯尔克孜族,30土族,31达斡尔族,32仫佬族,33羌族,34布朗族,35撒拉族,36毛南族,37仡佬族,38锡伯族,39阿昌族,40普米族,41塔吉克族,42怒族,43乌孜别克族,44俄罗斯族,45鄂温克族,46崩龙族,47保安族,48裕固族,49京族,50塔塔尔族,51独龙族,52鄂伦春族,53赫哲族,54门巴族,55珞巴族,56基诺族,97其他,98外国血统中国籍人士
 * @apiParam (功能请求参数) {String} nationName  民族名称
 * @apiParam (功能请求参数) {String} identityCardCd  身份证件-类别代码	  01居民身份证,02居民户口簿,03护照,04军官证,05驾驶证,06港澳居民来往内地通行证,07台湾居民来往内地通行证,99其他法定有效证件
 * @apiParam (功能请求参数) {String} identityCard  身份证件-号码
 * @apiParam (功能请求参数) {String} birthDate  出生日期
 * @apiParam (功能请求参数) {int} 	 age  年龄
 * @apiParam (功能请求参数) {int} 	 genderCd  性别 	1男性,2女性,9未说明的性别,0未知的性别
 * @apiParam (功能请求参数) {String} genderName  性别名称
 * @apiParam (功能请求参数) {String} wokingUnitName  工作单位名称
 * @apiParam (功能请求参数) {String} linkman  联系人姓名
 * @apiParam (功能请求参数) {String} linkmanPhone  联系人电话
 * @apiParam (功能请求参数) {int} 	 adRegisterMark  常住类型 0户籍 1 非户籍
 * @apiParam (功能请求参数) {String} aboCd  ABO血型		1:A型,2:B型,3:O型,4:AB型,5:不详
 * @apiParam (功能请求参数) {String} aboName  ABO血型名称
 * @apiParam (功能请求参数) {int} 	 rhCd  RH血型 0不是 1是 99不详
 * @apiParam (功能请求参数) {String} rhName  RH血型名称
 * @apiParam (功能请求参数) {int} 	 edBgCd  文化程度		1:研究生,2:大学本科,3:大学专科和专科学校,4:中等专业学校,5:技工学校,6:高中,7:初中,8:小学,9:文盲或半文盲,10:不详
 * @apiParam (功能请求参数) {String} edBgName  文化程度名称
 * @apiParam (功能请求参数) {String} occuTypeCd  职业		0:国家机关、党群组织、企业、事业单位负责人,1:专业技术人员,2:办事人员和有关人员,3:商业、服务业人员,4:农、林、牧、渔水利业生产人员,5:生产、运输设备操作人员及有关人员,6:军人,7:不便分类的其他从业人员,8:无职业
 * @apiParam (功能请求参数) {String} occuTypeName  职业名称
 * @apiParam (功能请求参数) {String} maritalStCd  婚姻情况		1:未婚,2:已婚,3:丧偶,4:离婚,5:未说明的婚姻状况
 * @apiParam (功能请求参数) {String} maritalStName  婚姻情况名称
 * @apiParam (功能请求参数) {String} signBeginDate  签约日期
 * @apiParam (功能请求参数) {String} signEndDate  签约到期日期
 * @apiParam (功能请求参数) {int} 	 medicareWorkerBase  城镇职工基本医疗保险 1是 0否
 * @apiParam (功能请求参数) {int} 	 medicareDenizenBase  城镇居民基本医疗保险 1是 0否
 * @apiParam (功能请求参数) {int} 	 medicareCountryside  新型农村合作医疗 1是 0否
 * @apiParam (功能请求参数) {int} 	 medicarePoor  贫因救助 1是 0否
 * @apiParam (功能请求参数) {int} 	 medicareBusinessMedicare  商业医疗保险 1是 0否
 * @apiParam (功能请求参数) {int} 	 medicarePublic  全公费 1是 0否
 * @apiParam (功能请求参数) {int} 	 medicarePrivate  全自费 1是 0否
 * @apiParam (功能请求参数) {String} medicareOther  其他
 * @apiParam (功能请求参数) {int} 	 signType  签约状态 0待签约 1已签约 9已过期
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 03.UserInfo
 * @api {POST} userInfo 02、用户信息
 * @apiDescription  描述：包含于第三版个人基本信息表
 * @apiVersion 1.0.0
 * @apiName userInfo 02、用户信息
 *
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {int} 	 isAllergy  是否有药物过敏 1有 0没有
 * @apiParam (功能请求参数) {int} 	 allergyQingmeisu  青霉素 1是 0否
 * @apiParam (功能请求参数) {int} 	 allergyHuangan  磺胺 1是 0否
 * @apiParam (功能请求参数) {int} 	 allergyLianmeisu  链霉素 1是 0否
 * @apiParam (功能请求参数) {String} allergyOther  其他过敏
 * @apiParam (功能请求参数) {int} 	 isExpose  是否有暴露史 1有 0没有
 * @apiParam (功能请求参数) {int} 	 exposerChemistry  化学品 1是 0否
 * @apiParam (功能请求参数) {int} 	 exposerNarcotics  有毒品 1有 0没有
 * @apiParam (功能请求参数) {int} 	 exposerRadiation  射线 1有 0没有
 * @apiParam (功能请求参数) {int} 	 isDisease  疾病史标志 0否 1是		01:无,02:高血压,03:糖尿病,04:冠心病,05:慢性阻塞性肺疾病,06:恶性肿瘤,07:脑卒中,08:严重精神障碍,09:肺结核,10:肝炎,11:先天畸形,12:职业病,13:肾脏疾病,14:贫血,98:其他法定传染病,99:其他
 * @apiParam (功能请求参数) {int} 	 isOperation  手术标志 0否 1是
 * @apiParam (功能请求参数) {String} operationReason1  手术原因1
 * @apiParam (功能请求参数) {String} operationDate1  手术时间1
 * @apiParam (功能请求参数) {String} operationReason2  手术原因2
 * @apiParam (功能请求参数) {String} operationDate2  手术时间2
 * @apiParam (功能请求参数) {int} 	 isTrauma  外伤标志 0否 1是
 * @apiParam (功能请求参数) {String} traumaReason1  外伤原因1
 * @apiParam (功能请求参数) {String} traumaDate1  外伤时间1
 * @apiParam (功能请求参数) {String} traumaReason2  外伤原因2
 * @apiParam (功能请求参数) {String} traumaDate2  外伤时间2
 * @apiParam (功能请求参数) {int} 	 isTransfusion  输血标志 0否 1是
 * @apiParam (功能请求参数) {String} transfusionReason1  输血原因1
 * @apiParam (功能请求参数) {String} transfusionDate1  输血时间1
 * @apiParam (功能请求参数) {String} transfusionReason2  输血原因2
 * @apiParam (功能请求参数) {String} transfusionDate2  输血时间2
 * @apiParam (功能请求参数) {int} 	 isFamilyDisease  家族疾病史标志 0否 1是
 * @apiParam (功能请求参数) {int} 	 isGenetic  遗传病史标志 0否 1是
 * @apiParam (功能请求参数) {String} geneticName  遗传病名称
 * @apiParam (功能请求参数) {int} 	 isDisability  无残疾 1是 0否
 * @apiParam (功能请求参数) {int} 	 disabilityVision  视力残疾 1是 0 否
 * @apiParam (功能请求参数) {int} 	 disabilityHearing  听力残疾 1是 0否
 * @apiParam (功能请求参数) {int} 	 disabilityLanguage  语言残疾 1是 0否
 * @apiParam (功能请求参数) {int} 	 disabilityLimbs  肢体残疾 1是 0否
 * @apiParam (功能请求参数) {int} 	 disabilityIntelligence  智力残疾 1是 0否
 * @apiParam (功能请求参数) {int} 	 disabilitySpirit  精神残疾 1是 0否
 * @apiParam (功能请求参数) {String} disabilityOther  其他残疾
 * @apiParam (功能请求参数) {String} kitchenExhaustFacCd  厨房排风设施代码	1:油烟机,2:换气扇,3:烟囱,9:其他
 * @apiParam (功能请求参数) {String} fuelTypeCd  燃料类型代码	1:液化气,2:煤,3:天然气,4:沼气,5:柴火,9:其他
 * @apiParam (功能请求参数) {String} waterTypeCd  饮水类型代码	1:自来水,2:经净化过滤的水,3:井水,4:河湖水,5:塘水,9:其他
 * @apiParam (功能请求参数) {String} toiletTypeCd  厕所类型代码	1:卫生厕所,2:一个或二格粪池式,3:马桶,4:露天粪坑,5:简易棚厕,9:其他
 * @apiParam (功能请求参数) {String} livestockTypeCd  禽畜栏类型代码	1:无,2:单设,3:室内,4:室外
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 03.HealthExamination
 * @api {POST} healthExamination 03、健康体检表
 * @apiVersion 1.0.0
 * @apiName healthExamination 03、健康体检表
 *
 * @apiParam (功能请求参数) {String} userName  用户姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} date  体检日期
 * @apiParam (功能请求参数) {String} doctorName  医生姓名
 * @apiParam (功能请求参数) {String} symptom  症状 1无症状 2头痛 3头晕 4心悸 5胸闷 6胸痛 7慢性咳嗽 8咳痰 9呼吸困难 10多饮  11多尿 12体重下降  13乏力 14关节肿痛15视力模糊16手脚麻木17尿急18尿痛  19便秘 20腹泻21恶心呕吐22眼花 23耳鸣 24乳房胀痛 25其他
 * @apiParam (功能请求参数) {String} symptomOther  症状 其他
 * @apiParam (功能请求参数) {String} temperature  体温
 * @apiParam (功能请求参数) {String} pulse  脉率
 * @apiParam (功能请求参数) {String} breathing  呼吸频率
 * @apiParam (功能请求参数) {String} bloodLeftH  血压左_高
 * @apiParam (功能请求参数) {String} bloodLeftL  血压左_低
 * @apiParam (功能请求参数) {String} bloodRightH  血压右_高
 * @apiParam (功能请求参数) {String} bloodRightL  血压右_低
 * @apiParam (功能请求参数) {String} height  身高
 * @apiParam (功能请求参数) {String} weight  体重
 * @apiParam (功能请求参数) {String} waist  腰围
 * @apiParam (功能请求参数) {String} bmi  体质指数
 * @apiParam (功能请求参数) {String} oldhealthAss  老年人健康状态自我评估 1满意  2基本满意  3说不清楚  4不太满意  5不满意
 * @apiParam (功能请求参数) {String} oldselfAss  老年人生活自理能力自我评估 1 可自理（0～3分）     2轻度依赖（4～8分） 3 中度依赖（9～18分)   4 不能自理（≥19分）
 * @apiParam (功能请求参数) {String} oldCognition  老年人 认知功能   1粗筛阴性 2粗筛阳性， 简易智力状态检查
 * @apiParam (功能请求参数) {String} oldCognitionPoints  总分
 * @apiParam (功能请求参数) {String} oldEmotion  老年人 情感状态* 1粗筛阴性 2粗筛阳性， 老年人抑郁评分检查
 * @apiParam (功能请求参数) {String} oldEmotionPoints  总分
 * @apiParam (功能请求参数) {String} exercise  锻炼频率 1每天  2每周一次以上  3偶尔  4不锻炼
 * @apiParam (功能请求参数) {String} exerciseTime  锻炼时间_分钟
 * @apiParam (功能请求参数) {String} exerciseYear  坚持锻炼时间_年
 * @apiParam (功能请求参数) {String} exerciseMode  锻炼方式
 * @apiParam (功能请求参数) {String} eatHabits  饮食习惯 1荤素均衡 2荤食为主 3素食为主 4嗜盐 5嗜油 6嗜糖
 * @apiParam (功能请求参数) {String} smoke  吸烟状况 1从不吸烟　　　2已戒烟　　　 3吸烟
 * @apiParam (功能请求参数) {String} smokeNum  日吸烟量
 * @apiParam (功能请求参数) {String} smokeStartyear  开始吸烟年龄
 * @apiParam (功能请求参数) {String} smokeQuit  戒烟年龄
 * @apiParam (功能请求参数) {String} moutai  饮酒频率 1从不  2偶尔  3经常  4每天
 * @apiParam (功能请求参数) {String} moutaiNum  日饮酒量
 * @apiParam (功能请求参数) {String} moutaiOver  1未戒酒  2已戒酒
 * @apiParam (功能请求参数) {String} moutaiOverAge  戒酒年龄
 * @apiParam (功能请求参数) {String} moutaiStart  开始饮酒年龄
 * @apiParam (功能请求参数) {String} moutaiIf  近一年内是否曾醉酒1是  2否
 * @apiParam (功能请求参数) {String} moutaiType  1白酒2啤酒3红酒 4黄酒 ５其他
 * @apiParam (功能请求参数) {String} moutaiTypeOther  其他
 * @apiParam (功能请求参数) {String} workDis  职业病危害因素接触史 1无 2有
 * @apiParam (功能请求参数) {String} workType  工种
 * @apiParam (功能请求参数) {String} workYear  从业时间
 * @apiParam (功能请求参数) {String} workFc  粉尘类
 * @apiParam (功能请求参数) {String} workFcProtect  防护措施1无 2有
 * @apiParam (功能请求参数) {String} workFswz  放射物质类
 * @apiParam (功能请求参数) {String} workFswzProtect  防护措施1无 2有
 * @apiParam (功能请求参数) {String} workWlys  物理因素类
 * @apiParam (功能请求参数) {String} workWlysProtect  防护措施1无 2有
 * @apiParam (功能请求参数) {String} workHxwz  化学物质类
 * @apiParam (功能请求参数) {String} workHxwzProtect  防护措施1无 2有
 * @apiParam (功能请求参数) {String} workOther  其他类
 * @apiParam (功能请求参数) {String} workOtherProtect  防护措施1无 2有
 * @apiParam (功能请求参数) {String} mouthLips  口唇 1红润 2苍白 3发绀 4皲裂 5疱疹
 * @apiParam (功能请求参数) {String} mouthTooth  齿列 1正常 2缺齿   3龋齿    4义齿(假牙)
 * @apiParam (功能请求参数) {String} mouthThroat  咽部 1无充血 2充血 3淋巴滤泡增生
 * @apiParam (功能请求参数) {String} eyeLeft  左眼
 * @apiParam (功能请求参数) {String} eyeRight  右眼
 * @apiParam (功能请求参数) {String} eyeCorrectLeft  矫正视力_左
 * @apiParam (功能请求参数) {String} eyeCorrectRight  矫正视力_右
 * @apiParam (功能请求参数) {String} ear  听力1听见 2听不清或无法听见
 * @apiParam (功能请求参数) {String} sport  运动功能 1可顺利完成  2无法独立完成任何一个动作
 * @apiParam (功能请求参数) {String} eyeDown   眼 底1正常  2异常
 * @apiParam (功能请求参数) {String} skin  皮肤 1正常  2 潮红 3苍白 4发绀 5黄染  6色素沉着 7其他
 * @apiParam (功能请求参数) {String} skinOther  其他
 * @apiParam (功能请求参数) {String} sclera  巩     膜 1正常  2 黄染 3充血 4其他
 * @apiParam (功能请求参数) {String} scleraOther  其他
 * @apiParam (功能请求参数) {String} lymph  淋巴结 1未触及   2锁骨上   3腋窝   4其他
 * @apiParam (功能请求参数) {String} lymphOther  其他
 * @apiParam (功能请求参数) {String} lungTzx  桶状胸：1否　　2是
 * @apiParam (功能请求参数) {String} lungHxy  呼吸音：1正常  2异常
 * @apiParam (功能请求参数) {String} lungKy  罗  音：1无 　 2干罗音  3湿罗音 4其他
 * @apiParam (功能请求参数) {String} lungKyOther  其他
 * @apiParam (功能请求参数) {String} heart  心率：  次/分钟
 * @apiParam (功能请求参数) {String} heartRhythm  心律：1齐  2不齐  3绝对不齐
 * @apiParam (功能请求参数) {String} heartNoise  杂音：1无     2有
 * @apiParam (功能请求参数) {String} abdomenYt  腹部压痛：1无  2有
 * @apiParam (功能请求参数) {String} abdomenBk  腹部包块：1无  2有
 * @apiParam (功能请求参数) {String} abdomenGd  腹部 肝大：1无  2有
 * @apiParam (功能请求参数) {String} abdomenPd  脾大：1无  2有
 * @apiParam (功能请求参数) {String} abdomenYdxzy  移动性浊音：1无  2有
 * @apiParam (功能请求参数) {String} legs  下肢水肿 1无   2单侧   3双侧不对称   4双侧对称
 * @apiParam (功能请求参数) {String} footArtery  足背动脉搏动* 1未触及2触及双侧对称3触及左侧弱或消失4触及右侧弱或消失     □
 * @apiParam (功能请求参数) {String} anus  肛门指诊* 1未及异常 2 触痛　  3包块　   4前列腺异常 5其他
 * @apiParam (功能请求参数) {String} anusOther  其他
 * @apiParam (功能请求参数) {String} milk  乳   腺* 1未见异常 2乳房切除 3异常泌乳4乳腺包块 5其他
 * @apiParam (功能请求参数) {String} milkOther  其他
 * @apiParam (功能请求参数) {String} womanWy  外阴 1未见异常   2异常
 * @apiParam (功能请求参数) {String} womanYd  阴道 1未见异常   2异常
 * @apiParam (功能请求参数) {String} womanGj  宫颈 1未见异常   2异常
 * @apiParam (功能请求参数) {String} womanGt  宫体 1未见异常   2异常
 * @apiParam (功能请求参数) {String} womanFj  附件 1未见异常   2异常
 * @apiParam (功能请求参数) {String} ctOther  其他
 * @apiParam (功能请求参数) {String} bloodRoutineXhdb  血红蛋白
 * @apiParam (功能请求参数) {String} bloodRoutineBxb  白细胞
 * @apiParam (功能请求参数) {String} bloodRoutineXxb  血小板
 * @apiParam (功能请求参数) {String} bloodRoutineOther  其他
 * @apiParam (功能请求参数) {String} urineRoutineNdb  尿蛋白
 * @apiParam (功能请求参数) {String} urineRoutineNt  尿糖
 * @apiParam (功能请求参数) {String} urineRoutineNtt  尿酮体
 * @apiParam (功能请求参数) {String} urineRoutineNqx  尿潜血
 * @apiParam (功能请求参数) {String} urineRoutineOther  其他
 * @apiParam (功能请求参数) {String} emptyBloodMmol  空腹血糖
 * @apiParam (功能请求参数) {String} emptyBloodMg  空腹血糖
 * @apiParam (功能请求参数) {String} electrocardiogram  心电图* 1正常  2异常
 * @apiParam (功能请求参数) {String} microalbuminuria  尿微量白蛋白 mg/dL
 * @apiParam (功能请求参数) {String} bloodInStool  大便潜血* 1阴性  2阳性
 * @apiParam (功能请求参数) {String} hemoglobin  糖化血红蛋白
 * @apiParam (功能请求参数) {String} hepatitis  乙型肝炎 表面抗原* 1阴性  2阳性
 * @apiParam (功能请求参数) {String} liverXqgbzam  血清谷丙转氨酶 U/L
 * @apiParam (功能请求参数) {String} liverXqgczam  血清谷草转氨酶 U/L
 * @apiParam (功能请求参数) {String} liverXdb  白蛋白  g/L
 * @apiParam (功能请求参数) {String} liverZdhs  总胆红素 μmol/L
 * @apiParam (功能请求参数) {String} liverJhdhs  结合胆红素 结合胆红素
 * @apiParam (功能请求参数) {String} kidneyXqjg  血清肌酐
 * @apiParam (功能请求参数) {String} kidneyXns  血尿素         mmol/L
 * @apiParam (功能请求参数) {String} kidneyXjnd  血钾浓度         mmol/L
 * @apiParam (功能请求参数) {String} kidneyXnnd  血钠浓度         mmol/L
 * @apiParam (功能请求参数) {String} bloodLipidZdgc  总胆固醇      mmol/L
 * @apiParam (功能请求参数) {String} bloodLipidGysz  甘油三酯       mmol/L
 * @apiParam (功能请求参数) {String} bloodLipidXqdmd  血清低密度脂蛋白胆固醇          mmol/L
 * @apiParam (功能请求参数) {String} bloodLipidXqgmd  血清高密度脂蛋白胆固醇          mmol/L
 * @apiParam (功能请求参数) {String} chestX  胸部X线片*1正常  2异常
 * @apiParam (功能请求参数) {String} bmode  腹部B超      1正常  2异常
 * @apiParam (功能请求参数) {String} bother  其他          1正常  2异常
 * @apiParam (功能请求参数) {String} cervix  宫颈涂片* 1正常  2异常
 * @apiParam (功能请求参数) {String} fzjcOther  辅助检查 其他
 * @apiParam (功能请求参数) {String} cerebrovascularDis  脑血管疾病 1未发现  2缺血性卒中  3脑出血 4蛛网膜下腔出血  5短暂性脑缺血发作
 * @apiParam (功能请求参数) {String} cerebrovascularOther  其他
 * @apiParam (功能请求参数) {String} kidneyDis  1未发现  2糖尿病肾病  3肾功能衰竭  4急性肾炎  5慢性肾炎   6,其他
 * @apiParam (功能请求参数) {String} kidneyOther  肾脏疾病 其他
 * @apiParam (功能请求参数) {String} heartDis  心脏疾病 1未发现  2心肌梗死  3心绞痛  4冠状动脉血运重建 5充血性心力衰竭 6 心前区疼痛 7 其他
 * @apiParam (功能请求参数) {String} heartOther  心脏疾病 其他
 * @apiParam (功能请求参数) {String} bloodVesselDis  血管疾病 1未发现 2夹层动脉瘤  3动脉闭塞性疾病 4其他
 * @apiParam (功能请求参数) {String} bloodVesselOther  血管疾病 其他
 * @apiParam (功能请求参数) {String} eyeDis   眼部疾病 1未发现 2视网膜出血或渗出 3视乳头水肿 4白内障 5 其他
 * @apiParam (功能请求参数) {String} eyeOther  眼部疾病 其他
 * @apiParam (功能请求参数) {String} nerveDis  神经系统疾病 1未发现 2有
 * @apiParam (功能请求参数) {String} otherDis  其他系统疾病 1未发现 2有
 * @apiParam (功能请求参数) {String} hospitalizationStime1  入院日期
 * @apiParam (功能请求参数) {String} hospitalizationEtime1  出院日期
 * @apiParam (功能请求参数) {String} hospitalizationReason1  原因
 * @apiParam (功能请求参数) {String} hospitalizationInstitution1  医疗机构名称
 * @apiParam (功能请求参数) {String} hospitalizationCard1  病案号
 * @apiParam (功能请求参数) {String} hospitalizationStime2  入院日期
 * @apiParam (功能请求参数) {String} hospitalizationEtime2  出院日期
 * @apiParam (功能请求参数) {String} hospitalizationReason2  原因
 * @apiParam (功能请求参数) {String} hospitalizationInstitution2  医疗机构名称
 * @apiParam (功能请求参数) {String} hospitalizationCard2  病案号
 * @apiParam (功能请求参数) {String} familyHistoryStime1  建床日期
 * @apiParam (功能请求参数) {String} familyHistoryEtime1  撤床日期
 * @apiParam (功能请求参数) {String} familyHistoryReason1  原 因
 * @apiParam (功能请求参数) {String} familyHistoryInstitution1  医疗机构名称
 * @apiParam (功能请求参数) {String} familyHistoryCard1  病案号
 * @apiParam (功能请求参数) {String} familyHistoryStime2  建床日期
 * @apiParam (功能请求参数) {String} familyHistoryEtime2  撤床日期
 * @apiParam (功能请求参数) {String} familyHistoryReason2  原 因
 * @apiParam (功能请求参数) {String} familyHistoryInstitution2  医疗机构名称
 * @apiParam (功能请求参数) {String} familyHistoryCard2  病案号
 * @apiParam (功能请求参数) {String} drugUseName1  药物名称
 * @apiParam (功能请求参数) {String} drugUserUsage1  用法
 * @apiParam (功能请求参数) {String} drugUserConsumption1  用量
 * @apiParam (功能请求参数) {String} drugUserTime1  用药时间
 * @apiParam (功能请求参数) {String} drugUserStatus1  服药依从性 1规律　2间断　3不服药
 * @apiParam (功能请求参数) {String} drugUseName2  药物名称
 * @apiParam (功能请求参数) {String} drugUserUsage2  用法
 * @apiParam (功能请求参数) {String} drugUserConsumption2  用量
 * @apiParam (功能请求参数) {String} drugUserTime2  用药时间
 * @apiParam (功能请求参数) {String} drugUserStatus2  服药依从性 1规律　2间断　3不服药
 * @apiParam (功能请求参数) {String} drugUseName3  药物名称
 * @apiParam (功能请求参数) {String} drugUserUsage3  用法
 * @apiParam (功能请求参数) {String} drugUserConsumption3  用量
 * @apiParam (功能请求参数) {String} drugUserTime3  用药时间
 * @apiParam (功能请求参数) {String} drugUserStatus3  服药依从性 1规律　2间断　3不服药
 * @apiParam (功能请求参数) {String} drugUseName4  药物名称
 * @apiParam (功能请求参数) {String} drugUserUsage4  用法
 * @apiParam (功能请求参数) {String} drugUserConsumption4  用量
 * @apiParam (功能请求参数) {String} drugUserTime4  用药时间
 * @apiParam (功能请求参数) {String} drugUserStatus4  服药依从性 1规律　2间断　3不服药
 * @apiParam (功能请求参数) {String} drugUseName5  药物名称
 * @apiParam (功能请求参数) {String} drugUserUsage5  用法
 * @apiParam (功能请求参数) {String} drugUserConsumption5  用量
 * @apiParam (功能请求参数) {String} drugUserTime5  用药时间
 * @apiParam (功能请求参数) {String} drugUserStatus5  服药依从性 1规律　2间断　3不服药
 * @apiParam (功能请求参数) {String} drugUseName6  药物名称
 * @apiParam (功能请求参数) {String} drugUserUsage6  用法
 * @apiParam (功能请求参数) {String} drugUserConsumption6  用量
 * @apiParam (功能请求参数) {String} drugUserTime6  用药时间
 * @apiParam (功能请求参数) {String} drugUserStatus6  服药依从性 1规律　2间断　3不服药
 * @apiParam (功能请求参数) {String} nonImmunizationName1  非免疫名称
 * @apiParam (功能请求参数) {String} nonImmunizationTime1  接种日期
 * @apiParam (功能请求参数) {String} nonImmunizationJg1  接种机构
 * @apiParam (功能请求参数) {String} nonImmunizationName2  非免疫名称
 * @apiParam (功能请求参数) {String} nonImmunizationTime2  接种日期
 * @apiParam (功能请求参数) {String} nonImmunizationJg2  接种机构
 * @apiParam (功能请求参数) {String} nonImmunizationName3  非免疫名称
 * @apiParam (功能请求参数) {String} nonImmunizationTime3  接种日期
 * @apiParam (功能请求参数) {String} nonImmunizationJg3  接种机构
 * @apiParam (功能请求参数) {String} healthVal  健康评价 1体检无异常    2有异常
 * @apiParam (功能请求参数) {String} healthException1  异常
 * @apiParam (功能请求参数) {String} healthException2  异常
 * @apiParam (功能请求参数) {String} healthException3  异常
 * @apiParam (功能请求参数) {String} healthException4  异常
 * @apiParam (功能请求参数) {String} healthException5  异常
 * @apiParam (功能请求参数) {String} healthGuidance  健康指导 1纳入慢性病患者健康管理 2建议复查 3建议转诊
 * @apiParam (功能请求参数) {String} riskFactors  危险因素控制 1戒烟    2健康饮酒   3饮食   4锻炼 5减体重（目标              Kg）    6建议接种疫苗               7其他
 * @apiParam (功能请求参数) {String} riskFactorsKg  目标体重
 * @apiParam (功能请求参数) {String} riskFactorsOther  其他
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 04.CoronaryDisease
 * @api {POST} coronaryDisease 01、冠心病随访
 * @apiDescription 描述：慢病管理，未定，此功能为居民健康档案信息卡与心电体检等定制随访功能
 * @apiVersion 1.0.0
 * @apiName coronaryDisease 01、冠心病随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDate1st	随访日期
 * @apiParam (功能请求参数) {int} 	 visitMethod1st	随访方式(1门诊2家庭3电话)
 * @apiParam (功能请求参数) {String} symptom1st	症状(1无症状2心慌3胸口闷痛4心绞痛5呼吸困难6心悸胸闷7喘憋8不能平卧9下肢水肿10其他)
 * @apiParam (功能请求参数) {String} symptomOther1st	症状<1>(其他)
 * @apiParam (功能请求参数) {int} 	 bloodPressureHigh1st	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 bloodPressureLow1st	血压(mmHg)
 * @apiParam (功能请求参数) {String} weight1st	体重(kg)
 * @apiParam (功能请求参数) {int} 	 firstHeartWeakened1st	第一心音是否减弱(1无 2有)
 * @apiParam (功能请求参数) {int} 	 arrhythmia1st	心律失常是否闻及早搏心房纤颤(1无 2有)
 * @apiParam (功能请求参数) {int} 	 heartShoulder1st	心肩部是否闻及奔马律(1无 2有)
 * @apiParam (功能请求参数) {String} smokeDrinkNotice1st	烟酒注意事项
 * @apiParam (功能请求参数) {String} sportNotice1st	运动注意事项
 * @apiParam (功能请求参数) {String} saltIntakeNotice1st	摄盐注意事项
 * @apiParam (功能请求参数) {int} 	 followMedicalPractice1st	遵医行为(1良好 2一般 3差)
 * @apiParam (功能请求参数) {String} auxiliaryExamination1st	辅助检查
 * @apiParam (功能请求参数) {int} 	 symptomsAreRelieved1st	症状出现后服用硝酸甘油后是否缓解(1无 2有)
 * @apiParam (功能请求参数) {int} 	 complianceMedication1st	服药依从性(1规律 2间断 3不服药)
 * @apiParam (功能请求参数) {int} 	 medicalSideEffects1st	药物不良反应(1无 2有)
 * @apiParam (功能请求参数) {String} medicalSideEffectsAdd1st	药物不良反应(补充)
 * @apiParam (功能请求参数) {int} 	 visitSort1st	此次随访分类(1控制满意 2控制不满意 3不良反应 4并发症)
 * @apiParam (功能请求参数) {String} drug1Name1st	药物1名称
 * @apiParam (功能请求参数) {String} drug2Name1st	药物2名称
 * @apiParam (功能请求参数) {String} drug3Name1st	药物3名称
 * @apiParam (功能请求参数) {String} drugOtherName1st	其他药物名称
 * @apiParam (功能请求参数) {String} drug1Times1st	药物1每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drug2Times1st	药物2每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drug3Times1st	药物3每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drugOtherTimes1st	其他药物每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drug1Amount1st	药物1用药量(每次_)
 * @apiParam (功能请求参数) {String} drug2Amount1st	药物2用药量(每次_)
 * @apiParam (功能请求参数) {String} drug3Amount1st	药物3用药量(每次_)
 * @apiParam (功能请求参数) {String} drugOtherAmount1st	其他药物用药量(每次_)
 * @apiParam (功能请求参数) {int} 	 drug1Unit1st	药物1单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {int} 	 drug2Unit1st	药物2单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {int}  	 drug3Unit1st	药物3单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {int} 	 drugOtherUnit1st	其他药物单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {String} referralReason1st	转诊原因
 * @apiParam (功能请求参数) {String} agenciesAndDepartments1st	机构及科室
 * @apiParam (功能请求参数) {String} nextVisitDate1st	下次随访日期
 * @apiParam (功能请求参数) {String} lng1st	经度
 * @apiParam (功能请求参数) {String} lat1st	纬度
 * @apiParam (功能请求参数) {String} pictureOne1st	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo1st	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

 
/**
 * @apiGroup 05 Mental
 * @api {POST} submitMentalDisorderFollow 01、严重精神障碍患者随访服务记录表
 * @apiVersion 1.0.0
 * @apiName submitMentalDisorderFollow 01、严重精神障碍患者随访服务记录表
 *
 * @apiParam (功能请求参数) {String} userUid 用户id，必填
 * @apiParam (功能请求参数) {String} lat 经度，选填
 * @apiParam (功能请求参数) {String} lng 纬度，选填
 * @apiParam (功能请求参数) {String} visitDate 随访时间，必填
 * @apiParam (功能请求参数) {String} visitNethod 随访方式，必填，1、门诊，2、家庭，3、电话
 * @apiParam (功能请求参数) {String} noVisitReason 失访原因，1、外出打工，2、迁居他处，3、走失，4、连续3次未到访，5、其他，必填
 * @apiParam (功能请求参数) {String} noVisitReasonOther 失访其它原因，选填
 * @apiParam (功能请求参数) {String} dateOfDeath 死亡日期，选填
 * @apiParam (功能请求参数) {String} causeOfDeath 死亡原因，选填，1 躯体疾病  □2 自杀  3 他杀  4 意外  5精神疾病相关并发症  6其他
 * @apiParam (功能请求参数) {String} causeOfDeathDisease 躯体疾病，选填，1、传染病和寄生虫病，2、肿瘤，3、心脏病，4、脑血管病，5、呼吸系统疾病，6、消化系统疾病，7、其他疾病，8、不详
 * @apiParam (功能请求参数) {String} causeOfDeathOther 其它疾病，选填
 * @apiParam (功能请求参数) {String} riskAssessment 危险性评估，0、0级，1、1级，2、2级，3、3级，4、4级，5、5级
 * @apiParam (功能请求参数) {String} currSymptoms 目前症状，例如:1,2,3 1、幻觉，2、交流困难，3、猜疑，4、喜怒无常，5、行为怪异，6、兴奋话多，7、伤人毁物，8、悲观厌世，9、无故外走，10、自语自笑，11、孤僻懒散，12、其他
 * @apiParam (功能请求参数) {String} currSymptomsOther 目前症状其他原因，选填
 * @apiParam (功能请求参数) {String} selfKnowledge 自知力，1、自知力完全，2、自知力不全，3、自知力缺失
 * @apiParam (功能请求参数) {String} sleepSituation 睡眠情况，1、良好，2、一般，3、较差
 * @apiParam (功能请求参数) {String} dietSituation 饮食情况，1、良好，2、一般，3、较差
 * @apiParam (功能请求参数) {String} personalArrangeThings 个人生活料理，1、良好，2、一般，3、较差
 * @apiParam (功能请求参数) {String} housework 家务劳动，1、良好，2、一般，3、较差
 * @apiParam (功能请求参数) {String} productiveLaborAndWork 生产劳动及工作，1、良好，2、一般，3、较差，9、此项不适用
 * @apiParam (功能请求参数) {String} theAbilityToLearn 学习能力，1、良好，2、一般，3、较差
 * @apiParam (功能请求参数) {String} socialInterpersonalCommunication 社会人际交往，1、良好，2、一般，3、较差
 * @apiParam (功能请求参数) {String} dangerousBehavior 危险行为，选填 1有2无
 * @apiParam (功能请求参数) {String} mildTrouble 轻度滋事（次）
 * @apiParam (功能请求参数) {String} accident 肇事（次）
 * @apiParam (功能请求参数) {String} causeTrouble 肇祸（次）
 * @apiParam (功能请求参数) {String} otherHarmfulBehavior 其他危害行为（次）
 * @apiParam (功能请求参数) {String} selfInjury 自伤（次）
 * @apiParam (功能请求参数) {String} suicideAttempt 自杀未遂（次）
 * @apiParam (功能请求参数) {String} lockSituation 两次随访期间关锁情况，1无关锁   2关锁  3关锁已解除
 * @apiParam (功能请求参数) {String} hospitalization 两次随访期间住院情况，0、未住院，1、目前正在住院，2、曾住院 现未住院
 * @apiParam (功能请求参数) {String} lastDischargeTime 末次出院时间
 * @apiParam (功能请求参数) {String} laboratoryExamination 实验室检查，1、有，2、无
 * @apiParam (功能请求参数) {String} drugCompliance 服药依从性，1、按医嘱规律用药，2、间断用药，3、不用药，4、医嘱勿需用药
 * @apiParam (功能请求参数) {String} medicalSideEffects 药物不良反应，1、无，2、有，9、此项不适用
 * @apiParam (功能请求参数) {String} adverseDrugReaction 药物不良反应情况
 * @apiParam (功能请求参数) {String} treatmentEffect 治疗效果，1、痊愈，2、好转，3、无变化，4、加重，9、此项不适用
 * @apiParam (功能请求参数) {String} referral 是否转诊，1、否，2、是
 * @apiParam (功能请求参数) {String} referralReason 转诊原因，必填
 * @apiParam (功能请求参数) {String} agenciesAndDepartments 转诊机构及科别
 * @apiParam (功能请求参数) {String} rehabilitationMeasures 康复措施，选填，1、生活劳动能力，2、职业训练，3、学习能力，4、社会交往，5、其他
 * @apiParam (功能请求参数) {String} rehabilitationMeasuresOther 康复措施其他，，选填 *  @apiParam (功能请求参数) {String} drugUseName1 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseName1 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes1 每日次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount1 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseName2 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes2 用要次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount2 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseName3 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes3 用要次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount3 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseUnit1 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} drugUseUnit2 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} drugUseUnit3 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} guideDrugName1 药物名称，选填
 * @apiParam (功能请求参数) {String} guideDrugTimes1 每日次数，选填
 * @apiParam (功能请求参数) {String} guideDrugAmount1 每次用量，选填
 * @apiParam (功能请求参数) {String} guideDrugName2 药物名称，选填
 * @apiParam (功能请求参数) {String} guideDrugTimes2 用要次数，选填
 * @apiParam (功能请求参数) {String} guideDrugAmount2 每次用量，选填
 * @apiParam (功能请求参数) {String} guideDrugName3 药物名称，选填
 * @apiParam (功能请求参数) {String} guideDrugTimes3 用要次数，选填
 * @apiParam (功能请求参数) {String} guideDrugAmount3 每次用量，选填
 * @apiParam (功能请求参数) {String} guideDrugUseUnit1 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} guideDrugUseUnit2 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} guideDrugUseUnit2 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} visitClassification 本次随访分类，1、不稳定，2、基本稳定，3、稳定
 * @apiParam (功能请求参数) {String} nextVisitDate 下次随访日期，选填
 * @apiParam (功能请求参数) {String} pictureOne 医生用户合照1，选填
 * @apiParam (功能请求参数) {String} pictureTwo 医生用户合照2，选填
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {}
 *  }
 */

/**
 * @apiGroup 05 Mental
 * @api {POST} submitMentalDisorderInformation 02、严重精神障碍患者个人信息补充表
 * @apiVersion 1.0.0
 * @apiName submitMentalDisorderInformation 02、严重精神障碍患者个人信息补充表
 * @apiParam (功能请求参数) {String} userUid 用户id，必填
 * @apiParam (功能请求参数) {String} lat 经度，选填
 * @apiParam (功能请求参数) {String} lng 纬度，选填
 * @apiParam (功能请求参数) {String} guardianName 监护人姓名，必填
 * @apiParam (功能请求参数) {String} relationShip 与患者关系，必填
 * @apiParam (功能请求参数) {String} guardianAddress 监护人地址，必填
 * @apiParam (功能请求参数) {String} guardianPhone 监护人电话，必填
 * @apiParam (功能请求参数) {String} communityCont 辖区村（居）委会联系人，必填
 * @apiParam (功能请求参数) {String} communityPhone 辖区村（居）委会电话，必填
 * @apiParam (功能请求参数) {String} houseHolds 户别，必填，1、城镇，2、农村
 * @apiParam (功能请求参数) {String} employmentSituation 就业情况，必填，1、在岗工人，2、在岗管理者，3、农民，4、下岗或无业，5、在校学生，6、退休，7、专业技术人员，8、其他，9、不详
 * @apiParam (功能请求参数) {String} employmentSituationOther 就业情况其他，选填
 * @apiParam (功能请求参数) {String} managementParticipation 是否同意参加管理，必填，1、同意，0、不同意
 * @apiParam (功能请求参数) {String} signature 知情同意签字，选填
 * @apiParam (功能请求参数) {String} signatureDate 知情同意签字时间，选填
 * @apiParam (功能请求参数) {String} firstFallIllTime 初次病发时间，选填
 * @apiParam (功能请求参数) {String} previousMajorSymptoms 既往主要症状，例如1,2,3 选填，1幻觉 2交流困难 3猜疑 4喜怒无常  5行为怪异  6兴奋话多7伤人毁物 8悲观厌世  9无故外走 10自语自笑  11孤僻懒散 12其他
 * @apiParam (功能请求参数) {String} previousMajorSymptomsOther 既往主要症状其他，选填
 * @apiParam (功能请求参数) {String} pastLockSituation 既往关锁情况，必填，1、无关锁，2、关锁，3、关锁已解除
 * @apiParam (功能请求参数) {String} pastOutpatientTreatment 既往门诊治疗，必填，1、未治，2、间断门诊治疗，3、连续门诊治疗
 * @apiParam (功能请求参数) {String} firstAntipsychoticTreatmentTime 首次抗精神药治疗时间 ，必填
 * @apiParam (功能请求参数) {String} psychiatricSpecialistInGeneralHospital 曾住精神专科医院/综合医院精神专科（次），必填
 * @apiParam (功能请求参数) {String} diagnosis 诊断，必填
 * @apiParam (功能请求参数) {String} diagnosisHospital 确诊医院，必填
 * @apiParam (功能请求参数) {String} diagnosisTime 确诊时间，必填
 * @apiParam (功能请求参数) {String} theLatestTreatmentEffect 最近一次治疗效果，1、临床痊愈，2、好转，3、无变化，4、加重
 * @apiParam (功能请求参数) {String} dangerousBehavior 危险行为，选填 1有2无
 * @apiParam (功能请求参数) {String} mildTrouble 轻度滋事（次）
 * @apiParam (功能请求参数) {String} accident 肇事（次）
 * @apiParam (功能请求参数) {String} causeTrouble 肇祸（次）
 * @apiParam (功能请求参数) {String} otherHarmfulBehavior 其他危害行为（次）
 * @apiParam (功能请求参数) {String} selfInjury 自伤（次）
 * @apiParam (功能请求参数) {String} suicideAttempt 自杀未遂（次）
 * @apiParam (功能请求参数) {String} economicSituation 经济状况，1、贫穷，在当地贫困线以下，2、非贫困
 * @apiParam (功能请求参数) {String} adviceSpecialist 专科医生的意见(1有 2无)
 * @apiParam (功能请求参数) {String} adviceSpecialistContext  专科医生的意见
 * @apiParam (功能请求参数) {String} visitDate 随访时间，必填
 * @apiParam (功能请求参数) {String} pictureOne 医生用户合照1，选填
 * @apiParam (功能请求参数) {String} pictureTwo 医生用户合照2，选填
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 * {
 *     "errcode": 200,
 *     "errmsg":"",
 *     "data": {}
 * }
 */

/**
 * @apiGroup 06.OldHealthy
 * @api {POST} oldHealthy 01、老年人中医药健康管理
 * @apiVersion 1.0.0
 * @apiName oldHealthy 01、老年人中医药健康管理
 *
 * @apiParam (功能请求参数) {String} name  姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {int} 	 fullOfEnergy  1精力充沛(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 easyToFatigue  2容易疲乏(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 shortnessOfBreath  3呼吸短促(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 noEnergyToSpeak  4话没力气(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 feelUnhappy  5心情不愉快(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 anxiety  6焦虑不安(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 feelLonely  7感到孤独(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 easyToFeelScared  8感到害怕(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 excessiveBody  9身体超重(1BMI＜24 224≤BMI＜25 325≤BMI＜26 426≤BMI＜28 5BMI≥28)
 * @apiParam (功能请求参数) {int} 	 dryEyes  10眼睛干涩(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 coldHandsAndFeet  11手脚发凉(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 backOrWaistAndKneesCold  12背部或腰膝部怕冷(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 canNotStandTheCold  13受不了寒冷(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 numberOfColdEveryYear  14每年感冒的次数(1一年＜2次 2一年感冒2-4次 3一年感冒5-6次 4一年8次以上 5几乎每月)
 * @apiParam (功能请求参数) {int} 	 nasalCongestionRunnyNose  15鼻塞、流鼻涕(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 sleepSnoring  16睡眠打鼾(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 easilyAllergic  17容易过敏(1从来没有 2一年1、2次 3一年3、4次 4一年5、6次 5每次遇到上述原因都过敏)
 * @apiParam (功能请求参数) {int} 	 urticaria  18容易起荨麻疹(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 cymbidiumBruiseSubcutaneousBleeding  19出现青紫瘀斑、皮下出血(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 scratches  20皮肤一抓就红(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 dryLipsOrDrySkin  21皮肤或口唇干(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 limbsNumbness  22肢体麻木(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 facialGreasy  23面部油腻(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 brownPatchesOnFace  24面色出现褐色斑块(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 skinEczemaSores  25皮肤湿疹、疮疖(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 dryMouthAndThroat  26口干咽燥(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 badBreath  27嘴里有异味(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 abdominalHypertrophy  28腹部肥大(1腹围<80cm，相当于2.4尺 2腹围80-85cm，2.4-2.55尺 3腹围86-90cm，2.56-2.7尺 4腹围1-105cm，2.71-3.15尺 5腹围>105cm或3.15尺)
 * @apiParam (功能请求参数) {int} 	 afterEatingColdFoodWillBeUncomfortable  29吃喝了凉的后会不舒服(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 stoolSticky  30大便黏滞(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 dryStool  31大便干燥(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 thickAndGreasyTongue  32舌苔厚腻(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {int} 	 sublingualVeinStasisPurpleOrThickening  33舌下静脉瘀紫或增粗(1没有 2很少 3有时 4经常 5总是)
 * @apiParam (功能请求参数) {String} resultScore  所有得分
 * @apiParam (功能请求参数) {int} 	 spiritWeakScore  气虚质(得分)
 * @apiParam (功能请求参数) {int} 	 spiritWeakRecognition  气虚质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} spiritWeakHealthGuidance  气虚质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} spiritWeakHealthGuidanceOther  气虚质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 maleGenitalsWeakScore  阳虚质(得分)
 * @apiParam (功能请求参数) {int} 	 maleGenitalsWeakRecognition  阳虚质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} maleGenitalsWeakHealthGuidance  阳虚质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} maleGenitalsWeakHealthGuidanceOther  阳虚质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 shadeWeakScore  阴虚质(得分)
 * @apiParam (功能请求参数) {int} 	 shadeWeakRecognition  阴虚质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} shadeWeakHealthGuidance  阴虚质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} shadeWeakHealthGuidanceOther  阴虚质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 sputumWetScore  痰湿质(得分)
 * @apiParam (功能请求参数) {int} 	 sputumWetRecognition  痰湿质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} sputumWetHealthGuidance  痰湿质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} sputumWetHealthGuidanceOther  痰湿质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 hotAndHumidScore  湿热质(得分)
 * @apiParam (功能请求参数) {int} 	 hotAndHumidRecognition  湿热质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} hotAndHumidHealthGuidance  湿热质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} hotAndHumidHealthGuidanceOther  湿热质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 bloodStasisScore  血瘀质(得分)
 * @apiParam (功能请求参数) {int} 	 bloodStasisRecognition  血瘀质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} bloodStasisHealthGuidance  血瘀质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} bloodStasisHealthGuidanceOther  血瘀质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 qiDepressionConstitutionScore  气郁质(得分)
 * @apiParam (功能请求参数) {int} 	 qiDepressionConstitutionRecognition  气郁质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} qiDepressionConstitutionHealthGuidance  气郁质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} qiDepressionConstitutionHealthGuidanceOther  气郁质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 theSpecificEndowmentScore  特禀质(得分)
 * @apiParam (功能请求参数) {int} 	 theSpecificEndowmentRecognition  特禀质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} theSpecificEndowmentHealthGuidance  特禀质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} theSpecificEndowmentHealthGuidanceOther  特禀质保健指导(其他)
 * @apiParam (功能请求参数) {int} 	 peacefulScore  平和质(得分)
 * @apiParam (功能请求参数) {int} 	 peacefulRecognition  平和质辨识(1是2倾向是3否)
 * @apiParam (功能请求参数) {String} peacefulHealthGuidance  平和质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)
 * @apiParam (功能请求参数) {String} peacefulHealthGuidanceOther  平和质保健指导(其他)
 * @apiParam (功能请求参数) {String} nextVisitTime  填表日期(_年_月_日)
 * @apiParam (功能请求参数) {String} doctorSignature  医生签名
 * @apiParam (功能请求参数) {String} lng  经度
 * @apiParam (功能请求参数) {String} lat  纬度
 * @apiParam (功能请求参数) {String} pictureOne  医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo  医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */
/**
 * @apiGroup 06.OldHealthy
 * @api {POST} oldSelf 02、老年人生活自理能力评估
 * @apiVersion 1.0.0
 * @apiName oldSelf 02、老年人生活自理能力评估
 *
 * @apiParam (功能请求参数) {String} name  姓名
 * @apiParam (功能请求参数) {String} indentityCard  身份证
 * @apiParam (功能请求参数) {int} 	 meal  进餐(1独立完成0分 2需要协助，如切碎、搅拌食物等3分 3完全需要帮助5分)
 * @apiParam (功能请求参数) {int} 	 freshening  梳洗(1独立完成0分  2仅洗澡需要协助1分  3在协助下和适当的时间内，能完成部分梳洗活动3分  4完全需要帮助7分)
 * @apiParam (功能请求参数) {int} 	 dressing  穿衣(1独立完成0分 3需要协助，在适当的时间内完成部分穿衣3分 3完全需要帮助5分)
 * @apiParam (功能请求参数) {int} 	 toilet  如厕(1不需协助，可自控0分 2偶尔失禁，但基本上能如厕或使用便具1分 3经常失禁，在很多提示和协助下尚能如厕或使用便具5分 4完全失禁，完全需要帮助10分)
 * @apiParam (功能请求参数) {int} 	 activity  活动(1独立完成所有活动0分 2借助较小的外力或辅助装置能完成站立、行走、上下楼梯等1分 3借助较大的外力才能完成站立、行走，不能上下楼梯5分  4卧床不起，活动完全需要帮助10分)
 * @apiParam (功能请求参数) {int} 	 totalScore  总得分
 * @apiParam (功能请求参数) {String} lng  经度
 * @apiParam (功能请求参数) {String} lat  纬度
 * @apiParam (功能请求参数) {String} pictureOne  医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo  医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 07.Tuberculosis
 * @api {POST} firstTuberculosis 01、肺结核第一次入户随访
 * @apiVersion 1.0.0
 * @apiName firstTuberculosis 01、肺结核第一次入户随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitTime	随访时间
 * @apiParam (功能请求参数) {int} 	 visitMethod	随访方式(1门诊2家庭)
 * @apiParam (功能请求参数) {int} 	 patientType	患者类型(1初治 2复治)
 * @apiParam (功能请求参数) {int} 	 mycobecteriumTuberculosis	痰菌情况(1阳性 2阴性 3未查痰)
 * @apiParam (功能请求参数) {int} 	 drugResistance	耐药情况(1耐药 2非耐药 3未检测)
 * @apiParam (功能请求参数) {String} symptomsAndSigns	症状及体征(0没有症状 1咳嗽咳痰 2低热盗汗 3咯血或血痰 4 胸痛消瘦 5恶心纳差 6头痛失眠 7视物模糊 8皮肤瘙痒、皮疹 9 耳鸣、听力下降 10其他)
 * @apiParam (功能请求参数) {String} symptomsAndSignsOther	症状及体征(其他)
 * @apiParam (功能请求参数) {String} chemotherapy	化疗方案
 * @apiParam (功能请求参数) {int} 	 chemotherapyUsage	化疗方案用法(1每日 2间歇)
 * @apiParam (功能请求参数) {String} chemotherapyPharmacy	药品剂型(1固定剂量复合制剂 2散装药 3板式组合药 4注射剂 )
 * @apiParam (功能请求参数) {int} 	 supervisor	督导人员选择(1医生 2家属 3自服药 4其他)
 * @apiParam (功能请求参数) {String} supervisorOther	督导人员选择(其他)
 * @apiParam (功能请求参数) {int} 	 independence	单独的居室(1有 2无)
 * @apiParam (功能请求参数) {int} 	 ventilation	通风情况(1良好 2一般 3差)
 * @apiParam (功能请求参数) {int} 	 currSmoking	当前吸烟(支/天)
 * @apiParam (功能请求参数) {int} 	 currDrinking	当前饮酒(两/天)
 * @apiParam (功能请求参数) {int} 	 targetSmoking	目标吸烟(支/天)
 * @apiParam (功能请求参数) {int} 	 targetDrinking	目标饮酒(两/天)
 * @apiParam (功能请求参数) {String} getMedicinePlace	取药地点
 * @apiParam (功能请求参数) {String} getMedicineTime	取药时间
 * @apiParam (功能请求参数) {int} 	 fillInMedicationRecordCard	服药记录卡的填写(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 medicationAndDrugStorage	服药方法及药品存放(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 tuberculosisTreatment	肺结核治疗疗程(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 irregularMedicationHazards	不规律服药危害(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 adverseReactionsAndTreatment	服药后不良反应及处理(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 visitingSputumDuringTreatment	治疗期间复诊查痰(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 stickToMedication	外出期间如何坚持服药(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 habitsPrecautions	生活习惯及注意事项(1掌握 2未掌握)
 * @apiParam (功能请求参数) {int} 	 closeContactInspection	密切接触者检查(1掌握 2未掌握)
 * @apiParam (功能请求参数) {String} nextVisitTime	下次随访日期
 * @apiParam (功能请求参数) {String} doctorSignature	评估医生签名
 * @apiParam (功能请求参数) {String} lng	经度
 * @apiParam (功能请求参数) {String} lat	纬度
 * @apiParam (功能请求参数) {String} pictureOne	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 07.Tuberculosis
 * @api {POST} tuberculosis 02、肺结核患者随访
 * @apiVersion 1.0.0
 * @apiName tuberculosis 02、肺结核患者随访
 *
 * @apiParam (功能请求参数) {String} name  姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitTime1st  随访时间
 * @apiParam (功能请求参数) {int} 	 treatmentMonth1st  治疗月序(第_月)
 * @apiParam (功能请求参数) {int} 	 supervisor1st  督导人员选择(1医生 2家属 3自服药 4其他)
 * @apiParam (功能请求参数) {String} supervisorOther1st  督导人员选择(其他)
 * @apiParam (功能请求参数) {int} 	 visitMethod1st  随访方式(1门诊 2家庭 3电话)
 * @apiParam (功能请求参数) {String} symptomsAndSigns1st  症状及体征(0没有症状1咳嗽咳痰2低热盗汗3咯血或血痰4胸痛消瘦5恶心纳差6关节疼痛7头痛失眠8视物模糊9皮肤瘙痒、皮疹10耳鸣、听力下降11其他)
 * @apiParam (功能请求参数) {String} visitMethodOther1st  症状及体征(其他)
 * @apiParam (功能请求参数) {int} 	 currSmoking1st  当前吸烟(支/天)
 * @apiParam (功能请求参数) {int} 	 targetSmoking1st  目标吸烟(支/天)
 * @apiParam (功能请求参数) {int} 	 currDrinking1st  当前饮酒(两/天)
 * @apiParam (功能请求参数) {int} 	 targetDrinking1st  目标饮酒(两/天)
 * @apiParam (功能请求参数) {String} chemotherapy1st  化疗方案
 * @apiParam (功能请求参数) {int} 	 chemotherapyUsage1st  化疗方案用法(1每日 2间歇)
 * @apiParam (功能请求参数) {String} chemotherapyPharmacy1st  药品剂型(1固定剂量复合制剂 2散装药 3板式组合药 4注射剂)
 * @apiParam (功能请求参数) {int} 	 notTakingMedication1st  漏服药次数(次)
 * @apiParam (功能请求参数) {int} 	 medicalSideEffects1st  药物不良反应(1无 2有)
 * @apiParam (功能请求参数) {String} medicalSideEffectsAdd1st  药物不良反应(补充)
 * @apiParam (功能请求参数) {int} 	 complicationsOrComplications1st  并发症或合并症(1无 2有)
 * @apiParam (功能请求参数) {String} complicationsAdd1st  并发症或合并症(补充)
 * @apiParam (功能请求参数) {String} referralClassification1st  转诊科别
 * @apiParam (功能请求参数) {String} referralReason1st  转诊原因
 * @apiParam (功能请求参数) {String} visitResult1st  2周内随访结果
 * @apiParam (功能请求参数) {String} handlingComments1st  处理意见
 * @apiParam (功能请求参数) {String} nextVisitTime1st  下次随访时间
 * @apiParam (功能请求参数) {String} doctorSignature1st  随访医生签名
 * @apiParam (功能请求参数) {String} stopTreatmentTime  停止治疗时间(_年_月_日)
 * @apiParam (功能请求参数) {int} 	 stopTreatmentReason  停止治疗原因(1完成疗程 2死亡 3丢失 4转入耐多药治疗)
 * @apiParam (功能请求参数) {int} 	 shouldVisit  应访视患者_次
 * @apiParam (功能请求参数) {int} 	 actualVisit  实际访视_次
 * @apiParam (功能请求参数) {int} 	 shouldTakeMedicine  应服药_次
 * @apiParam (功能请求参数) {int} 	 actualTakeMedicine  应服药_次
 * @apiParam (功能请求参数) {String} takeMedicineRate  服药率_%
 * @apiParam (功能请求参数) {String} assessDoctorSignature  评估医生签名
 * @apiParam (功能请求参数) {String} lng1st  经度
 * @apiParam (功能请求参数) {String} lat1st  纬度
 * @apiParam (功能请求参数) {String} pictureOne1st  医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo1st  医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

/**
 * @apiGroup 08.CerebralStroke
 * @api {POST} cerebralStroke 01、脑卒中患者随访
 * @apiVersion 1.0.0
 * @apiName cerebralStroke 01、脑卒中患者随访
 *
 * @apiParam (功能请求参数) {String} name	姓名
 * @apiParam (功能请求参数) {String} identityCard  身份证
 * @apiParam (功能请求参数) {String} visitDate1st	随访日期
 * @apiParam (功能请求参数) {int} 	 visitMethod1st	随访方式(1门诊2家庭3电话)
 * @apiParam (功能请求参数) {String} symptom1st	症状(1无症状2清醒3嗜睡4昏睡5烦躁6面瘫7不能平卧8下肢水肿9其他)
 * @apiParam (功能请求参数) {String} symptomOther1st	症状(其他)
 * @apiParam (功能请求参数) {int} 	 bloodPressureHigh1st	血压(mmHg)
 * @apiParam (功能请求参数) {int} 	 bloodPressureLow1st	血压(mmHg)
 * @apiParam (功能请求参数) {String} weight1st	体重(kg)
 * @apiParam (功能请求参数) {String} other1st	体征(其他)
 * @apiParam (功能请求参数) {String} takeMedicines1st	服用何种药物
 * @apiParam (功能请求参数) {String} smokeDrinkNotice1st	烟酒注意事项
 * @apiParam (功能请求参数) {String} sportNotice1st	运动注意事项
 * @apiParam (功能请求参数) {String} saltIntakeNotice1st	摄盐注意事项
 * @apiParam (功能请求参数) {int} 	 psychologicalAdjustment1st	心理调整(1良好 2一般 3差)
 * @apiParam (功能请求参数) {int} 	 followMedicalPractice1st	遵医行为(1良好 2一般 3差)
 * @apiParam (功能请求参数) {String} auxiliaryExamination1st	辅助检查
 * @apiParam (功能请求参数) {int} 	 complianceMedication1st	服药依从性(1规律 2间断 3不服药)
 * @apiParam (功能请求参数) {int} 	 medicalSideEffects1st	药物不良反应(1无 2有)
 * @apiParam (功能请求参数) {String} medicalSideEffectsAdd1st	药物不良反应(补充)
 * @apiParam (功能请求参数) {int} 	 visitSort1st	此次随访分类(1控制满意 2控制不满意 3不良反应 4并发症)
 * @apiParam (功能请求参数) {String} drug1Name1st	药物1名称
 * @apiParam (功能请求参数) {String} drug2Name1st	药物2名称
 * @apiParam (功能请求参数) {String} drug3Name1st	药物3名称
 * @apiParam (功能请求参数) {String} drugOtherName1st	其他药物名称
 * @apiParam (功能请求参数) {String} drug1Times1st	药物1每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drug2Times1st	药物2每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drug3Times1st	药物3每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drugOtherTimes1st	其他药物每日用药次数(每日_次)
 * @apiParam (功能请求参数) {String} drug1Amount1st	药物1用药量(每次_)
 * @apiParam (功能请求参数) {String} drug2Amount1st	药物2用药量(每次_)
 * @apiParam (功能请求参数) {String} drug3Amount1st	药物3用药量(每次_)
 * @apiParam (功能请求参数) {String} drugOtherAmount1st	其他药物用药量(每次_)
 * @apiParam (功能请求参数) {int} 	 drug1Unit1st	药物1单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {int} 	 drug2Unit1st	药物2单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {int} 	 drug3Unit1st	药物3单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {int} 	 drugOtherUnit1st	其他药物单位(1mg 2剂 3片 4丸 5粒 6袋 7支)
 * @apiParam (功能请求参数) {String} agenciesAndDepartments1st	机构及科室
 * @apiParam (功能请求参数) {String} nextVisitDate1st	下次随访日期
 * @apiParam (功能请求参数) {String} lng1st	经度
 * @apiParam (功能请求参数) {String} lat1st	纬度
 * @apiParam (功能请求参数) {String} pictureOne1st	医生用户合照1
 * @apiParam (功能请求参数) {String} pictureTwo1st	医生用户合照2
 *
 * @apiSuccessExample {JSON} 执行成功示例":
 *  {
 *      "errcode": 200,
 *      "errmsg":"success",
 *      "data": {
 *
 *      }
 *  }
 */

// /**
//  * @apiGroup 11.ConsultationRecord
//  * @api {POST} consultationRecord 01、会诊记录表
//  * @apiVersion 1.0.0
//  * @apiName consultationRecord 01、会诊记录表
//  *
//  * @apiParam (功能请求参数) {String} name  姓名
//  * @apiParam (功能请求参数) {String} identityCard  身份证件-号码
//  * @apiParam (功能请求参数) {String} reason  会诊原因
//  * @apiParam (功能请求参数) {String} consultationOpinion  会诊意见
//  * @apiParam (功能请求参数) {String} organizationName  医疗卫生机构名称
//  * @apiParam (功能请求参数) {String} doctorSignature  医生签名
//  * @apiParam (功能请求参数) {String} date  时间
//  *
//  * @apiSuccessExample {JSON} 执行成功示例":
//  *  {
//  *      "errcode": 200,
//  *      "errmsg":"success",
//  *      "data": {
//  *
//  *      }
//  *  }
//  */

// /**
//  * @apiGroup 11.ReferralTwoWay
//  * @api {POST} referralTwoWay 02、双向转诊单
//  * @apiVersion 1.0.0
//  * @apiName referralTwoWay 02、双向转诊单
//  *
//  * @apiParam (功能请求参数) {String} name  姓名
//  * @apiParam (功能请求参数) {String} identityCard  身份证件-号码
//  * @apiParam (功能请求参数) {String} sex  性别
//  * @apiParam (功能请求参数) {String} age  年龄
//  * @apiParam (功能请求参数) {String} number  档案编号
//  * @apiParam (功能请求参数) {String} address  家庭住址
//  * @apiParam (功能请求参数) {String} phone  联系电话
//  * @apiParam (功能请求参数) {String} referralDate  时间(_年_月_日)
//  * @apiParam (功能请求参数) {String} organizationName  单位
//  * @apiParam (功能请求参数) {String} departments  科室
//  * @apiParam (功能请求参数) {String} doctors  接诊医生
//  * @apiParam (功能请求参数) {String} doctorSignature  转诊医生签字
//  * @apiParam (功能请求参数) {String} date  时间
//  *
//  * @apiSuccessExample {JSON} 执行成功示例":
//  *  {
//  *      "errcode": 200,
//  *      "errmsg":"success",
//  *      "data": {
//  *
//  *      }
//  *  }
//  */

// /**
//  * @apiGroup 11.Reception
//  * @api {POST} reception 03、接诊记录表
//  * @apiVersion 1.0.0
//  * @apiName reception 03、接诊记录表
//  *
//  * @apiParam (功能请求参数) {String} name  姓名
//  * @apiParam (功能请求参数) {String} identityCard  身份证件-号码
//  * @apiParam (功能请求参数) {String} subjectiveInformation  就诊者的主观资料
//  * @apiParam (功能请求参数) {String} objectiveData  就诊者的客观资料
//  * @apiParam (功能请求参数) {String} assess  评估
//  * @apiParam (功能请求参数) {String} disposalPlan  处置计划
//  * @apiParam (功能请求参数) {String} doctorSignature  医生签名
//  * @apiParam (功能请求参数) {String} date  日期
//  *
//  * @apiSuccessExample {JSON} 执行成功示例":
//  *  {
//  *      "errcode": 200,
//  *      "errmsg":"success",
//  *      "data": {
//  *
//  *      }
//  *  }
//  */

/**
 * @apiGroup 09 VisitDiabetes2
 * @api {POST} submitDiabetesFollow 01、糖尿病患者随访记录
 * @apiVersion 1.0.0
 * @apiName submitDiabetesFollow 01、糖尿病患者随访记录
 *
 * @apiParam (功能请求参数) {String} uid 用户id，必填
 * @apiParam (功能请求参数) {String} lat 经度，选填
 * @apiParam (功能请求参数) {String} lng 纬度，选填
 * @apiParam (功能请求参数) {String} visitDate 随访时间，必填
 * @apiParam (功能请求参数) {String} visitMethod 随访方式，必填，1、门诊，2、家庭，3、电话
 * @apiParam (功能请求参数) {String} symptom 症状，选填，如1,2,3，1 无症状、2 多饮、3 多食、4 多尿、5 视力模糊、6 感染、7 手脚麻木、8 下肢浮肿、9 体重明显下降
 * @apiParam (功能请求参数) {String} symptomOther 症状，选填
 * @apiParam (功能请求参数) {String} bloodPressureHigh 血压高压，必填
 * @apiParam (功能请求参数) {String} bloodPressureLow 血压低压，必填
 * @apiParam (功能请求参数) {String} weight 体重，必填
 * @apiParam (功能请求参数) {String} weightNext 目标体重，选填
 * @apiParam (功能请求参数) {String} height 身高，选填
 * @apiParam (功能请求参数) {String} physiqueExponent 体脂指数，选填
 * @apiParam (功能请求参数) {String} physiqueExponentNext 目标体脂指数，选填
 * @apiParam (功能请求参数) {String} dorsalarteryoffootBeating 足背动脉搏动，选填
 * @apiParam (功能请求参数) {String} dorsalarteryoffootBeatingLeft 足背动脉搏动左侧，选填
 * @apiParam (功能请求参数) {String} dorsalarteryoffootBeatingRight 足背动脉搏动右侧，选填
 * @apiParam (功能请求参数) {String} signOthor 其他，选填
 * @apiParam (功能请求参数) {String} currSmokingAmount 日吸烟量，必填
 * @apiParam (功能请求参数) {String} targetSmokingAmount 目标日吸烟量，选填
 * @apiParam (功能请求参数) {String} currDrinking 日饮酒量，必填
 * @apiParam (功能请求参数) {String} targetDrinkingAmount 目标日饮酒量，选填
 * @apiParam (功能请求参数) {String} currSportTimes 运动（每次几分钟），必填
 * @apiParam (功能请求参数) {String} currSportAmount 运动（每周几次），必填
 * @apiParam (功能请求参数) {String} targetSportTimes 目标运动（每次几分钟），选填
 * @apiParam (功能请求参数) {String} targetSportAmount 目标运动（每周几次），选填
 * @apiParam (功能请求参数) {String} stapleFood 主食（克/天），必填
 * @apiParam (功能请求参数) {String} stapleFoodNext 目标主食（克/天），选填
 * @apiParam (功能请求参数) {String} psychologicalAdjustment 心理调整，必填1良好 2一般 3差
 * @apiParam (功能请求参数) {String} followMedicalPractice 遵医行为，1良好 2一般 3差
 * @apiParam (功能请求参数) {String} bloodSugar 空腹血糖值mmol/L，必填
 * @apiParam (功能请求参数) {String} hba1c 糖化血红蛋白，选填
 * @apiParam (功能请求参数) {String} checkDate 检查日期，选填
 * @apiParam (功能请求参数) {String} auxiliaryExamination 其它检查，选填
 * @apiParam (功能请求参数) {String} complianceMedication 服药依从性，1、规律，2、间断，3、不服药
 * @apiParam (功能请求参数) {String} medicalSideEffects 药物不良反应，1、无，2、有
 * @apiParam (功能请求参数) {String} medicalSideEffectsAdd 药物不良反应描述
 * @apiParam (功能请求参数) {String} hypoglycemicReaction 低血糖反应，1、无，2、偶尔，3、频繁
 * @apiParam (功能请求参数) {String} visitClassification 此次随访分类
 * @apiParam (功能请求参数) {String} drugUseName1 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes1 每日次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount1 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseName2 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes2 用要次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount2 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseName3 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes3 用要次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount3 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseUnit1 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} drugUseUnit2 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} drugUseUnit3 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} insulinName 胰岛素种类，选填
 * @apiParam (功能请求参数) {String} insulinUse 用量和用法，选填
 * @apiParam (功能请求参数) {String} referralReason 转诊原因，必填
 * @apiParam (功能请求参数) {String} agenciesAndDepartments 转诊机构及科别
 * @apiParam (功能请求参数) {String} nextVisitDate 下次随访日期，选填
 * @apiParam (功能请求参数) {String} pictureOne 医生用户合照1，选填
 * @apiParam (功能请求参数) {String} pictureTwo 医生用户合照2，选填
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {}
 *  }
 */

/**
 * @apiGroup 10 Hypertension
 * @api {POST} submitHypertensionFollow 01、高血压患者随访记录
 * @apiVersion 1.0.0
 * @apiName submitHypertensionFollow 01、高血压患者随访记录
 *
 * @apiParam (功能请求参数) {String} userUid 用户id，必填
 * @apiParam (功能请求参数) {String} lat 经度，选填
 * @apiParam (功能请求参数) {String} lng 纬度，选填
 * @apiParam (功能请求参数) {String} visitDate 随访时间，必填
 * @apiParam (功能请求参数) {String} visitMethod 随访方式，必填，1、门诊，2、家庭，3、电话
 * @apiParam (功能请求参数) {String} symptom 症状，必填，如1,2,3 ，1无症状  2头痛头晕  3恶心呕吐  4眼花耳鸣   5呼吸困难  6心悸胸闷  7鼻衄出血不止 8四肢发麻   9下肢水肿
 * @apiParam (功能请求参数) {String} symptomOther 症状其他，选填
 * @apiParam (功能请求参数) {String} bloodPressureHigh 血压高压，必填
 * @apiParam (功能请求参数) {String} bloodPressureLow 血压低压，必填
 * @apiParam (功能请求参数) {String} weight 体重，必填
 * @apiParam (功能请求参数) {String} weightNext 目标体重，选填
 * @apiParam (功能请求参数) {String} height 身高，选填
 * @apiParam (功能请求参数) {String} physiqueExponent 体脂指数，选填
 * @apiParam (功能请求参数) {String} physiqueExponentNext 目标体脂指数，选填
 * @apiParam (功能请求参数) {String} heartRate 体征心率（次/分钟）
 * @apiParam (功能请求参数) {String} signOthor 体征其他
 * @apiParam (功能请求参数) {String} currSmokingAmount 日吸烟量，必填
 * @apiParam (功能请求参数) {String} targetSmokingAmount 目标日吸烟量，选填
 * @apiParam (功能请求参数) {String} currDrinkingAmount 日饮酒量，必填
 * @apiParam (功能请求参数) {String} targetDrinkingAmount 目标日饮酒量，选填
 * @apiParam (功能请求参数) {String} currSportTimes 运动（每次几分钟），必填
 * @apiParam (功能请求参数) {String} currSportAmount 运动（每周几次），必填
 * @apiParam (功能请求参数) {String} targetSportTimes 目标运动（每次几分钟），选填
 * @apiParam (功能请求参数) {String} targetSportAmount 目标运动（每周几次），选填
 * @apiParam (功能请求参数) {String} currSaltIntake 摄盐情况，1、轻，2、中，3、重
 * @apiParam (功能请求参数) {String} targetSaltIntak 摄盐情况，1、轻，2、中，3、重
 * @apiParam (功能请求参数) {String} psychologicalAdjustment 心理调整，1良好 2一般 3差
 * @apiParam (功能请求参数) {String} followMedicalPractice 遵医行为，1良好 2一般 3差
 * @apiParam (功能请求参数) {String} accessoryExamination 辅助检查
 * @apiParam (功能请求参数) {String} complianceMedication 服药依从性，1、规律，2、间断，3、不服药
 * @apiParam (功能请求参数) {String} medicalSideEffects 药物不良反应 1、无，2、有
 * @apiParam (功能请求参数) {String} visitClassification 此次随访分类，1、控制满意，2、控制不满意，3、不良反应，4、并发症
 * @apiParam (功能请求参数) {String} drugUseName1 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes1 每日次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount1 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseName2 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes2 用要次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount2 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseName3 药物名称，选填
 * @apiParam (功能请求参数) {String} drugUseTimes3 用要次数，选填
 * @apiParam (功能请求参数) {String} drugUseAmount3 每次用量，选填
 * @apiParam (功能请求参数) {String} otherDrugUseName4 药物名称，选填
 * @apiParam (功能请求参数) {String} otherDrugUseTimes4 用要次数，选填
 * @apiParam (功能请求参数) {String} otherDrugUseAmount4 每次用量，选填
 * @apiParam (功能请求参数) {String} drugUseUnit1 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} drugUseUnit2 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} drugUseUnit3 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} otherDrugUseUnit4 用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填
 * @apiParam (功能请求参数) {String} referralReason 转诊原因，必填
 * @apiParam (功能请求参数) {String} agenciesAndDepartments 转诊机构及科别
 * @apiParam (功能请求参数) {String} nextVisitDate 下次随访日期，选填
 * @apiParam (功能请求参数) {String} pictureOne 医生用户合照1，选填
 * @apiParam (功能请求参数) {String} pictureTwo 医生用户合照2，选填
 *
 * @apiSuccessExample {JSON} 执行成功示例:
 *  {
 *      "errcode": 200,
 *      "errmsg":"",
 *      "data": {}
 *  }
 */

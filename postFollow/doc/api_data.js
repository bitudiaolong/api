define({ "api": [
  {
    "group": "01_Child",
    "type": "POST",
    "url": "health24To36",
    "title": "06、24～36月中医药健康管理服务随访",
    "version": "1.0.0",
    "name": "health24To36_06_24_36____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDateTwentyFour",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthServeTwentyFour",
            "description": "<p>中医药健康管理服务(24月龄) 1中医饮食调养指导，2中医起居调摄指导，3传授摩腹、捏脊方法，4其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthServeTwentyFourOther",
            "description": "<p>中医药健康管理服务(24月龄) 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateTwentyFour",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignatureTwentyFour",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lngTwentyFour",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "latTwentyFour",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOneTwentyFour",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwoTwentyFour",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "01_Child"
  },
  {
    "group": "01_Child",
    "type": "POST",
    "url": "health6To18",
    "title": "05、6～18月中医药健康管理服务随访",
    "version": "1.0.0",
    "name": "health6To18_05_6_18____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDateSix",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthServeSix",
            "description": "<p>中医药健康管理服务(6月龄) 1中医饮食调养指导，2中医起居调摄指导，3传授摩腹、捏脊方法，4其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthServeSixOther",
            "description": "<p>中医药健康管理服务(6月龄) 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateSix",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignatureSix",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lngSix",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "latSix",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOneSix",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwoSix",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "01_Child"
  },
  {
    "group": "01_Child",
    "type": "POST",
    "url": "newChild12To30",
    "title": "03、12～30月龄儿童随访",
    "version": "1.0.0",
    "name": "newChild12To30_03_12_30______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDateTwelve",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weightSizeTwelve",
            "description": "<p>体重/kg</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "weightTwelve",
            "description": "<p>体重指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heightSizeTwelve",
            "description": "<p>身长(/cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heightTwelve",
            "description": "<p>身长指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "complexionTwelve",
            "description": "<p>面色(1红润2其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "complexionOtherTwelve",
            "description": "<p>面色（其他）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "skinTwelve",
            "description": "<p>皮肤(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "skinOddTwelve",
            "description": "<p>皮肤(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "anteriorFontanelleTwelve",
            "description": "<p>前囱(1闭合 2未闭)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleSizeBeforeTwelve",
            "description": "<p>前囟尺寸&lt;前&gt;(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleSizeAfterTwelve",
            "description": "<p>前囟尺寸&lt;后&gt;(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "eyeTwelve",
            "description": "<p>眼睛（1未见异常2异常）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeOddTwelve",
            "description": "<p>眼睛(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "earTwelve",
            "description": "<p>耳外观(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "earOddTwelve",
            "description": "<p>耳外观(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hearingTwelve",
            "description": "<p>听力(1通过  2未通过)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "toothTwelve",
            "description": "<p>出牙(颗)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dentalCariesTwelve",
            "description": "<p>龋齿数(颗)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "chestTwelve",
            "description": "<p>胸部(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chestOddTwelve",
            "description": "<p>胸部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "abdomenTwelve",
            "description": "<p>腹部(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenOddTwelve",
            "description": "<p>腹部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "fourLimbsTwelve",
            "description": "<p>四肢(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fourLimbsOddTwelve",
            "description": "<p>四肢(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "gaitTwelve",
            "description": "<p>步态(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "gaitOddTwelve",
            "description": "<p>步态(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "suspectedRicketsSignsTwelve",
            "description": "<p>可疑佝偻病体征(1无2肋串珠3肋软骨沟4鸡胸5手足镯6O型腿7X型腿)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hemoglobinValueTwelve",
            "description": "<p>血红蛋白值(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "outdoorActivitiesTwelve",
            "description": "<p>户外活动(小时/日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "takeVitaminDtwelve",
            "description": "<p>服用维生素D(IU/日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "developmentalAssessmentTwelve",
            "description": "<p>发育评估 12月:(1.呼唤名字无反应2.不会模仿“再见”或“欢迎”动作3.不会用拇食指对捏小物品4.不会扶物站立)18月：(1.不会有意识叫“爸爸”或“妈妈”2.不会按要求指人或物3.与人无目光交流4.不会独走)24月:(1.不会说3个物品的名称2.不会按吩咐做简单事情3.不会用勺吃饭4.不会扶栏上楼梯/台阶)30月:(1.不会说2-3个字的短语2.兴趣单一、刻板3.不会示意大小便4.不会跑)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessTwelve",
            "description": "<p>两次随访间患病情况(1无 2肺炎 3腹泻 4外伤 5其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessOddTwelve",
            "description": "<p>两次随访间患病情况(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessPneumoniaTwelve",
            "description": "<p>[肺炎次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessDiarrheaTwelve",
            "description": "<p>[腹泻次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessTraumaTwelve",
            "description": "<p>[外伤次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessOtherTwelve",
            "description": "<p>[其他]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referralAdviceTwelve",
            "description": "<p>转诊建议(1无2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReasonTwelve",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesDepartmentsTwelve",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingTwelve",
            "description": "<p>指导(1科学喂养2生长发育3疾病预防4预防伤害5口腔保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingOtherTwelve",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateTwelve",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignatureTwelve",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lngTwelve",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "latTwelve",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOneTwelve",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwoTwelve",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "01_Child"
  },
  {
    "group": "01_Child",
    "type": "POST",
    "url": "newChild1To8",
    "title": "02、1～8月龄儿童健康检查记录",
    "version": "1.0.0",
    "name": "newChild1To8_02_1_8__________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDateOne",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weightSizeOne",
            "description": "<p>体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "weightOne",
            "description": "<p>体重指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heightSizeOne",
            "description": "<p>身长(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heightOne",
            "description": "<p>身长指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "headWidthOne",
            "description": "<p>头围(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "complexionOne",
            "description": "<p>面色(1红润2黄染3其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "complexionOtherOne",
            "description": "<p>面色（其他）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "skinOne",
            "description": "<p>皮肤(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "skinOddOne",
            "description": "<p>皮肤(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "anteriorFontanelleOne",
            "description": "<p>前囱(1闭合 2未闭)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleSizeBeforeOne",
            "description": "<p>前囟尺寸(前cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleSizeAfterOne",
            "description": "<p>前囟尺寸(后cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "neckMassOne",
            "description": "<p>颈部包块(1有 2无)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "eyeOne",
            "description": "<p>眼睛（1未见异常2异常）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeOddOne",
            "description": "<p>眼睛（异常）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "earOne",
            "description": "<p>耳(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "earOddOne",
            "description": "<p>耳(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hearingOne",
            "description": "<p>听力(1通过  2未通过)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "osOne",
            "description": "<p>1~2:口腔(1未见异常 2异常)  3~4:出牙数</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "osOddOne",
            "description": "<p>口腔(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "chestOne",
            "description": "<p>胸部(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chestOddOne",
            "description": "<p>胸部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "abdomenOne",
            "description": "<p>腹部(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenOddOne",
            "description": "<p>腹部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "umbilicusOne",
            "description": "<p>脐部 1:(1未脱 2脱落 3脐部有渗出 4其他) 2:(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "umbilicusOddOne",
            "description": "<p>脐部(其他/异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "fourLimbsOne",
            "description": "<p>四肢(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fourLimbsOddOne",
            "description": "<p>四肢(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "ricketsSymptomsOne",
            "description": "<p>可疑佝偻病症状(1无2夜惊3多汗4烦躁)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "suspectedRicketsSignsOne",
            "description": "<p>可疑佝偻病体征 2:(1无 2颅骨软化) 3~4:(1无 2肋串珠 3肋软骨沟 4鸡胸 5手足镯 6颅骨软化 7方颅)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "sexualOrgansOne",
            "description": "<p>肛门/外生殖器(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sexualOrgansOddOne",
            "description": "<p>肛门/外生殖器(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hemoglobinValueOne",
            "description": "<p>血红蛋白值(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "outdoorActivitiesOne",
            "description": "<p>户外活动(小时/日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "takeVitaminDone",
            "description": "<p>服用维生素D(IU/日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "developmentalAssessmentOne",
            "description": "<p>发育评估2:(1对很大声音没有反应2逗引时不发音或不会微笑3不注视人脸，不追视移动人或物品4俯卧时不会抬头)3:(1发音少，不会笑出声2不会伸手抓物3紧握拳松不开4.不能扶坐)4:(1听到声音无应答2不会区分生人和熟人3双手间不会传递玩具4不会独坐)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessOne",
            "description": "<p>两次随访间患病情况(1无 2肺炎 3腹泻 4外伤 5其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessOtherOne",
            "description": "<p>两次随访间患病情况(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessPneumoniaOne",
            "description": "<p>[肺炎次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessDiarrheaOne",
            "description": "<p>[腹泻次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessTraumaOne",
            "description": "<p>[外伤次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherOne",
            "description": "<p>[其他]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referralAdviceOne",
            "description": "<p>转诊建议(1无2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReasonOne",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesDepartmentsOne",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingOne",
            "description": "<p>指导(1科学喂养2生长发育3疾病预防4预防伤害5口腔保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingOtherOne",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateOne",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignatureOne",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lngOne",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "latOne",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOneOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwoOne",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "01_Child"
  },
  {
    "group": "01_Child",
    "type": "POST",
    "url": "newChild3To6",
    "title": "04、3~6岁龄新生儿随访",
    "version": "1.0.0",
    "name": "newChild3To6_04_3_6_______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDateThree",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weightSizeThree",
            "description": "<p>体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "weightThree",
            "description": "<p>体重指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heightSizeThree",
            "description": "<p>身长(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heightThree",
            "description": "<p>身长指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weightAndHeightSizeThree",
            "description": "<p>体重/身高</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "weightAndHeightThree",
            "description": "<p>体重/身高指标(1上 2中 3下)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "physicalGrowthThree",
            "description": "<p>体格发育评价(1正常 2低体重 3消瘦 4生长迟缓 5超重)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sightLeftThree",
            "description": "<p>视力(左)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sightRightThree",
            "description": "<p>视力(右)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hearingThree",
            "description": "<p>听力(1通过  2未通过)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "toothThree",
            "description": "<p>出牙(颗)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dentalCariesThree",
            "description": "<p>龋齿数(颗)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "chestThree",
            "description": "<p>胸部(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chestOddThree",
            "description": "<p>胸部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "abdomenThree",
            "description": "<p>腹部(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenOddThree",
            "description": "<p>腹部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hemoglobinValueThree",
            "description": "<p>血红蛋白值(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherThree",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "growthAssessmentThree",
            "description": "<p>发育评估 3岁:(1.不会说自己的名字2.不会玩“拿棍当马骑”等假想游戏3.不会模仿画圆4.不会双脚跳)4岁:(1.不会说带形容词的句子2.不能按要求等待或轮流3.不会独立穿衣4.不会单脚站立)5岁:(1.不能简单叙说事情经过2.不知道自己的性别3.不会用筷子吃饭4.不会单脚跳)6岁:(1.不会表达自己的感受或想法2.不会玩角色扮演的集体游戏3.不会画方形4.不会奔跑)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessThree",
            "description": "<p>两次随访间患病情况(1无 2肺炎 3腹泻 4外伤 5其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessOddThree",
            "description": "<p>两次随访间患病情况(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessPneumoniaThree",
            "description": "<p>[肺炎次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessDiarrheaThree",
            "description": "<p>[腹泻次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "illnessTraumaThree",
            "description": "<p>[外伤次数]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessOtherThree",
            "description": "<p>[其他]</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referralAdviceThree",
            "description": "<p>转诊建议(1无2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReasonThree",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesDepartmentsThree",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingThree",
            "description": "<p>指导(1合理膳食2生长发育3疾病预防4预防伤害5口腔保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingOtherThree",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateThree",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignatureThree",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lngThree",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "latThree",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOneThree",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwoThree",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "01_Child"
  },
  {
    "group": "01_Child",
    "type": "POST",
    "url": "newChildFamily",
    "title": "01、新生儿家庭随访",
    "version": "1.0.0",
    "name": "newChildFamily_01________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案编号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "sex",
            "description": "<p>性别(1男 2女 9未说明的性别 0未知的性别)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>出生日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>家庭住址</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fatherName",
            "description": "<p>父亲姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "motherName",
            "description": "<p>母亲姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fatherWork",
            "description": "<p>父亲职业</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "motherWork",
            "description": "<p>母亲职业</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fatherPhone",
            "description": "<p>父亲联系电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "motherPhone",
            "description": "<p>母亲联系电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fatherBirthday",
            "description": "<p>父亲出生日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "motherBirthday",
            "description": "<p>母亲出生日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "gestationalWeeks",
            "description": "<p>出生孕周(单位:周)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessDuringPregnancy",
            "description": "<p>母亲妊娠期患病情况(1无 2糖尿病 3妊娠期高血压 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "illnessDuringPregnancyOther",
            "description": "<p>母亲妊娠期患病情况(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "midwiferyName",
            "description": "<p>助产机构名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthSituation",
            "description": "<p>出生情况(1顺产 2胎头吸引 3产钳 4剖宫 5双多胎 6臀位 7其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthSituationOther",
            "description": "<p>出生情况(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "neonatalAsphyxia",
            "description": "<p>新生儿窒息(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "apgarScore",
            "description": "<p>Apgar评分(11min 25min 3不详)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "deformity",
            "description": "<p>畸形(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hearingScreening",
            "description": "<p>新生儿听力筛查(1通过  2未通过  3未筛查 4不详)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "diseaseScreening",
            "description": "<p>新生儿疾病筛查(1未进行 2检查均阴性 3甲低 4苯丙酮尿症 5其他遗传代谢病)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthWeight",
            "description": "<p>新生儿出生体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currWeight",
            "description": "<p>目前体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthHeight",
            "description": "<p>出生身长(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "feedingMethod",
            "description": "<p>喂养方式(1纯母乳 2混合 3人工)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "eatMilkQuantity",
            "description": "<p>吃奶量(mL/次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "eatMilkTime",
            "description": "<p>吃奶次数(次/日</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "vomit",
            "description": "<p>呕吐(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "stool",
            "description": "<p>大便(1糊状2稀3其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "stoolOther",
            "description": "<p>大便(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "stoolFrequency",
            "description": "<p>大便次数(次/日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bodyTemperature",
            "description": "<p>体温(℃)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heartRate",
            "description": "<p>心率(次/分钟)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "respiratoryRate",
            "description": "<p>呼吸频率(次/分钟)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "complexion",
            "description": "<p>面色(1红润 2黄染 3其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "complexionOther",
            "description": "<p>面色(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "jaundiceSite",
            "description": "<p>黄疸部位(1无 2面部 3躯干 4四肢 5手足)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleBeforeSize",
            "description": "<p>前囟(_cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleAfterSize",
            "description": "<p>前囟(_cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "anteriorFontanelle",
            "description": "<p>前囟(1正常 2膨隆 3凹陷 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anteriorFontanelleOther",
            "description": "<p>前囟(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "eyes",
            "description": "<p>眼睛(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyesOdd",
            "description": "<p>眼睛(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "fourLimbsActivity",
            "description": "<p>四肢活动度(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fourLimbsActivityOdd",
            "description": "<p>四肢活动度(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "earAppearance",
            "description": "<p>耳外观(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "earAppearanceOdd",
            "description": "<p>耳外观(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "neckMass",
            "description": "<p>颈部包块(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "nose",
            "description": "<p>鼻(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "noseOdd",
            "description": "<p>鼻(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "skin",
            "description": "<p>皮肤(1未见异常 2湿疹 3糜烂 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "skinOther",
            "description": "<p>皮肤(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "oral",
            "description": "<p>口腔(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oralOdd",
            "description": "<p>口腔(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "anus",
            "description": "<p>肛门(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anusOdd",
            "description": "<p>肛门(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "cardiopulmonaryAuscultation",
            "description": "<p>心肺听诊(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "cardiopulmonaryAuscultationOdd",
            "description": "<p>心肺听诊(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "chest",
            "description": "<p>胸部(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chestOdd",
            "description": "<p>胸部(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "abdominalPalpation",
            "description": "<p>腹部触诊(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdominalPalpationOdd",
            "description": "<p>腹部触诊(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "spine",
            "description": "<p>脊柱(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "spineOdd",
            "description": "<p>脊柱(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "genitalia",
            "description": "<p>外生殖器(1未见异常  2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "genitaliaOdd",
            "description": "<p>外生殖器(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "umbilicalCord",
            "description": "<p>脐带(1未脱 2脱落 3脐部有渗出 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "umbilicalCordOther",
            "description": "<p>脐带(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议(1无2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesDepartments",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advising",
            "description": "<p>指导(1喂养指导 2发育指导 3防病指导 4预防伤害指导 5口腔保健指导 6.其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "advisingOther",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "thisVisitDate",
            "description": "<p>本次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "thisVisitAddr",
            "description": "<p>本次随访地点</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "01_Child"
  },
  {
    "group": "02_Antenatal",
    "type": "POST",
    "url": "antenatal2To5",
    "title": "03、第2～5次产前随访",
    "version": "1.0.0",
    "name": "antenatal2To5_03__2_5_____",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "times",
            "description": "<p>第几次随访，仅四个值：2、3、4、5。前端根据列表返回数判断隐藏提交入口</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "completeDate2nd",
            "description": "<p>(随访/督促)日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "gestationalWeek2nd",
            "description": "<p>出生孕周</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chiefComplaint2nd",
            "description": "<p>主诉</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight2nd",
            "description": "<p>体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "palaceHeight2nd",
            "description": "<p>宫底高度(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "abdominalCircumference2nd",
            "description": "<p>腹围(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fetalPosition2nd",
            "description": "<p>胎位</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "fetalHeartRate2nd",
            "description": "<p>胎心率(次/分钟)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodPressureHigh2nd",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodPressureLow2nd",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hemoglobin2nd",
            "description": "<p>血红蛋白(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "proteinuria2nd",
            "description": "<p>尿蛋白(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "auxiliaryExamination2nd",
            "description": "<p>其他辅助检查</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "classification2nd",
            "description": "<p>分类(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "classificationOdd2nd",
            "description": "<p>分类(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guide2nd",
            "description": "<p>指导2:(1.生活方式2.营养3.心理4.运动5其他)3:(1.生活方式2.营养3.心理4.运动5.自我监护6.母乳喂养7其他)4~5:(1.生活方式2.营养3.心理4.运动5.自我监测6.分娩准备7.母乳喂养8其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideOther2nd",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referralAdvice2nd",
            "description": "<p>转诊建议(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralAdviceReason2nd",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments2nd",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate2nd",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature2nd",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng2nd",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat2nd",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne2nd",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo2nd",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "02_Antenatal"
  },
  {
    "group": "02_Antenatal",
    "type": "POST",
    "url": "antenatalFirst",
    "title": "02、第一次产前随访",
    "version": "1.0.0",
    "name": "antenatalFirst_02________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "completeDate",
            "description": "<p>填表日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "gestationalWeek",
            "description": "<p>出生孕周(周)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "pregnantWomenAge",
            "description": "<p>孕妇年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandName",
            "description": "<p>丈夫姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "husbandAge",
            "description": "<p>丈夫年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandPhone",
            "description": "<p>丈夫电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "numberOfPregnanciesVaginalDelivery",
            "description": "<p>孕次(总计)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "numberOfPregnanciesParturition",
            "description": "<p>孕次(阴道分娩&lt;次&gt;)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "numberOfPregnanciesCesareanSection",
            "description": "<p>孕次(剖宫产&lt;次&gt;)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lastMenstruation",
            "description": "<p>末次月经时间(_年_月_日或不详)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dueDate",
            "description": "<p>预产期(_年_月_日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pastMedicalHistory",
            "description": "<p>既往史(1无2心脏病3肾脏疾病 4肝脏疾病5高血压6贫血7糖尿病8其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pastMedicalHistoryOther",
            "description": "<p>既往史(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyMedicalHistory",
            "description": "<p>家族史(1无 2遗传性疾病史　3精神疾病史 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyMedicalHistoryOther",
            "description": "<p>家族史(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "personalHistory",
            "description": "<p>个人史(1无特殊 2吸烟 3饮酒 4服用药物 5接触有毒有害物质 6接触放射线 7其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "personalHistoryOther",
            "description": "<p>个人史(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "gynecologicalSurgeryHistory",
            "description": "<p>妇产科手术史(1无 ２有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "maternalHistory",
            "description": "<p>孕产史(1自然流产2人工流产3死胎4死产5新生儿死亡6出生缺陷儿)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maternalNaturalAbortion",
            "description": "<p>孕产史(自然流产次数)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maternalAbortion",
            "description": "<p>孕产史(人工流产次数)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maternalStillbirth",
            "description": "<p>孕产史(死胎次数)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maternalDeadbirth",
            "description": "<p>孕产史(死产次数)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maternalNeonatalDeath",
            "description": "<p>孕产史(新生儿死亡次数)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maternalBirthDefects",
            "description": "<p>孕产史(出生缺陷儿次数)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "height",
            "description": "<p>身高(cm)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "physiqueExponent",
            "description": "<p>体质指数(kg/m2)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureHigh",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureLow",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heartAuscultation",
            "description": "<p>心脏听诊(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heartAuscultationOdd",
            "description": "<p>心脏听诊(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "lungAuscultation",
            "description": "<p>肺部听诊(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lungAuscultationOdd",
            "description": "<p>肺部听诊(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "vulva",
            "description": "<p>外阴(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "vulvaOdd",
            "description": "<p>外阴(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "vaginal",
            "description": "<p>阴道(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "vaginalOdd",
            "description": "<p>阴道(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "cervix",
            "description": "<p>宫颈(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "cervixOdd",
            "description": "<p>宫颈(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "uterus",
            "description": "<p>子宫(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "uterusOdd",
            "description": "<p>子宫(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "annex",
            "description": "<p>附件(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "annexOdd",
            "description": "<p>附件(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodRoutineHemoglobinValue",
            "description": "<p>血红蛋白值(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutineWbcCount",
            "description": "<p>白细胞计数值(/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutinePlateletCountValue",
            "description": "<p>血小板计数值(/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutineOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineProteinuria",
            "description": "<p>尿蛋白</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineGlycosuria",
            "description": "<p>尿糖</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineKetoneBody",
            "description": "<p>尿酮体</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineUrineOccultBlood",
            "description": "<p>尿潜血</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodAbo",
            "description": "<p>ABO血型</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRh",
            "description": "<p>血型rh</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodSugar",
            "description": "<p>血糖(mmol/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverAlt",
            "description": "<p>血清谷丙转氨酶(U/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverAst",
            "description": "<p>血清谷草转氨酶(U/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverAlb",
            "description": "<p>白蛋白(g/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverTbil",
            "description": "<p>总胆红素(μmol/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverDbil",
            "description": "<p>结合胆红素(μmol/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyCr",
            "description": "<p>血清肌酐(μmol/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyUre",
            "description": "<p>血尿素(mmol/L)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "vaginalSecretions",
            "description": "<p>阴道分泌物(1未见异常 2滴虫 3假丝酵母菌 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "vaginalSecretionsOther",
            "description": "<p>阴道分泌物(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "vaginalCleanliness",
            "description": "<p>阴道清洁度(1Ⅰ度 2Ⅱ度 3 Ⅲ度 4 Ⅳ度)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "viralHepatitisTypeBhbsag",
            "description": "<p>乙型肝炎表面抗原</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "viralHepatitisTypeBhbeag",
            "description": "<p>乙型肝炎E抗原</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "viralHepatitisTypeBantiHbs",
            "description": "<p>乙型肝炎表面抗体</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "viralHepatitisTypeBantiHbe",
            "description": "<p>乙型肝炎e抗体</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "viralHepatitisTypeBhbcab",
            "description": "<p>乙型肝炎表面抗原</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "serologicTestForSyphilis",
            "description": "<p>梅毒血清学试验(1阴性 2阳性)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hivAntibodyTest",
            "description": "<p>HIV抗体检测(1阴性 2阳性)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bscanUltrasonography",
            "description": "<p>B超</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "overallAssessment",
            "description": "<p>总体评估(1未见异常 2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "overallAssessmentOdd",
            "description": "<p>总体评估(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthGuidance",
            "description": "<p>保健指导(1生活方式 2心理 3营养 4避免致畸因素和疾病对胚胎的不良影响 5产前筛查宣传告知 6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthGuidanceOther",
            "description": "<p>保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议(1无   2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralAdviceReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "02_Antenatal"
  },
  {
    "group": "02_Antenatal",
    "type": "POST",
    "url": "antenatalInfo",
    "title": "01、孕妇信息表",
    "version": "1.0.0",
    "name": "antenatalInfo_01______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "card",
            "description": "<p>卡号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证件-号码</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "edBgCd",
            "description": "<p>文化程度\t1:研究生,2:大学本科,3:大学专科和专科学校,4:中等专业学校,5:技工学校,6:高中,7:初中,8:小学,9:文盲或半文盲,10:不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "edBgName",
            "description": "<p>文化程度名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "occuTypeCd",
            "description": "<p>职业\t0:国家机关、党群组织、企业、事业单位负责人,1:专业技术人员,2:办事人员和有关人员,3:商业、服务业人员,4:农、林、牧、渔水利业生产人员,5:生产、运输设备操作人员及有关人员,6:军人,7:不便分类的其他从业人员,8:无职业</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "occuTypeName",
            "description": "<p>职业名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>本人电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nationCd",
            "description": "<p>民族\t01汉族,02蒙古族,03回族,04藏族,05维吾尔族,06苗族,07彝族,08壮族,09布依族,10朝鲜族,11满族,12侗族,13瑶族,14白族,15土家族,16哈尼族,17哈萨克族,18傣族,19黎族,20傈僳族,21佤族,22畲族,23高山族,24拉祜族,25水族,26东乡族,27纳西族,28景颇族,29柯尔克孜族,30土族,31达斡尔族,32仫佬族,33羌族,34布朗族,35撒拉族,36毛南族,37仡佬族,38锡伯族,39阿昌族,40普米族,41塔吉克族,42怒族,43乌孜别克族,44俄罗斯族,45鄂温克族,46崩龙族,47保安族,48裕固族,49京族,50塔塔尔族,51独龙族,52鄂伦春族,53赫哲族,54门巴族,55珞巴族,56基诺族,97其他,98外国血统中国籍人士</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nationName",
            "description": "<p>民族名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "regAddress",
            "description": "<p>户籍地址</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>现住址</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "postpartumAddress",
            "description": "<p>产后休养地</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "wokingUnitName",
            "description": "<p>工作单位名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandName",
            "description": "<p>丈夫姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "husbandAge",
            "description": "<p>丈夫年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandPhone",
            "description": "<p>丈夫电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "husbandEdBgCd",
            "description": "<p>丈夫文化程度\t1:研究生,2:大学本科,3:大学专科和专科学校,4:中等专业学校,5:技工学校,6:高中,7:初中,8:小学,9:文盲或半文盲,10:不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandEdBgName",
            "description": "<p>丈夫文化程度名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandOccuTypeCd",
            "description": "<p>丈夫职业\t0:国家机关、党群组织、企业、事业单位负责人,1:专业技术人员,2:办事人员和有关人员,3:商业、服务业人员,4:农、林、牧、渔水利业生产人员,5:生产、运输设备操作人员及有关人员,6:军人,7:不便分类的其他从业人员,8:无职业</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandOccuTypeName",
            "description": "<p>丈夫职业名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandNationName",
            "description": "<p>丈夫民族名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandNationCd",
            "description": "<p>丈夫民族\t01汉族,02蒙古族,03回族,04藏族,05维吾尔族,06苗族,07彝族,08壮族,09布依族,10朝鲜族,11满族,12侗族,13瑶族,14白族,15土家族,16哈尼族,17哈萨克族,18傣族,19黎族,20傈僳族,21佤族,22畲族,23高山族,24拉祜族,25水族,26东乡族,27纳西族,28景颇族,29柯尔克孜族,30土族,31达斡尔族,32仫佬族,33羌族,34布朗族,35撒拉族,36毛南族,37仡佬族,38锡伯族,39阿昌族,40普米族,41塔吉克族,42怒族,43乌孜别克族,44俄罗斯族,45鄂温克族,46崩龙族,47保安族,48裕固族,49京族,50塔塔尔族,51独龙族,52鄂伦春族,53赫哲族,54门巴族,55珞巴族,56基诺族,97其他,98外国血统中国籍人士</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "husbandWokingUnitName",
            "description": "<p>丈夫工作单位名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "02_Antenatal"
  },
  {
    "group": "02_Antenatal",
    "type": "POST",
    "url": "postpartum42",
    "title": "05、产后42天随访",
    "version": "1.0.0",
    "name": "postpartum42_05___42___",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthDate",
            "description": "<p>分娩日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dischargeDate",
            "description": "<p>出院日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthCondition",
            "description": "<p>一般健康情况</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mentalCondition",
            "description": "<p>一般心理状况</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureHigh",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureLow",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "breast",
            "description": "<p>乳房(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "breastOdd",
            "description": "<p>乳房(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "lochia",
            "description": "<p>恶露(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lochiaOdd",
            "description": "<p>恶露(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "uterus",
            "description": "<p>子宫(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "uterusOdd",
            "description": "<p>子宫(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "wound",
            "description": "<p>伤口(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "woundOdd",
            "description": "<p>伤口(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "classification",
            "description": "<p>分类(1已恢复 2未恢复)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "classificationOdd",
            "description": "<p>分类(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guide",
            "description": "<p>指导(1心理保健 2性保健与避孕 3婴儿喂养 4产妇营养 5其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideOther",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "handle",
            "description": "<p>处理(1结案 2转诊)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "handleReferralReasone",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartment",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "02_Antenatal"
  },
  {
    "group": "02_Antenatal",
    "type": "POST",
    "url": "postpartum",
    "title": "04、产后随访",
    "version": "1.0.0",
    "name": "postpartum_04_____",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthDate",
            "description": "<p>分娩日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dischargeDate",
            "description": "<p>出院日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bodyTemperature",
            "description": "<p>体温(℃)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthCondition",
            "description": "<p>一般健康情况</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mentalCondition",
            "description": "<p>一般心理状况</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureHigh",
            "description": "<p>血压&lt;高压&gt;(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureLow",
            "description": "<p>血压&lt;低压&gt;(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "breast",
            "description": "<p>乳房(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "breastOdd",
            "description": "<p>乳房(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "lochia",
            "description": "<p>恶露(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lochiaOdd",
            "description": "<p>恶露(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "uterus",
            "description": "<p>子宫(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "uterusOdd",
            "description": "<p>子宫(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "wound",
            "description": "<p>伤口(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "woundOdd",
            "description": "<p>伤口(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "classification",
            "description": "<p>分类(1未见异常2异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "classificationOdd",
            "description": "<p>分类(异常)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guide",
            "description": "<p>指导(1个人卫生2心理3营养4母乳喂养5新生儿护理与喂养6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideOther",
            "description": "<p>指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "referral",
            "description": "<p>转诊(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReasone",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartment",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "02_Antenatal"
  },
  {
    "group": "03_HealthExamination",
    "type": "POST",
    "url": "healthExamination",
    "title": "03、健康体检表",
    "version": "1.0.0",
    "name": "healthExamination_03______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>体检日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorName",
            "description": "<p>医生姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptom",
            "description": "<p>症状 1无症状 2头痛 3头晕 4心悸 5胸闷 6胸痛 7慢性咳嗽 8咳痰 9呼吸困难 10多饮  11多尿 12体重下降  13乏力 14关节肿痛15视力模糊16手脚麻木17尿急18尿痛  19便秘 20腹泻21恶心呕吐22眼花 23耳鸣 24乳房胀痛 25其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomOther",
            "description": "<p>症状 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>体温</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pulse",
            "description": "<p>脉率</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "breathing",
            "description": "<p>呼吸频率</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodLeftH",
            "description": "<p>血压左_高</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodLeftL",
            "description": "<p>血压左_低</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRightH",
            "description": "<p>血压右_高</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRightL",
            "description": "<p>血压右_低</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身高</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "waist",
            "description": "<p>腰围</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bmi",
            "description": "<p>体质指数</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldhealthAss",
            "description": "<p>老年人健康状态自我评估 1满意  2基本满意  3说不清楚  4不太满意  5不满意</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldselfAss",
            "description": "<p>老年人生活自理能力自我评估 1 可自理（0～3分）     2轻度依赖（4～8分） 3 中度依赖（9～18分)   4 不能自理（≥19分）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldCognition",
            "description": "<p>老年人 认知功能   1粗筛阴性 2粗筛阳性， 简易智力状态检查</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldCognitionPoints",
            "description": "<p>总分</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldEmotion",
            "description": "<p>老年人 情感状态* 1粗筛阴性 2粗筛阳性， 老年人抑郁评分检查</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldEmotionPoints",
            "description": "<p>总分</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "exercise",
            "description": "<p>锻炼频率 1每天  2每周一次以上  3偶尔  4不锻炼</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "exerciseTime",
            "description": "<p>锻炼时间_分钟</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "exerciseYear",
            "description": "<p>坚持锻炼时间_年</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "exerciseMode",
            "description": "<p>锻炼方式</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eatHabits",
            "description": "<p>饮食习惯 1荤素均衡 2荤食为主 3素食为主 4嗜盐 5嗜油 6嗜糖</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "smoke",
            "description": "<p>吸烟状况 1从不吸烟　　　2已戒烟　　　 3吸烟</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "smokeNum",
            "description": "<p>日吸烟量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "smokeStartyear",
            "description": "<p>开始吸烟年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "smokeQuit",
            "description": "<p>戒烟年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutai",
            "description": "<p>饮酒频率 1从不  2偶尔  3经常  4每天</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiNum",
            "description": "<p>日饮酒量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiOver",
            "description": "<p>1未戒酒  2已戒酒</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiOverAge",
            "description": "<p>戒酒年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiStart",
            "description": "<p>开始饮酒年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiIf",
            "description": "<p>近一年内是否曾醉酒1是  2否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiType",
            "description": "<p>1白酒2啤酒3红酒 4黄酒 ５其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "moutaiTypeOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workDis",
            "description": "<p>职业病危害因素接触史 1无 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workType",
            "description": "<p>工种</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workYear",
            "description": "<p>从业时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workFc",
            "description": "<p>粉尘类</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workFcProtect",
            "description": "<p>防护措施1无 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workFswz",
            "description": "<p>放射物质类</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workFswzProtect",
            "description": "<p>防护措施1无 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workWlys",
            "description": "<p>物理因素类</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workWlysProtect",
            "description": "<p>防护措施1无 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workHxwz",
            "description": "<p>化学物质类</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workHxwzProtect",
            "description": "<p>防护措施1无 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workOther",
            "description": "<p>其他类</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "workOtherProtect",
            "description": "<p>防护措施1无 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mouthLips",
            "description": "<p>口唇 1红润 2苍白 3发绀 4皲裂 5疱疹</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mouthTooth",
            "description": "<p>齿列 1正常 2缺齿   3龋齿    4义齿(假牙)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mouthThroat",
            "description": "<p>咽部 1无充血 2充血 3淋巴滤泡增生</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeLeft",
            "description": "<p>左眼</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeRight",
            "description": "<p>右眼</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeCorrectLeft",
            "description": "<p>矫正视力_左</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeCorrectRight",
            "description": "<p>矫正视力_右</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "ear",
            "description": "<p>听力1听见 2听不清或无法听见</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sport",
            "description": "<p>运动功能 1可顺利完成  2无法独立完成任何一个动作</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeDown",
            "description": "<p>眼 底1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "skin",
            "description": "<p>皮肤 1正常  2 潮红 3苍白 4发绀 5黄染  6色素沉着 7其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "skinOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sclera",
            "description": "<p>巩     膜 1正常  2 黄染 3充血 4其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "scleraOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lymph",
            "description": "<p>淋巴结 1未触及   2锁骨上   3腋窝   4其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lymphOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lungTzx",
            "description": "<p>桶状胸：1否　　2是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lungHxy",
            "description": "<p>呼吸音：1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lungKy",
            "description": "<p>罗  音：1无 　 2干罗音  3湿罗音 4其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lungKyOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heart",
            "description": "<p>心率：  次/分钟</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heartRhythm",
            "description": "<p>心律：1齐  2不齐  3绝对不齐</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heartNoise",
            "description": "<p>杂音：1无     2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenYt",
            "description": "<p>腹部压痛：1无  2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenBk",
            "description": "<p>腹部包块：1无  2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenGd",
            "description": "<p>腹部 肝大：1无  2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenPd",
            "description": "<p>脾大：1无  2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "abdomenYdxzy",
            "description": "<p>移动性浊音：1无  2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "legs",
            "description": "<p>下肢水肿 1无   2单侧   3双侧不对称   4双侧对称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "footArtery",
            "description": "<p>足背动脉搏动* 1未触及2触及双侧对称3触及左侧弱或消失4触及右侧弱或消失     □</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anus",
            "description": "<p>肛门指诊* 1未及异常 2 触痛　  3包块　   4前列腺异常 5其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "anusOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "milk",
            "description": "<p>乳   腺* 1未见异常 2乳房切除 3异常泌乳4乳腺包块 5其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "milkOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "womanWy",
            "description": "<p>外阴 1未见异常   2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "womanYd",
            "description": "<p>阴道 1未见异常   2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "womanGj",
            "description": "<p>宫颈 1未见异常   2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "womanGt",
            "description": "<p>宫体 1未见异常   2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "womanFj",
            "description": "<p>附件 1未见异常   2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "ctOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutineXhdb",
            "description": "<p>血红蛋白</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutineBxb",
            "description": "<p>白细胞</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutineXxb",
            "description": "<p>血小板</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodRoutineOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineNdb",
            "description": "<p>尿蛋白</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineNt",
            "description": "<p>尿糖</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineNtt",
            "description": "<p>尿酮体</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineNqx",
            "description": "<p>尿潜血</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "urineRoutineOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "emptyBloodMmol",
            "description": "<p>空腹血糖</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "emptyBloodMg",
            "description": "<p>空腹血糖</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "electrocardiogram",
            "description": "<p>心电图* 1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "microalbuminuria",
            "description": "<p>尿微量白蛋白 mg/dL</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodInStool",
            "description": "<p>大便潜血* 1阴性  2阳性</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hemoglobin",
            "description": "<p>糖化血红蛋白</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hepatitis",
            "description": "<p>乙型肝炎 表面抗原* 1阴性  2阳性</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverXqgbzam",
            "description": "<p>血清谷丙转氨酶 U/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverXqgczam",
            "description": "<p>血清谷草转氨酶 U/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverXdb",
            "description": "<p>白蛋白  g/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverZdhs",
            "description": "<p>总胆红素 μmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "liverJhdhs",
            "description": "<p>结合胆红素 结合胆红素</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyXqjg",
            "description": "<p>血清肌酐</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyXns",
            "description": "<p>血尿素         mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyXjnd",
            "description": "<p>血钾浓度         mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyXnnd",
            "description": "<p>血钠浓度         mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodLipidZdgc",
            "description": "<p>总胆固醇      mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodLipidGysz",
            "description": "<p>甘油三酯       mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodLipidXqdmd",
            "description": "<p>血清低密度脂蛋白胆固醇          mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodLipidXqgmd",
            "description": "<p>血清高密度脂蛋白胆固醇          mmol/L</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chestX",
            "description": "<p>胸部X线片*1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bmode",
            "description": "<p>腹部B超      1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bother",
            "description": "<p>其他          1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "cervix",
            "description": "<p>宫颈涂片* 1正常  2异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fzjcOther",
            "description": "<p>辅助检查 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "cerebrovascularDis",
            "description": "<p>脑血管疾病 1未发现  2缺血性卒中  3脑出血 4蛛网膜下腔出血  5短暂性脑缺血发作</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "cerebrovascularOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyDis",
            "description": "<p>1未发现  2糖尿病肾病  3肾功能衰竭  4急性肾炎  5慢性肾炎   6,其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kidneyOther",
            "description": "<p>肾脏疾病 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heartDis",
            "description": "<p>心脏疾病 1未发现  2心肌梗死  3心绞痛  4冠状动脉血运重建 5充血性心力衰竭 6 心前区疼痛 7 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heartOther",
            "description": "<p>心脏疾病 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodVesselDis",
            "description": "<p>血管疾病 1未发现 2夹层动脉瘤  3动脉闭塞性疾病 4其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodVesselOther",
            "description": "<p>血管疾病 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeDis",
            "description": "<p>眼部疾病 1未发现 2视网膜出血或渗出 3视乳头水肿 4白内障 5 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "eyeOther",
            "description": "<p>眼部疾病 其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nerveDis",
            "description": "<p>神经系统疾病 1未发现 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherDis",
            "description": "<p>其他系统疾病 1未发现 2有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationStime1",
            "description": "<p>入院日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationEtime1",
            "description": "<p>出院日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationReason1",
            "description": "<p>原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationInstitution1",
            "description": "<p>医疗机构名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationCard1",
            "description": "<p>病案号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationStime2",
            "description": "<p>入院日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationEtime2",
            "description": "<p>出院日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationReason2",
            "description": "<p>原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationInstitution2",
            "description": "<p>医疗机构名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalizationCard2",
            "description": "<p>病案号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryStime1",
            "description": "<p>建床日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryEtime1",
            "description": "<p>撤床日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryReason1",
            "description": "<p>原 因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryInstitution1",
            "description": "<p>医疗机构名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryCard1",
            "description": "<p>病案号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryStime2",
            "description": "<p>建床日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryEtime2",
            "description": "<p>撤床日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryReason2",
            "description": "<p>原 因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryInstitution2",
            "description": "<p>医疗机构名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "familyHistoryCard2",
            "description": "<p>病案号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName1",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserUsage1",
            "description": "<p>用法</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserConsumption1",
            "description": "<p>用量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserTime1",
            "description": "<p>用药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserStatus1",
            "description": "<p>服药依从性 1规律　2间断　3不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName2",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserUsage2",
            "description": "<p>用法</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserConsumption2",
            "description": "<p>用量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserTime2",
            "description": "<p>用药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserStatus2",
            "description": "<p>服药依从性 1规律　2间断　3不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName3",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserUsage3",
            "description": "<p>用法</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserConsumption3",
            "description": "<p>用量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserTime3",
            "description": "<p>用药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserStatus3",
            "description": "<p>服药依从性 1规律　2间断　3不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName4",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserUsage4",
            "description": "<p>用法</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserConsumption4",
            "description": "<p>用量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserTime4",
            "description": "<p>用药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserStatus4",
            "description": "<p>服药依从性 1规律　2间断　3不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName5",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserUsage5",
            "description": "<p>用法</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserConsumption5",
            "description": "<p>用量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserTime5",
            "description": "<p>用药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserStatus5",
            "description": "<p>服药依从性 1规律　2间断　3不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName6",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserUsage6",
            "description": "<p>用法</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserConsumption6",
            "description": "<p>用量</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserTime6",
            "description": "<p>用药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUserStatus6",
            "description": "<p>服药依从性 1规律　2间断　3不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationName1",
            "description": "<p>非免疫名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationTime1",
            "description": "<p>接种日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationJg1",
            "description": "<p>接种机构</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationName2",
            "description": "<p>非免疫名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationTime2",
            "description": "<p>接种日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationJg2",
            "description": "<p>接种机构</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationName3",
            "description": "<p>非免疫名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationTime3",
            "description": "<p>接种日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nonImmunizationJg3",
            "description": "<p>接种机构</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthVal",
            "description": "<p>健康评价 1体检无异常    2有异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthException1",
            "description": "<p>异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthException2",
            "description": "<p>异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthException3",
            "description": "<p>异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthException4",
            "description": "<p>异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthException5",
            "description": "<p>异常</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "healthGuidance",
            "description": "<p>健康指导 1纳入慢性病患者健康管理 2建议复查 3建议转诊</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "riskFactors",
            "description": "<p>危险因素控制 1戒烟    2健康饮酒   3饮食   4锻炼 5减体重（目标              Kg）    6建议接种疫苗               7其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "riskFactorsKg",
            "description": "<p>目标体重</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "riskFactorsOther",
            "description": "<p>其他</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "03_HealthExamination"
  },
  {
    "group": "03_UserInfo",
    "type": "POST",
    "url": "userBase",
    "title": "01、用户基本信息",
    "description": "<p>描述：包含于第三版个人基本信息表、以及签约相关信息</p>",
    "version": "1.0.0",
    "name": "userBase_01_______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>现住址</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "regAddress",
            "description": "<p>户籍地址</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>本人电话)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "villageName",
            "description": "<p>村/小区名称(村（居）委会名称)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "townName",
            "description": "<p>乡/镇名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "organizationUid",
            "description": "<p>建档单位(医生所在单位)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "organizationName",
            "description": "<p>建档单位名称(医生所在单位)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorName",
            "description": "<p>责任医生</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "recordDate",
            "description": "<p>建档日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nationCd",
            "description": "<p>民族\t\t01汉族,02蒙古族,03回族,04藏族,05维吾尔族,06苗族,07彝族,08壮族,09布依族,10朝鲜族,11满族,12侗族,13瑶族,14白族,15土家族,16哈尼族,17哈萨克族,18傣族,19黎族,20傈僳族,21佤族,22畲族,23高山族,24拉祜族,25水族,26东乡族,27纳西族,28景颇族,29柯尔克孜族,30土族,31达斡尔族,32仫佬族,33羌族,34布朗族,35撒拉族,36毛南族,37仡佬族,38锡伯族,39阿昌族,40普米族,41塔吉克族,42怒族,43乌孜别克族,44俄罗斯族,45鄂温克族,46崩龙族,47保安族,48裕固族,49京族,50塔塔尔族,51独龙族,52鄂伦春族,53赫哲族,54门巴族,55珞巴族,56基诺族,97其他,98外国血统中国籍人士</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nationName",
            "description": "<p>民族名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCardCd",
            "description": "<p>身份证件-类别代码\t  01居民身份证,02居民户口簿,03护照,04军官证,05驾驶证,06港澳居民来往内地通行证,07台湾居民来往内地通行证,99其他法定有效证件</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证件-号码</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "birthDate",
            "description": "<p>出生日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "genderCd",
            "description": "<p>性别 \t1男性,2女性,9未说明的性别,0未知的性别</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "genderName",
            "description": "<p>性别名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "wokingUnitName",
            "description": "<p>工作单位名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "linkman",
            "description": "<p>联系人姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "linkmanPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "adRegisterMark",
            "description": "<p>常住类型 0户籍 1 非户籍</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "aboCd",
            "description": "<p>ABO血型\t\t1:A型,2:B型,3:O型,4:AB型,5:不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "aboName",
            "description": "<p>ABO血型名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "rhCd",
            "description": "<p>RH血型 0不是 1是 99不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "rhName",
            "description": "<p>RH血型名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "edBgCd",
            "description": "<p>文化程度\t\t1:研究生,2:大学本科,3:大学专科和专科学校,4:中等专业学校,5:技工学校,6:高中,7:初中,8:小学,9:文盲或半文盲,10:不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "edBgName",
            "description": "<p>文化程度名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "occuTypeCd",
            "description": "<p>职业\t\t0:国家机关、党群组织、企业、事业单位负责人,1:专业技术人员,2:办事人员和有关人员,3:商业、服务业人员,4:农、林、牧、渔水利业生产人员,5:生产、运输设备操作人员及有关人员,6:军人,7:不便分类的其他从业人员,8:无职业</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "occuTypeName",
            "description": "<p>职业名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "maritalStCd",
            "description": "<p>婚姻情况\t\t1:未婚,2:已婚,3:丧偶,4:离婚,5:未说明的婚姻状况</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "maritalStName",
            "description": "<p>婚姻情况名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signBeginDate",
            "description": "<p>签约日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signEndDate",
            "description": "<p>签约到期日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicareWorkerBase",
            "description": "<p>城镇职工基本医疗保险 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicareDenizenBase",
            "description": "<p>城镇居民基本医疗保险 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicareCountryside",
            "description": "<p>新型农村合作医疗 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicarePoor",
            "description": "<p>贫因救助 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicareBusinessMedicare",
            "description": "<p>商业医疗保险 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicarePublic",
            "description": "<p>全公费 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicarePrivate",
            "description": "<p>全自费 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicareOther",
            "description": "<p>其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "signType",
            "description": "<p>签约状态 0待签约 1已签约 9已过期</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "03_UserInfo"
  },
  {
    "group": "03_UserInfo",
    "type": "POST",
    "url": "userInfo",
    "title": "02、用户信息",
    "description": "<p>描述：包含于第三版个人基本信息表</p>",
    "version": "1.0.0",
    "name": "userInfo_02_____",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isAllergy",
            "description": "<p>是否有药物过敏 1有 0没有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "allergyQingmeisu",
            "description": "<p>青霉素 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "allergyHuangan",
            "description": "<p>磺胺 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "allergyLianmeisu",
            "description": "<p>链霉素 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "allergyOther",
            "description": "<p>其他过敏</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isExpose",
            "description": "<p>是否有暴露史 1有 0没有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "exposerChemistry",
            "description": "<p>化学品 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "exposerNarcotics",
            "description": "<p>有毒品 1有 0没有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "exposerRadiation",
            "description": "<p>射线 1有 0没有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isDisease",
            "description": "<p>疾病史标志 0否 1是\t\t01:无,02:高血压,03:糖尿病,04:冠心病,05:慢性阻塞性肺疾病,06:恶性肿瘤,07:脑卒中,08:严重精神障碍,09:肺结核,10:肝炎,11:先天畸形,12:职业病,13:肾脏疾病,14:贫血,98:其他法定传染病,99:其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isOperation",
            "description": "<p>手术标志 0否 1是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "operationReason1",
            "description": "<p>手术原因1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "operationDate1",
            "description": "<p>手术时间1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "operationReason2",
            "description": "<p>手术原因2</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "operationDate2",
            "description": "<p>手术时间2</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isTrauma",
            "description": "<p>外伤标志 0否 1是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "traumaReason1",
            "description": "<p>外伤原因1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "traumaDate1",
            "description": "<p>外伤时间1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "traumaReason2",
            "description": "<p>外伤原因2</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "traumaDate2",
            "description": "<p>外伤时间2</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isTransfusion",
            "description": "<p>输血标志 0否 1是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "transfusionReason1",
            "description": "<p>输血原因1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "transfusionDate1",
            "description": "<p>输血时间1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "transfusionReason2",
            "description": "<p>输血原因2</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "transfusionDate2",
            "description": "<p>输血时间2</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isFamilyDisease",
            "description": "<p>家族疾病史标志 0否 1是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isGenetic",
            "description": "<p>遗传病史标志 0否 1是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "geneticName",
            "description": "<p>遗传病名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "isDisability",
            "description": "<p>无残疾 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "disabilityVision",
            "description": "<p>视力残疾 1是 0 否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "disabilityHearing",
            "description": "<p>听力残疾 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "disabilityLanguage",
            "description": "<p>语言残疾 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "disabilityLimbs",
            "description": "<p>肢体残疾 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "disabilityIntelligence",
            "description": "<p>智力残疾 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "disabilitySpirit",
            "description": "<p>精神残疾 1是 0否</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "disabilityOther",
            "description": "<p>其他残疾</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "kitchenExhaustFacCd",
            "description": "<p>厨房排风设施代码\t1:油烟机,2:换气扇,3:烟囱,9:其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "fuelTypeCd",
            "description": "<p>燃料类型代码\t1:液化气,2:煤,3:天然气,4:沼气,5:柴火,9:其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "waterTypeCd",
            "description": "<p>饮水类型代码\t1:自来水,2:经净化过滤的水,3:井水,4:河湖水,5:塘水,9:其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "toiletTypeCd",
            "description": "<p>厕所类型代码\t1:卫生厕所,2:一个或二格粪池式,3:马桶,4:露天粪坑,5:简易棚厕,9:其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "livestockTypeCd",
            "description": "<p>禽畜栏类型代码\t1:无,2:单设,3:室内,4:室外</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "03_UserInfo"
  },
  {
    "group": "04_CoronaryDisease",
    "type": "POST",
    "url": "coronaryDisease",
    "title": "01、冠心病随访",
    "description": "<p>描述：慢病管理，未定，此功能为居民健康档案信息卡与心电体检等定制随访功能</p>",
    "version": "1.0.0",
    "name": "coronaryDisease_01______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate1st",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitMethod1st",
            "description": "<p>随访方式(1门诊2家庭3电话)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptom1st",
            "description": "<p>症状(1无症状2心慌3胸口闷痛4心绞痛5呼吸困难6心悸胸闷7喘憋8不能平卧9下肢水肿10其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomOther1st",
            "description": "<p>症状&lt;1&gt;(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureHigh1st",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureLow1st",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight1st",
            "description": "<p>体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "firstHeartWeakened1st",
            "description": "<p>第一心音是否减弱(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "arrhythmia1st",
            "description": "<p>心律失常是否闻及早搏心房纤颤(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "heartShoulder1st",
            "description": "<p>心肩部是否闻及奔马律(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "smokeDrinkNotice1st",
            "description": "<p>烟酒注意事项</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sportNotice1st",
            "description": "<p>运动注意事项</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "saltIntakeNotice1st",
            "description": "<p>摄盐注意事项</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "followMedicalPractice1st",
            "description": "<p>遵医行为(1良好 2一般 3差)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "auxiliaryExamination1st",
            "description": "<p>辅助检查</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "symptomsAreRelieved1st",
            "description": "<p>症状出现后服用硝酸甘油后是否缓解(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "complianceMedication1st",
            "description": "<p>服药依从性(1规律 2间断 3不服药)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicalSideEffects1st",
            "description": "<p>药物不良反应(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffectsAdd1st",
            "description": "<p>药物不良反应(补充)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitSort1st",
            "description": "<p>此次随访分类(1控制满意 2控制不满意 3不良反应 4并发症)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug1Name1st",
            "description": "<p>药物1名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug2Name1st",
            "description": "<p>药物2名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug3Name1st",
            "description": "<p>药物3名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugOtherName1st",
            "description": "<p>其他药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug1Times1st",
            "description": "<p>药物1每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug2Times1st",
            "description": "<p>药物2每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug3Times1st",
            "description": "<p>药物3每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugOtherTimes1st",
            "description": "<p>其他药物每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug1Amount1st",
            "description": "<p>药物1用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug2Amount1st",
            "description": "<p>药物2用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug3Amount1st",
            "description": "<p>药物3用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugOtherAmount1st",
            "description": "<p>其他药物用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drug1Unit1st",
            "description": "<p>药物1单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drug2Unit1st",
            "description": "<p>药物2单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drug3Unit1st",
            "description": "<p>药物3单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drugOtherUnit1st",
            "description": "<p>其他药物单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReason1st",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments1st",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate1st",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng1st",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat1st",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne1st",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo1st",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "04_CoronaryDisease"
  },
  {
    "group": "05_Mental",
    "type": "POST",
    "url": "submitMentalDisorderFollow",
    "title": "01、严重精神障碍患者随访服务记录表",
    "version": "1.0.0",
    "name": "submitMentalDisorderFollow_01________________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>用户id，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>经度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>随访时间，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitNethod",
            "description": "<p>随访方式，必填，1、门诊，2、家庭，3、电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "noVisitReason",
            "description": "<p>失访原因，1、外出打工，2、迁居他处，3、走失，4、连续3次未到访，5、其他，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "noVisitReasonOther",
            "description": "<p>失访其它原因，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dateOfDeath",
            "description": "<p>死亡日期，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "causeOfDeath",
            "description": "<p>死亡原因，选填，1 躯体疾病  □2 自杀  3 他杀  4 意外  5精神疾病相关并发症  6其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "causeOfDeathDisease",
            "description": "<p>躯体疾病，选填，1、传染病和寄生虫病，2、肿瘤，3、心脏病，4、脑血管病，5、呼吸系统疾病，6、消化系统疾病，7、其他疾病，8、不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "causeOfDeathOther",
            "description": "<p>其它疾病，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "riskAssessment",
            "description": "<p>危险性评估，0、0级，1、1级，2、2级，3、3级，4、4级，5、5级</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSymptoms",
            "description": "<p>目前症状，例如:1,2,3 1、幻觉，2、交流困难，3、猜疑，4、喜怒无常，5、行为怪异，6、兴奋话多，7、伤人毁物，8、悲观厌世，9、无故外走，10、自语自笑，11、孤僻懒散，12、其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSymptomsOther",
            "description": "<p>目前症状其他原因，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "selfKnowledge",
            "description": "<p>自知力，1、自知力完全，2、自知力不全，3、自知力缺失</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sleepSituation",
            "description": "<p>睡眠情况，1、良好，2、一般，3、较差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dietSituation",
            "description": "<p>饮食情况，1、良好，2、一般，3、较差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "personalArrangeThings",
            "description": "<p>个人生活料理，1、良好，2、一般，3、较差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "housework",
            "description": "<p>家务劳动，1、良好，2、一般，3、较差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "productiveLaborAndWork",
            "description": "<p>生产劳动及工作，1、良好，2、一般，3、较差，9、此项不适用</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "theAbilityToLearn",
            "description": "<p>学习能力，1、良好，2、一般，3、较差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "socialInterpersonalCommunication",
            "description": "<p>社会人际交往，1、良好，2、一般，3、较差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dangerousBehavior",
            "description": "<p>危险行为，选填 1有2无</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mildTrouble",
            "description": "<p>轻度滋事（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "accident",
            "description": "<p>肇事（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "causeTrouble",
            "description": "<p>肇祸（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherHarmfulBehavior",
            "description": "<p>其他危害行为（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "selfInjury",
            "description": "<p>自伤（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "suicideAttempt",
            "description": "<p>自杀未遂（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lockSituation",
            "description": "<p>两次随访期间关锁情况，1无关锁   2关锁  3关锁已解除</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hospitalization",
            "description": "<p>两次随访期间住院情况，0、未住院，1、目前正在住院，2、曾住院 现未住院</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lastDischargeTime",
            "description": "<p>末次出院时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "laboratoryExamination",
            "description": "<p>实验室检查，1、有，2、无</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugCompliance",
            "description": "<p>服药依从性，1、按医嘱规律用药，2、间断用药，3、不用药，4、医嘱勿需用药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffects",
            "description": "<p>药物不良反应，1、无，2、有，9、此项不适用</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应情况</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "treatmentEffect",
            "description": "<p>治疗效果，1、痊愈，2、好转，3、无变化，4、加重，9、此项不适用</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referral",
            "description": "<p>是否转诊，1、否，2、是</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments",
            "description": "<p>转诊机构及科别</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "rehabilitationMeasures",
            "description": "<p>康复措施，选填，1、生活劳动能力，2、职业训练，3、学习能力，4、社会交往，5、其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "rehabilitationMeasuresOther",
            "description": "<p>康复措施其他，，选填 *  @apiParam (功能请求参数) {String} drugUseName1 药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName1",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes1",
            "description": "<p>每日次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount1",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName2",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes2",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount2",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName3",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes3",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount3",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit1",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit2",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit3",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugName1",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugTimes1",
            "description": "<p>每日次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugAmount1",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugName2",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugTimes2",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugAmount2",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugName3",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugTimes3",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugAmount3",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugUseUnit1",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guideDrugUseUnit2",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitClassification",
            "description": "<p>本次随访分类，1、不稳定，2、基本稳定，3、稳定</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次随访日期，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2，选填</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "05_Mental"
  },
  {
    "group": "05_Mental",
    "type": "POST",
    "url": "submitMentalDisorderInformation",
    "title": "02、严重精神障碍患者个人信息补充表",
    "version": "1.0.0",
    "name": "submitMentalDisorderInformation_02________________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>用户id，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>经度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guardianName",
            "description": "<p>监护人姓名，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "relationShip",
            "description": "<p>与患者关系，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guardianAddress",
            "description": "<p>监护人地址，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "guardianPhone",
            "description": "<p>监护人电话，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "communityCont",
            "description": "<p>辖区村（居）委会联系人，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "communityPhone",
            "description": "<p>辖区村（居）委会电话，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "houseHolds",
            "description": "<p>户别，必填，1、城镇，2、农村</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "employmentSituation",
            "description": "<p>就业情况，必填，1、在岗工人，2、在岗管理者，3、农民，4、下岗或无业，5、在校学生，6、退休，7、专业技术人员，8、其他，9、不详</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "employmentSituationOther",
            "description": "<p>就业情况其他，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "managementParticipation",
            "description": "<p>是否同意参加管理，必填，1、同意，0、不同意</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>知情同意签字，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signatureDate",
            "description": "<p>知情同意签字时间，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "firstFallIllTime",
            "description": "<p>初次病发时间，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "previousMajorSymptoms",
            "description": "<p>既往主要症状，例如1,2,3 选填，1幻觉 2交流困难 3猜疑 4喜怒无常  5行为怪异  6兴奋话多7伤人毁物 8悲观厌世  9无故外走 10自语自笑  11孤僻懒散 12其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "previousMajorSymptomsOther",
            "description": "<p>既往主要症状其他，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pastLockSituation",
            "description": "<p>既往关锁情况，必填，1、无关锁，2、关锁，3、关锁已解除</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pastOutpatientTreatment",
            "description": "<p>既往门诊治疗，必填，1、未治，2、间断门诊治疗，3、连续门诊治疗</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "firstAntipsychoticTreatmentTime",
            "description": "<p>首次抗精神药治疗时间 ，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "psychiatricSpecialistInGeneralHospital",
            "description": "<p>曾住精神专科医院/综合医院精神专科（次），必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "diagnosis",
            "description": "<p>诊断，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "diagnosisHospital",
            "description": "<p>确诊医院，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "diagnosisTime",
            "description": "<p>确诊时间，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "theLatestTreatmentEffect",
            "description": "<p>最近一次治疗效果，1、临床痊愈，2、好转，3、无变化，4、加重</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dangerousBehavior",
            "description": "<p>危险行为，选填 1有2无</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "mildTrouble",
            "description": "<p>轻度滋事（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "accident",
            "description": "<p>肇事（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "causeTrouble",
            "description": "<p>肇祸（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherHarmfulBehavior",
            "description": "<p>其他危害行为（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "selfInjury",
            "description": "<p>自伤（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "suicideAttempt",
            "description": "<p>自杀未遂（次）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "economicSituation",
            "description": "<p>经济状况，1、贫穷，在当地贫困线以下，2、非贫困</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "adviceSpecialist",
            "description": "<p>专科医生的意见(1有 2无)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "adviceSpecialistContext",
            "description": "<p>专科医生的意见</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>随访时间，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2，选填</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "05_Mental"
  },
  {
    "group": "06_OldHealthy",
    "type": "POST",
    "url": "oldHealthy",
    "title": "01、老年人中医药健康管理",
    "version": "1.0.0",
    "name": "oldHealthy_01___________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "fullOfEnergy",
            "description": "<p>1精力充沛(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "easyToFatigue",
            "description": "<p>2容易疲乏(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "shortnessOfBreath",
            "description": "<p>3呼吸短促(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "noEnergyToSpeak",
            "description": "<p>4话没力气(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "feelUnhappy",
            "description": "<p>5心情不愉快(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "anxiety",
            "description": "<p>6焦虑不安(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "feelLonely",
            "description": "<p>7感到孤独(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "easyToFeelScared",
            "description": "<p>8感到害怕(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "excessiveBody",
            "description": "<p>9身体超重(1BMI＜24 224≤BMI＜25 325≤BMI＜26 426≤BMI＜28 5BMI≥28)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dryEyes",
            "description": "<p>10眼睛干涩(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "coldHandsAndFeet",
            "description": "<p>11手脚发凉(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "backOrWaistAndKneesCold",
            "description": "<p>12背部或腰膝部怕冷(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "canNotStandTheCold",
            "description": "<p>13受不了寒冷(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "numberOfColdEveryYear",
            "description": "<p>14每年感冒的次数(1一年＜2次 2一年感冒2-4次 3一年感冒5-6次 4一年8次以上 5几乎每月)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "nasalCongestionRunnyNose",
            "description": "<p>15鼻塞、流鼻涕(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "sleepSnoring",
            "description": "<p>16睡眠打鼾(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "easilyAllergic",
            "description": "<p>17容易过敏(1从来没有 2一年1、2次 3一年3、4次 4一年5、6次 5每次遇到上述原因都过敏)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "urticaria",
            "description": "<p>18容易起荨麻疹(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "cymbidiumBruiseSubcutaneousBleeding",
            "description": "<p>19出现青紫瘀斑、皮下出血(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "scratches",
            "description": "<p>20皮肤一抓就红(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dryLipsOrDrySkin",
            "description": "<p>21皮肤或口唇干(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "limbsNumbness",
            "description": "<p>22肢体麻木(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "facialGreasy",
            "description": "<p>23面部油腻(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "brownPatchesOnFace",
            "description": "<p>24面色出现褐色斑块(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "skinEczemaSores",
            "description": "<p>25皮肤湿疹、疮疖(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dryMouthAndThroat",
            "description": "<p>26口干咽燥(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "badBreath",
            "description": "<p>27嘴里有异味(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "abdominalHypertrophy",
            "description": "<p>28腹部肥大(1腹围&lt;80cm，相当于2.4尺 2腹围80-85cm，2.4-2.55尺 3腹围86-90cm，2.56-2.7尺 4腹围1-105cm，2.71-3.15尺 5腹围&gt;105cm或3.15尺)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "afterEatingColdFoodWillBeUncomfortable",
            "description": "<p>29吃喝了凉的后会不舒服(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "stoolSticky",
            "description": "<p>30大便黏滞(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dryStool",
            "description": "<p>31大便干燥(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "thickAndGreasyTongue",
            "description": "<p>32舌苔厚腻(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "sublingualVeinStasisPurpleOrThickening",
            "description": "<p>33舌下静脉瘀紫或增粗(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "resultScore",
            "description": "<p>所有得分</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "spiritWeakScore",
            "description": "<p>气虚质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "spiritWeakRecognition",
            "description": "<p>气虚质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "spiritWeakHealthGuidance",
            "description": "<p>气虚质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "spiritWeakHealthGuidanceOther",
            "description": "<p>气虚质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maleGenitalsWeakScore",
            "description": "<p>阳虚质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "maleGenitalsWeakRecognition",
            "description": "<p>阳虚质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "maleGenitalsWeakHealthGuidance",
            "description": "<p>阳虚质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "maleGenitalsWeakHealthGuidanceOther",
            "description": "<p>阳虚质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "shadeWeakScore",
            "description": "<p>阴虚质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "shadeWeakRecognition",
            "description": "<p>阴虚质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "shadeWeakHealthGuidance",
            "description": "<p>阴虚质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "shadeWeakHealthGuidanceOther",
            "description": "<p>阴虚质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "sputumWetScore",
            "description": "<p>痰湿质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "sputumWetRecognition",
            "description": "<p>痰湿质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sputumWetHealthGuidance",
            "description": "<p>痰湿质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sputumWetHealthGuidanceOther",
            "description": "<p>痰湿质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hotAndHumidScore",
            "description": "<p>湿热质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "hotAndHumidRecognition",
            "description": "<p>湿热质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hotAndHumidHealthGuidance",
            "description": "<p>湿热质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hotAndHumidHealthGuidanceOther",
            "description": "<p>湿热质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodStasisScore",
            "description": "<p>血瘀质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodStasisRecognition",
            "description": "<p>血瘀质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodStasisHealthGuidance",
            "description": "<p>血瘀质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodStasisHealthGuidanceOther",
            "description": "<p>血瘀质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "qiDepressionConstitutionScore",
            "description": "<p>气郁质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "qiDepressionConstitutionRecognition",
            "description": "<p>气郁质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "qiDepressionConstitutionHealthGuidance",
            "description": "<p>气郁质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "qiDepressionConstitutionHealthGuidanceOther",
            "description": "<p>气郁质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "theSpecificEndowmentScore",
            "description": "<p>特禀质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "theSpecificEndowmentRecognition",
            "description": "<p>特禀质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "theSpecificEndowmentHealthGuidance",
            "description": "<p>特禀质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "theSpecificEndowmentHealthGuidanceOther",
            "description": "<p>特禀质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "peacefulScore",
            "description": "<p>平和质(得分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "peacefulRecognition",
            "description": "<p>平和质辨识(1是2倾向是3否)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "peacefulHealthGuidance",
            "description": "<p>平和质保健指导(1情志调摄2饮食调养3起居调摄4运动保健5穴位保健6其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "peacefulHealthGuidanceOther",
            "description": "<p>平和质保健指导(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitTime",
            "description": "<p>填表日期(_年_月_日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature",
            "description": "<p>医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "06_OldHealthy"
  },
  {
    "group": "06_OldHealthy",
    "type": "POST",
    "url": "oldSelf",
    "title": "02、老年人生活自理能力评估",
    "version": "1.0.0",
    "name": "oldSelf_02____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "indentityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "meal",
            "description": "<p>进餐(1独立完成0分 2需要协助，如切碎、搅拌食物等3分 3完全需要帮助5分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "freshening",
            "description": "<p>梳洗(1独立完成0分  2仅洗澡需要协助1分  3在协助下和适当的时间内，能完成部分梳洗活动3分  4完全需要帮助7分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "dressing",
            "description": "<p>穿衣(1独立完成0分 3需要协助，在适当的时间内完成部分穿衣3分 3完全需要帮助5分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "toilet",
            "description": "<p>如厕(1不需协助，可自控0分 2偶尔失禁，但基本上能如厕或使用便具1分 3经常失禁，在很多提示和协助下尚能如厕或使用便具5分 4完全失禁，完全需要帮助10分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "activity",
            "description": "<p>活动(1独立完成所有活动0分 2借助较小的外力或辅助装置能完成站立、行走、上下楼梯等1分 3借助较大的外力才能完成站立、行走，不能上下楼梯5分  4卧床不起，活动完全需要帮助10分)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "totalScore",
            "description": "<p>总得分</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "06_OldHealthy"
  },
  {
    "group": "07_Tuberculosis",
    "type": "POST",
    "url": "firstTuberculosis",
    "title": "01、肺结核第一次入户随访",
    "version": "1.0.0",
    "name": "firstTuberculosis_01___________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitTime",
            "description": "<p>随访时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitMethod",
            "description": "<p>随访方式(1门诊2家庭)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "patientType",
            "description": "<p>患者类型(1初治 2复治)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "mycobecteriumTuberculosis",
            "description": "<p>痰菌情况(1阳性 2阴性 3未查痰)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drugResistance",
            "description": "<p>耐药情况(1耐药 2非耐药 3未检测)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomsAndSigns",
            "description": "<p>症状及体征(0没有症状 1咳嗽咳痰 2低热盗汗 3咯血或血痰 4 胸痛消瘦 5恶心纳差 6头痛失眠 7视物模糊 8皮肤瘙痒、皮疹 9 耳鸣、听力下降 10其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomsAndSignsOther",
            "description": "<p>症状及体征(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chemotherapy",
            "description": "<p>化疗方案</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "chemotherapyUsage",
            "description": "<p>化疗方案用法(1每日 2间歇)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chemotherapyPharmacy",
            "description": "<p>药品剂型(1固定剂量复合制剂 2散装药 3板式组合药 4注射剂 )</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "supervisor",
            "description": "<p>督导人员选择(1医生 2家属 3自服药 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "supervisorOther",
            "description": "<p>督导人员选择(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "independence",
            "description": "<p>单独的居室(1有 2无)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "ventilation",
            "description": "<p>通风情况(1良好 2一般 3差)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "currSmoking",
            "description": "<p>当前吸烟(支/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "currDrinking",
            "description": "<p>当前饮酒(两/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "targetSmoking",
            "description": "<p>目标吸烟(支/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "targetDrinking",
            "description": "<p>目标饮酒(两/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "getMedicinePlace",
            "description": "<p>取药地点</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "getMedicineTime",
            "description": "<p>取药时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "fillInMedicationRecordCard",
            "description": "<p>服药记录卡的填写(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicationAndDrugStorage",
            "description": "<p>服药方法及药品存放(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "tuberculosisTreatment",
            "description": "<p>肺结核治疗疗程(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "irregularMedicationHazards",
            "description": "<p>不规律服药危害(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "adverseReactionsAndTreatment",
            "description": "<p>服药后不良反应及处理(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitingSputumDuringTreatment",
            "description": "<p>治疗期间复诊查痰(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "stickToMedication",
            "description": "<p>外出期间如何坚持服药(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "habitsPrecautions",
            "description": "<p>生活习惯及注意事项(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "closeContactInspection",
            "description": "<p>密切接触者检查(1掌握 2未掌握)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitTime",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature",
            "description": "<p>评估医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "07_Tuberculosis"
  },
  {
    "group": "07_Tuberculosis",
    "type": "POST",
    "url": "tuberculosis",
    "title": "02、肺结核患者随访",
    "version": "1.0.0",
    "name": "tuberculosis_02________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitTime1st",
            "description": "<p>随访时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "treatmentMonth1st",
            "description": "<p>治疗月序(第_月)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "supervisor1st",
            "description": "<p>督导人员选择(1医生 2家属 3自服药 4其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "supervisorOther1st",
            "description": "<p>督导人员选择(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitMethod1st",
            "description": "<p>随访方式(1门诊 2家庭 3电话)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomsAndSigns1st",
            "description": "<p>症状及体征(0没有症状1咳嗽咳痰2低热盗汗3咯血或血痰4胸痛消瘦5恶心纳差6关节疼痛7头痛失眠8视物模糊9皮肤瘙痒、皮疹10耳鸣、听力下降11其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitMethodOther1st",
            "description": "<p>症状及体征(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "currSmoking1st",
            "description": "<p>当前吸烟(支/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "targetSmoking1st",
            "description": "<p>目标吸烟(支/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "currDrinking1st",
            "description": "<p>当前饮酒(两/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "targetDrinking1st",
            "description": "<p>目标饮酒(两/天)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chemotherapy1st",
            "description": "<p>化疗方案</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "chemotherapyUsage1st",
            "description": "<p>化疗方案用法(1每日 2间歇)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "chemotherapyPharmacy1st",
            "description": "<p>药品剂型(1固定剂量复合制剂 2散装药 3板式组合药 4注射剂)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "notTakingMedication1st",
            "description": "<p>漏服药次数(次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicalSideEffects1st",
            "description": "<p>药物不良反应(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffectsAdd1st",
            "description": "<p>药物不良反应(补充)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "complicationsOrComplications1st",
            "description": "<p>并发症或合并症(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "complicationsAdd1st",
            "description": "<p>并发症或合并症(补充)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralClassification1st",
            "description": "<p>转诊科别</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReason1st",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitResult1st",
            "description": "<p>2周内随访结果</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "handlingComments1st",
            "description": "<p>处理意见</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitTime1st",
            "description": "<p>下次随访时间</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorSignature1st",
            "description": "<p>随访医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "stopTreatmentTime",
            "description": "<p>停止治疗时间(_年_月_日)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "stopTreatmentReason",
            "description": "<p>停止治疗原因(1完成疗程 2死亡 3丢失 4转入耐多药治疗)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "shouldVisit",
            "description": "<p>应访视患者_次</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "actualVisit",
            "description": "<p>实际访视_次</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "shouldTakeMedicine",
            "description": "<p>应服药_次</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "actualTakeMedicine",
            "description": "<p>应服药_次</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "takeMedicineRate",
            "description": "<p>服药率_%</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "assessDoctorSignature",
            "description": "<p>评估医生签名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng1st",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat1st",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne1st",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo1st",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "07_Tuberculosis"
  },
  {
    "group": "08_CerebralStroke",
    "type": "POST",
    "url": "cerebralStroke",
    "title": "01、脑卒中患者随访",
    "version": "1.0.0",
    "name": "cerebralStroke_01________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate1st",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitMethod1st",
            "description": "<p>随访方式(1门诊2家庭3电话)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptom1st",
            "description": "<p>症状(1无症状2清醒3嗜睡4昏睡5烦躁6面瘫7不能平卧8下肢水肿9其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomOther1st",
            "description": "<p>症状(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureHigh1st",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "bloodPressureLow1st",
            "description": "<p>血压(mmHg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight1st",
            "description": "<p>体重(kg)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "other1st",
            "description": "<p>体征(其他)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "takeMedicines1st",
            "description": "<p>服用何种药物</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "smokeDrinkNotice1st",
            "description": "<p>烟酒注意事项</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "sportNotice1st",
            "description": "<p>运动注意事项</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "saltIntakeNotice1st",
            "description": "<p>摄盐注意事项</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "psychologicalAdjustment1st",
            "description": "<p>心理调整(1良好 2一般 3差)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "followMedicalPractice1st",
            "description": "<p>遵医行为(1良好 2一般 3差)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "auxiliaryExamination1st",
            "description": "<p>辅助检查</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "complianceMedication1st",
            "description": "<p>服药依从性(1规律 2间断 3不服药)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "medicalSideEffects1st",
            "description": "<p>药物不良反应(1无 2有)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffectsAdd1st",
            "description": "<p>药物不良反应(补充)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "visitSort1st",
            "description": "<p>此次随访分类(1控制满意 2控制不满意 3不良反应 4并发症)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug1Name1st",
            "description": "<p>药物1名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug2Name1st",
            "description": "<p>药物2名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug3Name1st",
            "description": "<p>药物3名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugOtherName1st",
            "description": "<p>其他药物名称</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug1Times1st",
            "description": "<p>药物1每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug2Times1st",
            "description": "<p>药物2每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug3Times1st",
            "description": "<p>药物3每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugOtherTimes1st",
            "description": "<p>其他药物每日用药次数(每日_次)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug1Amount1st",
            "description": "<p>药物1用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug2Amount1st",
            "description": "<p>药物2用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drug3Amount1st",
            "description": "<p>药物3用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugOtherAmount1st",
            "description": "<p>其他药物用药量(每次_)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drug1Unit1st",
            "description": "<p>药物1单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drug2Unit1st",
            "description": "<p>药物2单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drug3Unit1st",
            "description": "<p>药物3单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "int",
            "optional": false,
            "field": "drugOtherUnit1st",
            "description": "<p>其他药物单位(1mg 2剂 3片 4丸 5粒 6袋 7支)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments1st",
            "description": "<p>机构及科室</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate1st",
            "description": "<p>下次随访日期</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng1st",
            "description": "<p>经度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat1st",
            "description": "<p>纬度</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne1st",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo1st",
            "description": "<p>医生用户合照2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"success\",\n    \"data\": {\n\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "08_CerebralStroke"
  },
  {
    "group": "09_VisitDiabetes2",
    "type": "POST",
    "url": "submitDiabetesFollow",
    "title": "01、糖尿病患者随访记录",
    "version": "1.0.0",
    "name": "submitDiabetesFollow_01__________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>用户id，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>经度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>随访时间，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitMethod",
            "description": "<p>随访方式，必填，1、门诊，2、家庭，3、电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptom",
            "description": "<p>症状，选填，如1,2,3，1 无症状、2 多饮、3 多食、4 多尿、5 视力模糊、6 感染、7 手脚麻木、8 下肢浮肿、9 体重明显下降</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomOther",
            "description": "<p>症状，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodPressureHigh",
            "description": "<p>血压高压，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodPressureLow",
            "description": "<p>血压低压，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weightNext",
            "description": "<p>目标体重，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身高，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "physiqueExponent",
            "description": "<p>体脂指数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "physiqueExponentNext",
            "description": "<p>目标体脂指数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dorsalarteryoffootBeating",
            "description": "<p>足背动脉搏动，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dorsalarteryoffootBeatingLeft",
            "description": "<p>足背动脉搏动左侧，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "dorsalarteryoffootBeatingRight",
            "description": "<p>足背动脉搏动右侧，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signOthor",
            "description": "<p>其他，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSmokingAmount",
            "description": "<p>日吸烟量，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSmokingAmount",
            "description": "<p>目标日吸烟量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currDrinking",
            "description": "<p>日饮酒量，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetDrinkingAmount",
            "description": "<p>目标日饮酒量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSportTimes",
            "description": "<p>运动（每次几分钟），必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSportAmount",
            "description": "<p>运动（每周几次），必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSportTimes",
            "description": "<p>目标运动（每次几分钟），选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSportAmount",
            "description": "<p>目标运动（每周几次），选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "stapleFood",
            "description": "<p>主食（克/天），必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "stapleFoodNext",
            "description": "<p>目标主食（克/天），选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "psychologicalAdjustment",
            "description": "<p>心理调整，必填1良好 2一般 3差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followMedicalPractice",
            "description": "<p>遵医行为，1良好 2一般 3差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodSugar",
            "description": "<p>空腹血糖值mmol/L，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hba1c",
            "description": "<p>糖化血红蛋白，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "checkDate",
            "description": "<p>检查日期，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "auxiliaryExamination",
            "description": "<p>其它检查，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "complianceMedication",
            "description": "<p>服药依从性，1、规律，2、间断，3、不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffects",
            "description": "<p>药物不良反应，1、无，2、有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffectsAdd",
            "description": "<p>药物不良反应描述</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "hypoglycemicReaction",
            "description": "<p>低血糖反应，1、无，2、偶尔，3、频繁</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitClassification",
            "description": "<p>此次随访分类</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName1",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes1",
            "description": "<p>每日次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount1",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName2",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes2",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount2",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName3",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes3",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount3",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit1",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit2",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit3",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "insulinName",
            "description": "<p>胰岛素种类，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "insulinUse",
            "description": "<p>用量和用法，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments",
            "description": "<p>转诊机构及科别</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次随访日期，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2，选填</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "09_VisitDiabetes2"
  },
  {
    "group": "10_Hypertension",
    "type": "POST",
    "url": "submitHypertensionFollow",
    "title": "01、高血压患者随访记录",
    "version": "1.0.0",
    "name": "submitHypertensionFollow_01__________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>用户id，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>经度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "lng",
            "description": "<p>纬度，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>随访时间，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitMethod",
            "description": "<p>随访方式，必填，1、门诊，2、家庭，3、电话</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptom",
            "description": "<p>症状，必填，如1,2,3 ，1无症状  2头痛头晕  3恶心呕吐  4眼花耳鸣   5呼吸困难  6心悸胸闷  7鼻衄出血不止 8四肢发麻   9下肢水肿</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "symptomOther",
            "description": "<p>症状其他，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodPressureHigh",
            "description": "<p>血压高压，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "bloodPressureLow",
            "description": "<p>血压低压，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "weightNext",
            "description": "<p>目标体重，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身高，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "physiqueExponent",
            "description": "<p>体脂指数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "physiqueExponentNext",
            "description": "<p>目标体脂指数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "heartRate",
            "description": "<p>体征心率（次/分钟）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signOthor",
            "description": "<p>体征其他</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSmokingAmount",
            "description": "<p>日吸烟量，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSmokingAmount",
            "description": "<p>目标日吸烟量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currDrinkingAmount",
            "description": "<p>日饮酒量，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetDrinkingAmount",
            "description": "<p>目标日饮酒量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSportTimes",
            "description": "<p>运动（每次几分钟），必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSportAmount",
            "description": "<p>运动（每周几次），必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSportTimes",
            "description": "<p>目标运动（每次几分钟），选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSportAmount",
            "description": "<p>目标运动（每周几次），选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currSaltIntake",
            "description": "<p>摄盐情况，1、轻，2、中，3、重</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "targetSaltIntak",
            "description": "<p>摄盐情况，1、轻，2、中，3、重</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "psychologicalAdjustment",
            "description": "<p>心理调整，1良好 2一般 3差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followMedicalPractice",
            "description": "<p>遵医行为，1良好 2一般 3差</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "accessoryExamination",
            "description": "<p>辅助检查</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "complianceMedication",
            "description": "<p>服药依从性，1、规律，2、间断，3、不服药</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "medicalSideEffects",
            "description": "<p>药物不良反应 1、无，2、有</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "visitClassification",
            "description": "<p>此次随访分类，1、控制满意，2、控制不满意，3、不良反应，4、并发症</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName1",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes1",
            "description": "<p>每日次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount1",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName2",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes2",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount2",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseName3",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseTimes3",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseAmount3",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherDrugUseName4",
            "description": "<p>药物名称，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherDrugUseTimes4",
            "description": "<p>用要次数，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherDrugUseAmount4",
            "description": "<p>每次用量，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit1",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit2",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "drugUseUnit3",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "otherDrugUseUnit4",
            "description": "<p>用药单位(1mg 2剂 3片 4丸 5粒 6袋 7支)，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "agenciesAndDepartments",
            "description": "<p>转诊机构及科别</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次随访日期，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureOne",
            "description": "<p>医生用户合照1，选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pictureTwo",
            "description": "<p>医生用户合照2，选填</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {}\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "10_Hypertension"
  },
  {
    "group": "11_ConsultationRecord_______api__POST__consultationRecord_01_____________apiVersion_1_0_0_______apiName_consultationRecord_01__________________apiParam___________String__name__________apiParam___________String__identityCard_______________apiParam___________String__reason____________apiParam___________String__consultationOpinion____________apiParam___________String__organizationName________________apiParam___________String__doctorSignature____________apiParam___________String__date_______________apiSuccessExample__JSON________________________errcode___200________errmsg___success_________data__________________________",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "11_ConsultationRecord_______api__POST__consultationRecord_01_____________apiVersion_1_0_0_______apiName_consultationRecord_01__________________apiParam___________String__name__________apiParam___________String__identityCard_______________apiParam___________String__reason____________apiParam___________String__consultationOpinion____________apiParam___________String__organizationName________________apiParam___________String__doctorSignature____________apiParam___________String__date_______________apiSuccessExample__JSON________________________errcode___200________errmsg___success_________data__________________________",
    "name": ""
  },
  {
    "group": "11_Reception_______api__POST__reception_03_____________apiVersion_1_0_0_______apiName_reception_03__________________apiParam___________String__name__________apiParam___________String__identityCard_______________apiParam___________String__subjectiveInformation________________apiParam___________String__objectiveData________________apiParam___________String__assess__________apiParam___________String__disposalPlan____________apiParam___________String__doctorSignature____________apiParam___________String__date_______________apiSuccessExample__JSON________________________errcode___200________errmsg___success_________data__________________________",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "11_Reception_______api__POST__reception_03_____________apiVersion_1_0_0_______apiName_reception_03__________________apiParam___________String__name__________apiParam___________String__identityCard_______________apiParam___________String__subjectiveInformation________________apiParam___________String__objectiveData________________apiParam___________String__assess__________apiParam___________String__disposalPlan____________apiParam___________String__doctorSignature____________apiParam___________String__date_______________apiSuccessExample__JSON________________________errcode___200________errmsg___success_________data__________________________",
    "name": ""
  },
  {
    "group": "11_ReferralTwoWay_______api__POST__referralTwoWay_02_____________apiVersion_1_0_0_______apiName_referralTwoWay_02__________________apiParam___________String__name__________apiParam___________String__identityCard_______________apiParam___________String__sex__________apiParam___________String__age__________apiParam___________String__number____________apiParam___________String__address____________apiParam___________String__phone____________apiParam___________String__referralDate__________________apiParam___________String__organizationName__________apiParam___________String__departments__________apiParam___________String__doctors____________apiParam___________String__doctorSignature______________apiParam___________String__date_______________apiSuccessExample__JSON________________________errcode___200________errmsg___success_________data__________________________",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./postPublicHealthFollow.js",
    "groupTitle": "11_ReferralTwoWay_______api__POST__referralTwoWay_02_____________apiVersion_1_0_0_______apiName_referralTwoWay_02__________________apiParam___________String__name__________apiParam___________String__identityCard_______________apiParam___________String__sex__________apiParam___________String__age__________apiParam___________String__number____________apiParam___________String__address____________apiParam___________String__phone____________apiParam___________String__referralDate__________________apiParam___________String__organizationName__________apiParam___________String__departments__________apiParam___________String__doctors____________apiParam___________String__doctorSignature______________apiParam___________String__date_______________apiSuccessExample__JSON________________________errcode___200________errmsg___success_________data__________________________",
    "name": ""
  }
] });

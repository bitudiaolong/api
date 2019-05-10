define({ "api": [
  {
    "group": "00_FllowUpClassification",
    "type": "GET",
    "url": "followUpList",
    "title": "02、用户随访记录列表",
    "version": "1.0.0",
    "name": "followUpList_02_________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户有效性校验（Android、iOS、小程序：必填token  TV端：允许为空）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>用户身份证号码（Android、iOS、小程序：根据用户绑定身份证查找随访记录）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signId",
            "description": "<p>签约记录id（Android、iOS、小程序：signId写死为空&quot;&quot;  TV端：必填signId）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "peopleType",
            "description": "<p>人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，52型糖尿病，6老年人，7严重精神障碍，8肺结核）</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>随访记录一级列表</p>"
          }
        ],
        "list元素对象属性": [
          {
            "group": "list元素对象属性",
            "type": "String",
            "optional": false,
            "field": "titleName",
            "description": "<p>二级标题名（儿童 孕产妇 老年人 严重精神障碍 肺结核 五项有 其他项目为空）</p>"
          },
          {
            "group": "list元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "recordList",
            "description": "<p>随访记录二级列表--随访记录时间</p>"
          }
        ],
        "recordList元素对象属性": [
          {
            "group": "recordList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访记录日期</p>"
          },
          {
            "group": "recordList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id</p>"
          },
          {
            "group": "recordList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "detailUrl",
            "description": "<p>随访详情url（详情使用h5页面）</p>"
          },
          {
            "group": "recordList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "recordBelongsTo",
            "description": "<p>人群所属二级分类（1 2 ... 18 &quot;&quot;）前端不做展示 pad识别验证时使用</p>"
          },
          {
            "group": "recordList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpStatus",
            "description": "<p>随访记录作废情况（1正常数据 0已作废数据）</p>"
          },
          {
            "group": "recordList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "useState",
            "description": "<p>随访确认情况（1已确认 0待确认）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\":200,\n    \"errmsg\":\"\",\n    \"data\":{\n        \"list\":[{\n            \"titleName\":\"随访服务记录\",\n            \"recordList\":[{\n                \"followUpDate\":\"2018-09-19\",\n                \"followUpId\":\"4235425\",\n                \"detailUrl\":\"http://098234.html\",\n                \"recordBelongsTo\":\"\",\n                \"followUpStatus\":\"1\",\n                \"useState\":\"1\"\n            }]\n        },{\n            \"titleName\":\"入户随访记录\",\n            \"recordList\":[{\n                \"followUpDate\":\"2018-09-19\",\n                \"followUpId\":\"4235425\",\n                \"detailUrl\":\"http://098234.html\",\n                \"recordBelongsTo\":\"1\",\n                \"followUpStatus\":\"0\",\n                \"useState\":\"0\"\n        },{\n                \"followUpDate\":\"2018-09-19\",\n                \"followUpId\":\"4235425\",\n                \"detailUrl\":\"http://098234.html\",\n                \"recordBelongsTo\":\"18\",\n                \"followUpStatus\":\"1\",\n                \"useState\":\"1\"\n            }]\n        }]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "00_FllowUpClassification"
  },
  {
    "group": "00_FllowUpClassification",
    "type": "GET",
    "url": "followUpType",
    "title": "01、随访信息用户所属人群分类列表",
    "version": "1.0.0",
    "name": "followUpType_01_____________",
    "description": "<p>人群分类列表必定返回九个模块，根据1控制开启显示/0关闭隐藏模块 其中list为空则为【一般人群】显示默认图</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>用户有效性校验（Android、iOS、小程序：必填token  TV端：允许为空）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>用户身份证号码（Android、iOS、小程序：根据用户绑定身份证查找人群分类）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signId",
            "description": "<p>签约记录id（Android、iOS、小程序：signId写死为空&quot;&quot;  TV端：必填signId）</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>用户所属人群分类列表</p>"
          }
        ],
        "list元素对象属性": [
          {
            "group": "list元素对象属性",
            "type": "String",
            "optional": false,
            "field": "peopleType",
            "description": "<p>人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，52型糖尿病，6老年人，7严重精神障碍，8肺结核）</p>"
          },
          {
            "group": "list元素对象属性",
            "type": "int",
            "optional": false,
            "field": "openFlag",
            "description": "<p>开启关闭标识（0关闭，1开启）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "   \"errcode\": 200,\n   \"data\": {\n       \"list\": [\n           {\n               \"openFlag\": 0,\n               \"peopleType\": 0\n           },\n           {\n               \"openFlag\": 0,\n               \"peopleType\": 1\n           },\n           {\n               \"openFlag\": 1,\n               \"peopleType\": 2\n           },\n           {\n               \"openFlag\": 1,\n               \"peopleType\": 3\n           },\n           {\n               \"openFlag\": 1,\n               \"peopleType\": 4\n           },\n           {\n               \"openFlag\": 1,\n               \"peopleType\": 5\n           },\n           {\n               \"openFlag\": 0,\n               \"peopleType\": 6\n           },\n           {\n               \"openFlag\": 1,\n               \"peopleType\": 7\n           },\n           {\n               \"openFlag\": 1,\n               \"peopleType\": 8\n           }\n       ]\n   },\n   \"errmsg\": \"success\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "00_FllowUpClassification"
  },
  {
    "group": "01_Public",
    "type": "POST",
    "url": "exportFollowUpRecord",
    "title": "02、导出随访记录",
    "version": "1.0.0",
    "name": "exportFollowUpRecord_02_______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "peopleType",
            "description": "<p>人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，5糖尿病，6老年人，7精神病，8肺结核）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "01_Public"
  },
  {
    "group": "01_Public",
    "type": "POST",
    "url": "voidedFollowUpRecord",
    "title": "01、作废随访记录",
    "version": "1.0.0",
    "name": "voidedFollowUpRecord_01_______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "peopleType",
            "description": "<p>人群分类（0儿童，1孕妇，2高血压，3冠心病，4脑卒中，5糖尿病，6老年人，7精神病，8肺结核）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "01_Public"
  },
  {
    "group": "02_Child",
    "type": "GET",
    "url": "childHealthManageFollowUp",
    "title": "05、儿童中医药健康管理服务记录表",
    "version": "1.0.0",
    "name": "childHealthManageFollowUp_05_______________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongth",
            "description": "<p>月龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongthRequired",
            "description": "<p>月龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "healthManagement",
            "description": "<p>中医药健康管理服务</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "healthManagementRequired",
            "description": "<p>中医药健康管理服务是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"mongth\":\"女\",\n        \"mongthRequired\":\"1\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"healthManagement\":\"2018-01-09\",\n        \"healthManagementRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/230984.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "02_Child"
  },
  {
    "group": "02_Child",
    "type": "GET",
    "url": "lessThanEightMonthChildFollowUp",
    "title": "02、1~8月龄儿童健康检查记录表",
    "version": "1.0.0",
    "name": "lessThanEightMonthChildFollowUp_02_1_8___________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongth",
            "description": "<p>月龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongthRequired",
            "description": "<p>月龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身长</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lengthRequired",
            "description": "<p>身长是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "headCircumference",
            "description": "<p>头围</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "headCircumferenceRequired",
            "description": "<p>头围是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>面色</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complexionRequired",
            "description": "<p>面色是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skin",
            "description": "<p>皮肤</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skinRequired",
            "description": "<p>皮肤是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bregmatic",
            "description": "<p>前囟</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bregmaticRequired",
            "description": "<p>前囟是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cervicalLump",
            "description": "<p>颈部包块</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cervicalLumpRequired",
            "description": "<p>颈部包块是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "eye",
            "description": "<p>眼睛</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "eyeRequired",
            "description": "<p>眼睛是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nose",
            "description": "<p>鼻</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "noseRequired",
            "description": "<p>鼻是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearing",
            "description": "<p>听力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearingRequired",
            "description": "<p>听力是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "oralCavity",
            "description": "<p>口腔</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "oralCavityRequired",
            "description": "<p>口腔是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chest",
            "description": "<p>胸部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chestRequired",
            "description": "<p>胸部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdomen",
            "description": "<p>腹部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdomenRequired",
            "description": "<p>腹部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "umbilicalCord",
            "description": "<p>脐部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "umbilicalCordRequired",
            "description": "<p>脐部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "limb",
            "description": "<p>四肢</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "limbRequired",
            "description": "<p>四肢是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suspiciousRickets",
            "description": "<p>可疑佝偻病症状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suspiciousRicketsRequired",
            "description": "<p>可疑佝偻病症状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suspiciousRicketsSigns",
            "description": "<p>可疑佝偻病体征</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suspiciousRicketsSignsRequired",
            "description": "<p>可疑佝偻病体征是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "anus",
            "description": "<p>肛门</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "anusRequired",
            "description": "<p>肛门是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "externalGenitals",
            "description": "<p>外生殖器</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "externalGenitalsRequired",
            "description": "<p>外生殖器是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinValue",
            "description": "<p>血红蛋白值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinValueRequired",
            "description": "<p>血红蛋白值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "outdoorActivities",
            "description": "<p>户外活动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "outdoorActivitiesRequired",
            "description": "<p>户外活动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeVitaminD",
            "description": "<p>服用维生素D</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeVitaminDRequired",
            "description": "<p>服用维生素D是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "developmentAssessment",
            "description": "<p>发育评估</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "developmentAssessmentRequired",
            "description": "<p>发育评估是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "prevalence",
            "description": "<p>两次随访间患病情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "prevalenceRequired",
            "description": "<p>两次随访间患病情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"mongth\":\"1\",\n        \"mongthRequired\":\"1\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"weight\":\"10 中\",\n        \"weightRequired\":\"1\",\n        \"height\":\"11 上\",\n        \"heightRequired\":\"1\",\n        \"headCircumference\":\"50\",\n        \"headCircumferenceRequired\":\"1\",\n        \"complexion\":\"红润\",\n        \"complexionRequired\":\"1\",\n        \"skin\":\"未见异常\",\n        \"skinRequired\":\"1\",\n        \"bregmatic\":\"50*50 闭合\",\n        \"bregmaticRequired\":\"1\",\n        \"cervicalLump\":\"未见异常\",\n        \"cervicalLumpRequired\":\"1\",\n        \"eye\":\"未见异常\",\n        \"eyeRequired\":\"1\",\n        \"nose\":\"未见异常\",\n        \"noseRequired\":\"1\",\n        \"hearing\":\"未见异常\",\n        \"hearingRequired\":\"1\",\n        \"oralCavity\":\"未见异常\",\n        \"oralCavityRequired\":\"1\",\n        \"chest\":\"未见异常\",\n        \"chestRequired\":\"1\",\n        \"abdomen\":\"未见异常\",\n        \"abdomenRequired\":\"1\",\n        \"umbilicalCord\":\"未脱落\",\n        \"umbilicalCordRequired\":\"1\",\n        \"limb\":\"未见异常\",\n        \"limbRequired\":\"1\",\n        \"suspiciousRickets\":\"正常\",\n        \"suspiciousRicketsRequired\":\"1\",\n        \"suspiciousRicketsSigns\":\"未见异常\",\n        \"suspiciousRicketsSignsRequired\":\"1\",\n        \"anus\":\"未见异常\",\n        \"anusRequired\":\"1\",\n        \"externalGenitals\":\"未见异常\",\n        \"externalGenitalsRequired\":\"1\",\n        \"hemoglobinValue\":\"112\",\n        \"hemoglobinValueRequired\":\"1\",\n        \"outdoorActivities\":\"4\",\n        \"outdoorActivitiesRequired\":\"1\",\n        \"takeVitaminD\":\"1\",\n        \"takeVitaminDRequired\":\"1\",\n        \"developmentAssessment\":\"未见异常\",\n        \"developmentAssessmentRequired\":\"1\",\n        \"heartAndLungs\":\"未见异常\",\n        \"heartAndLungsRequired\":\"1\",\n        \"prevalence\":\"无\",\n        \"prevalenceRequired\":\"1\",\n        \"referralAdvice\":\"有\",\n        \"referralAdviceRequired\":\"1\",\n        \"referralReason\":\"感冒\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"武进卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/23048u.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "02_Child"
  },
  {
    "group": "02_Child",
    "type": "GET",
    "url": "newChildFollowUp",
    "title": "01、新生儿的随访记录详情",
    "version": "1.0.0",
    "name": "newChildFollowUp_01___________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sexRequired",
            "description": "<p>性别是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>出生日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthdayRequired",
            "description": "<p>出生日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "IDCardNum",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "IDCardNumRequired",
            "description": "<p>身份证号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>家庭住址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "addressRequired",
            "description": "<p>家庭住址是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherName",
            "description": "<p>父亲名称</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherNameRequired",
            "description": "<p>父亲名称是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherJob",
            "description": "<p>父亲职业</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherJobRequired",
            "description": "<p>父亲职业是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherBirthday",
            "description": "<p>父亲生日</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherBirthdaynRequired",
            "description": "<p>父亲生日是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherPhone",
            "description": "<p>父亲电话</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fatherPhonenRequired",
            "description": "<p>父亲电话是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherName",
            "description": "<p>母亲名称</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherNameRequired",
            "description": "<p>母亲名称是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherJob",
            "description": "<p>母亲职业</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherJobRequired",
            "description": "<p>母亲职业是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherBirthday",
            "description": "<p>母亲生日</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherBirthdayRequired",
            "description": "<p>母亲生日是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherPhone",
            "description": "<p>母亲电话</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherPhoneRequired",
            "description": "<p>母亲电话是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthGestationalWeek",
            "description": "<p>出生孕周</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthGestationalWeekRequired",
            "description": "<p>出生孕周是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherPregnancyCondition",
            "description": "<p>母亲妊娠期患病情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motherPregnancyConditionRequired",
            "description": "<p>母亲妊娠期患病情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "MidwiferyOrg",
            "description": "<p>助产机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "MidwiferyOrgRequired",
            "description": "<p>助产机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthCondition",
            "description": "<p>出生情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthConditionRequired",
            "description": "<p>出生情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "asphyxiaNeonatorum",
            "description": "<p>新生儿窒息</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "asphyxiaNeonatorumRequired",
            "description": "<p>新生儿窒息是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "malformation",
            "description": "<p>畸形</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "malformationRequired",
            "description": "<p>畸形是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearingScreening",
            "description": "<p>听力筛查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearingScreeningRequired",
            "description": "<p>听力筛查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "diseaseScreening",
            "description": "<p>疾病筛查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "diseaseScreeningRequired",
            "description": "<p>疾病筛查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "currentWeight",
            "description": "<p>目前体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "currentWeightRequired",
            "description": "<p>目前体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthLength",
            "description": "<p>出生身长</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthLengthRequired",
            "description": "<p>出生身长是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feedingMode",
            "description": "<p>喂养方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feedingModeRequired",
            "description": "<p>喂养方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "milkAmount",
            "description": "<p>吃奶量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "milkAmountRequired",
            "description": "<p>吃奶量 是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feedingTimes",
            "description": "<p>吃奶次数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feedingTimesRequired",
            "description": "<p>吃奶次数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vomit",
            "description": "<p>呕吐</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vomitRequired",
            "description": "<p>呕吐是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stools",
            "description": "<p>大便</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stoolsRequired",
            "description": "<p>大便是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stoolTimes",
            "description": "<p>大便次数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stoolTimesRequired",
            "description": "<p>大便次数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>体温</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "temperatureRequired",
            "description": "<p>体温是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartRate",
            "description": "<p>心率</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartRateRequired",
            "description": "<p>心率是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "respiratoryFrequency",
            "description": "<p>呼吸频率</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "respiratoryFrequencyRequired",
            "description": "<p>呼吸频率是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>面色</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complexionRequired",
            "description": "<p>面色是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "siteOfJaundice",
            "description": "<p>黄疸部位</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "siteOfJaundiceRequired",
            "description": "<p>黄疸部位是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "formerChimney",
            "description": "<p>前囱</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "formerChimneyRequired",
            "description": "<p>前囱是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "eye",
            "description": "<p>眼睛</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "eyeRequired",
            "description": "<p>眼睛是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "extremitiesActivity",
            "description": "<p>四肢活动度</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "extremitiesRequired",
            "description": "<p>四肢活动度是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "auricularAppearance",
            "description": "<p>耳外观</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "auricularAppearanceRequired",
            "description": "<p>耳外观是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cervicalLump",
            "description": "<p>颈部包块</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cervicalLumpRequired",
            "description": "<p>颈部包块是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nose",
            "description": "<p>鼻</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "noseRequired",
            "description": "<p>鼻是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skin",
            "description": "<p>皮肤</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skinRequired",
            "description": "<p>皮肤是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "oralCavity",
            "description": "<p>口腔</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "oralCavityRequired",
            "description": "<p>口腔是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "anus",
            "description": "<p>肛门</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "anusRequired",
            "description": "<p>肛门是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartAndLungs",
            "description": "<p>心肺听诊</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartAndLungsRequired",
            "description": "<p>心肺听诊是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chest",
            "description": "<p>胸部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chestRequired",
            "description": "<p>胸部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdominalPalpation",
            "description": "<p>腹部触诊</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdominalPalpationRequired",
            "description": "<p>腹部触诊是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "spine",
            "description": "<p>脊柱</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "spineRequired",
            "description": "<p>脊柱是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "externalGenitals",
            "description": "<p>外生殖器</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "externalGenitalsRequired",
            "description": "<p>外生殖器是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "umbilicalCord",
            "description": "<p>脐带</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "umbilicalCordRequired",
            "description": "<p>脐带是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateOfThisVisit",
            "description": "<p>本次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateOfThisVisitRequired",
            "description": "<p>本次访视日期 是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "theNextPlaceUp",
            "description": "<p>下次随访地点</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "theNextPlaceUpRequired",
            "description": "<p>下次随访地点是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"sex\":\"女\",\n        \"sexRequired\":\"1\",\n        \"birthday\":\"2018-1-23\",\n        \"birthdayRequired\":\"1\",\n        \"IDCardNum\":\"320722299999999999\",\n        \"IDCardNumRequired\":\"1\",\n        \"address\":\"常州市新北区人民路1号\",\n        \"addressRequired\":\"1\",\n        \"fatherName\":\"张思\",\n        \"fatherNameRequired\":\"1\",\n        \"fatherJob\":\"公务员\",\n        \"fatherJobRequired\":\"1\",\n        \"fatherBirthday\":\"1980-10-10\",\n        \"fatherBirthdayRequired\":\"1\",\n        \"fatherPhone\":\"13291223445\",\n        \"fatherPhonenRequired\":\"1\",\n        \"motherName\":\"王宏\",\n        \"motherNameRequired\":\"1\",\n        \"motherJob\":\"公务员\",\n        \"motherJobRequired\":\"1\",\n        \"motherBirthday\":\"1988-10-10\",\n        \"motherBirthdayRequired\":\"1\",\n        \"motherPhone\":\"13298888888\",\n        \"motherPhoneRequired\":\"1\",\n        \"birthGestationalWeek\":\"40\",\n        \"birthGestationalWeekRequired\":\"1\",\n        \"motherPregnancyCondition\":\"糖尿病\",\n        \"motherPregnancyConditionRequired\":\"1\",\n        \"MidwiferyOrg\":\"常州中医院\",\n        \"MidwiferyOrgRequired\":\"1\",\n        \"birthCondition\":\"顺产\",\n        \"birthConditionRequired\":\"1\",\n        \"asphyxiaNeonatorum\":\"无\",\n        \"asphyxiaNeonatorumRequired\":\"1\",\n        \"malformation\":\"无\",\n        \"malformationRequired\":\"1\",\n        \"hearingScreening\":\"通过\",\n        \"hearingScreeningRequired\":\"1\",\n        \"diseaseScreening\":\"未进行\",\n        \"diseaseScreeningRequired\":\"1\",\n        \"weight\":\"10\",\n        \"weightRequired\":\"1\",\n        \"currentWeight\":\"11\",\n        \"currentWeightRequired\":\"1\",\n        \"birthLength\":\"50\",\n        \"birthLengthRequired\":\"1\",\n        \"feedingMode\":\"纯母乳\",\n        \"feedingModeRequired\":\"1\",\n        \"milkAmount\":\"120\",\n        \"milkAmountRequired\":\"1\",\n        \"feedingTimes\":\"5\",\n        \"feedingTimesRequired\":\"1\",\n        \"vomit\":\"无\",\n        \"vomitRequired\":\"1\",\n        \"stools\":\"糊状\",\n        \"stoolsRequired\":\"1\",\n        \"stoolTimes\":\"3\",\n        \"stoolTimesRequired\":\"1\",\n        \"temperature\":\"37\",\n        \"temperatureRequired\":\"1\",\n        \"heartRate\":\"80\",\n        \"heartRateRequired\":\"1\",\n        \"respiratoryFrequency\":\"80\",\n        \"respiratoryFrequencyRequired\":\"1\",\n        \"complexion\":\"红润\",\n        \"complexionRequired\":\"1\",\n        \"siteOfJaundice\":\"无\",\n        \"siteOfJaundiceRequired\":\"1\",\n        \"formerChimney\":\"20*20 正常\",\n        \"formerChimneyRequired\":\"1\",\n        \"eye\":\"正常\",\n        \"eyeRequired\":\"1\",\n        \"extremitiesActivity\":\"未见异常\",\n        \"extremitiesRequired\":\"1\",\n        \"auricularAppearance\":\"未见异常\",\n        \"auricularAppearanceRequired\":\"1\",\n        \"cervicalLump\":\"无\",\n        \"cervicalLumpRequired\":\"1\",\n        \"nose\":\"未见异常\",\n        \"noseRequired\":\"1\",\n        \"skin\":\"未见异常\",\n        \"skinRequired\":\"1\",\n        \"oralCavity\":\"未见异常\",\n        \"oralCavityRequired\":\"1\",\n        \"anus\":\"未见异常\",\n        \"anusRequired\":\"1\",\n        \"heartAndLungs\":\"未见异常\",\n        \"heartAndLungsRequired\":\"1\",\n        \"chest\":\"未见异常\",\n        \"chestRequired\":\"1\",\n        \"abdominalPalpation\":\"未见异常\",\n        \"abdominalPalpationRequired\":\"1\",\n        \"spine\":\"未见异常\",\n        \"spineRequired\":\"1\",\n        \"externalGenitals\":\"未见异常\",\n        \"externalGenitalsRequired\":\"1\",\n        \"umbilicalCord\":\"未脱\",\n        \"umbilicalCordRequired\":\"1\",\n        \"referralAdvice\":\"有\",\n        \"referralAdviceRequired\":\"1\",\n        \"referralReason\":\"感冒\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"武进卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"guidance\":\"喂养指导\",\n        \"guidanceRequired\":\"1\",\n        \"dateOfThisVisit\":\"2018-1-10\",\n        \"dateOfThisVisitRequired\":\"1\",\n        \"theNextPlaceUp\":\"家\",\n        \"theNextPlaceUpRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/2390o8u4.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "02_Child"
  },
  {
    "group": "02_Child",
    "type": "GET",
    "url": "threeToSixYearChildFollowUp",
    "title": "04、3~6岁儿童健康检查记录表",
    "version": "1.0.0",
    "name": "threeToSixYearChildFollowUp_04_3_6__________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongth",
            "description": "<p>月龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongthRequired",
            "description": "<p>月龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "toothdecay",
            "description": "<p>龋齿数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "visionleft",
            "description": "<p>左视力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "visionright",
            "description": "<p>右视力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身长</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heightRequired",
            "description": "<p>身长是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightPlength",
            "description": "<p>体重/身高(上中下)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightPlengthRequired",
            "description": "<p>体重/身高是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "physicalDevelopment",
            "description": "<p>体格发育评价</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "physicalDevelopmentRequired",
            "description": "<p>体格发育评价是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vision",
            "description": "<p>视力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "visionRequired",
            "description": "<p>视力是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearing",
            "description": "<p>听力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearingRequired",
            "description": "<p>听力是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "teething",
            "description": "<p>出牙/龋齿数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "teethingRequired",
            "description": "<p>出牙/龋齿数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chest",
            "description": "<p>胸部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chestRequired",
            "description": "<p>胸部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdomen",
            "description": "<p>腹部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdomenRequired",
            "description": "<p>腹部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinValue",
            "description": "<p>血红蛋白值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinValueRequired",
            "description": "<p>血红蛋白值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "developmentAssessment",
            "description": "<p>发育评估</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "developmentAssessmentRequired",
            "description": "<p>发育评估是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "prevalence",
            "description": "<p>两次随访间患病情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "prevalenceRequired",
            "description": "<p>两次随访间患病情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"mongth\":\"女\",\n        \"mongthRequired\":\"1\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"toothdecay\":\"1\",\n        \"visionleft\":\"1\",\n        \"visionright\":\"1\",\n        \"weight\":\"10 中\",\n        \"weightRequired\":\"1\",\n        \"height\":\"11 上\",\n        \"heightRequired\":\"1\",\n        \"weightPlength\":\"中\",\n        \"weightPlengthRequired\":\"1\",\n        \"physicalDevelopment\":\"正常\",\n        \"physicalDevelopmentRequired\":\"1\",\n        \"vision\":\"2.0\",\n        \"visionRequired\":\"1\",\n        \"hearing\":\"未见异常\",\n        \"hearingRequired\":\"1\",\n        \"teething\":\"出牙/1\",\n        \"teethingRequired\":\"1\",\n        \"chest\":\"未见异常\",\n        \"chestRequired\":\"1\",\n        \"abdomen\":\"未见异常\",\n        \"abdomenRequired\":\"1\",\n        \"hemoglobinValue\":\"112\",\n        \"hemoglobinValueRequired\":\"1\",\n        \"other\":\"无\",\n        \"otherRequired\":\"1\",\n        \"developmentAssessment\":\"未见异常\",\n        \"developmentAssessmentRequired\":\"1\",\n        \"heartAndLungs\":\"未见异常\",\n        \"heartAndLungsRequired\":\"1\",\n        \"prevalence\":\"无\",\n        \"prevalenceRequired\":\"1\",\n        \"referralAdvice\":\"有\",\n        \"referralAdviceRequired\":\"1\",\n        \"referralReason\":\"感冒\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"武进卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/o3w289u.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "02_Child"
  },
  {
    "group": "02_Child",
    "type": "GET",
    "url": "twelveToThirtyMonthChildFollowUp",
    "title": "03、12~30月龄儿童健康检查记录表",
    "version": "1.0.0",
    "name": "twelveToThirtyMonthChildFollowUp_03_12_30___________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongth",
            "description": "<p>月龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mongthRequired",
            "description": "<p>月龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "toothdecay",
            "description": "<p>龋齿数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身长</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heightRequired",
            "description": "<p>身长是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complexion",
            "description": "<p>面色</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complexionRequired",
            "description": "<p>面色是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skin",
            "description": "<p>皮肤</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skinRequired",
            "description": "<p>皮肤是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bregmatic",
            "description": "<p>前囟</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bregmaticRequired",
            "description": "<p>前囟是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "eye",
            "description": "<p>眼睛</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "eyeRequired",
            "description": "<p>眼睛是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "earAppearance",
            "description": "<p>耳外观</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "earAppearanceRequired",
            "description": "<p>耳外观是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearing",
            "description": "<p>听力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hearingRequired",
            "description": "<p>听力是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "teething",
            "description": "<p>出牙/龋齿数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "teethingRequired",
            "description": "<p>出牙/龋齿数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chest",
            "description": "<p>胸部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chestRequired",
            "description": "<p>胸部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdomen",
            "description": "<p>腹部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdomenRequired",
            "description": "<p>腹部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "limb",
            "description": "<p>四肢</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "limbRequired",
            "description": "<p>四肢是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "gait",
            "description": "<p>步态</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "gaitRequired",
            "description": "<p>步态是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suspiciousRicketsSigns",
            "description": "<p>可疑佝偻病体征</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suspiciousRicketsSignsRequired",
            "description": "<p>可疑佝偻病体征是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinValue",
            "description": "<p>血红蛋白值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinValueRequired",
            "description": "<p>血红蛋白值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "outdoorActivities",
            "description": "<p>户外活动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "outdoorActivitiesRequired",
            "description": "<p>户外活动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeVitaminD",
            "description": "<p>服用维生素D</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeVitaminDRequired",
            "description": "<p>服用维生素D是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "developmentAssessment",
            "description": "<p>发育评估</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "developmentAssessmentRequired",
            "description": "<p>发育评估是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "prevalence",
            "description": "<p>两次随访间患病情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "prevalenceRequired",
            "description": "<p>两次随访间患病情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"mongth\":\"女\",\n        \"mongthRequired\":\"1\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"toothdecay\":\"1\",\n        \"weight\":\"10 中\",\n        \"weightRequired\":\"1\",\n        \"height\":\"11 上\",\n        \"heightRequired\":\"1\",\n        \"complexion\":\"红润\",\n        \"complexionRequired\":\"1\",\n        \"skin\":\"未见异常\",\n        \"skinRequired\":\"1\",\n        \"bregmatic\":\"50*50 闭合\",\n        \"bregmaticRequired\":\"1\",\n        \"eye\":\"未见异常\",\n        \"eyeRequired\":\"1\",\n        \"earAppearance\":\"未见异常\",\n        \"earAppearanceRequired\":\"1\",\n        \"hearing\":\"未见异常\",\n        \"hearingRequired\":\"1\",\n        \"teething\":\"出牙/1\",\n        \"teethingRequired\":\"1\",\n        \"chest\":\"未见异常\",\n        \"chestRequired\":\"1\",\n        \"abdomen\":\"未见异常\",\n        \"abdomenRequired\":\"1\",\n        \"limb\":\"未见异常\",\n        \"limbRequired\":\"1\",\n        \"gait\":\"---\",\n        \"gaitRequired\":\"1\",\n        \"suspiciousRicketsSigns\":\"未见异常\",\n        \"suspiciousRicketsSignsRequired\":\"1\",\n        \"hemoglobinValue\":\"112\",\n        \"hemoglobinValueRequired\":\"1\",\n        \"outdoorActivities\":\"4\",\n        \"outdoorActivitiesRequired\":\"1\",\n        \"takeVitaminD\":\"1\",\n        \"takeVitaminDRequired\":\"1\",\n        \"developmentAssessment\":\"未见异常\",\n        \"developmentAssessmentRequired\":\"1\",\n        \"heartAndLungs\":\"未见异常\",\n        \"heartAndLungsRequired\":\"1\",\n        \"prevalence\":\"无\",\n        \"prevalenceRequired\":\"1\",\n        \"referralAdvice\":\"有\",\n        \"referralAdviceRequired\":\"1\",\n        \"referralReason\":\"感冒\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"武进卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.xxx.com/3231.png\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "02_Child"
  },
  {
    "group": "03_Maternal",
    "type": "GET",
    "url": "postpartumFollowUp",
    "title": "04、产后访视记录",
    "version": "1.0.0",
    "name": "postpartumFollowUp_04_______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateOfDelivery",
            "description": "<p>分娩日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateOfDeliveryRequired",
            "description": "<p>分娩日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dischargeDate",
            "description": "<p>出院日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dischargeDateRequired",
            "description": "<p>出院日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>体 温</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "temperatureRequired",
            "description": "<p>体 温是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "generalHealth",
            "description": "<p>一般健康情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "generalHealthRequired",
            "description": "<p>一般健康情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalCondition",
            "description": "<p>一般心理状况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalConditionRequired",
            "description": "<p>一般心理状况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressure",
            "description": "<p>血 压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressureRequired",
            "description": "<p>血 压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "breast",
            "description": "<p>乳房</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "breastRequired",
            "description": "<p>乳房是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lochia",
            "description": "<p>恶露</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lochiaRequired",
            "description": "<p>恶露是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "uterus",
            "description": "<p>子宫</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "uterusRequired",
            "description": "<p>子宫是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "wound",
            "description": "<p>伤口</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "woundRequired",
            "description": "<p>伤口是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>分 类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>分 类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"dateOfDelivery\":\"2018-01-09\",\n        \"dateOfDeliveryRequired\":\"1\",\n        \"dischargeDate\":\"2018-01-16\",\n        \"dischargeDateRequired\":\"1\",\n        \"temperature\":\"50\",\n        \"temperatureRequired\":\"1\",\n        \"generalHealth\":\"良好\",\n        \"generalHealthRequired\":\"1\",\n        \"psychologicalCondition\":\"良好\",\n        \"psychologicalConditionRequired\":\"1\",\n        \"bloodPressure\":\"140/90\",\n        \"bloodPressureRequired\":\"1\",\n        \"breast\":\"良好\",\n        \"breastRequired\":\"1\",\n        \"lochia\":\"无\",\n        \"lochiaRequired\":\"1\",\n        \"uterus\":\"良好\",\n        \"uterusRequired\":\"1\",\n        \"wound\":\"未见异常\",\n        \"woundRequired\":\"1\",\n        \"other\":\"未见异常\",\n        \"otherRequired\":\"1\",\n        \"prevalence\":\"无\",\n        \"prevalenceRequired\":\"1\",\n        \"referralAdvice\":\"无\",\n        \"referralAdviceRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/3w904u7.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "03_Maternal"
  },
  {
    "group": "03_Maternal",
    "type": "GET",
    "url": "postpartumFollowUp",
    "title": "05、产后42天健康检查记录表",
    "version": "1.0.0",
    "name": "postpartumFollowUp_05___42________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateOfDelivery",
            "description": "<p>分娩日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateOfDeliveryRequired",
            "description": "<p>分娩日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dischargeDate",
            "description": "<p>出院日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dischargeDateRequired",
            "description": "<p>出院日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "temperature",
            "description": "<p>体 温</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "temperatureRequired",
            "description": "<p>体 温是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "generalHealth",
            "description": "<p>一般健康情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "generalHealthRequired",
            "description": "<p>一般健康情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalCondition",
            "description": "<p>一般心理状况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalConditionRequired",
            "description": "<p>一般心理状况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressure",
            "description": "<p>血 压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressureRequired",
            "description": "<p>血 压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "breast",
            "description": "<p>乳房</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "breastRequired",
            "description": "<p>乳房是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lochia",
            "description": "<p>恶露</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lochiaRequired",
            "description": "<p>恶露是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "uterus",
            "description": "<p>子宫</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "uterusRequired",
            "description": "<p>子宫是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "wound",
            "description": "<p>伤口</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "woundRequired",
            "description": "<p>伤口是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>分 类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>分 类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"dateOfDelivery\":\"2018-01-09\",\n        \"dateOfDeliveryRequired\":\"1\",\n        \"dischargeDate\":\"2018-01-16\",\n        \"dischargeDateRequired\":\"1\",\n        \"temperature\":\"50\",\n        \"temperatureRequired\":\"1\",\n        \"generalHealth\":\"良好\",\n        \"generalHealthRequired\":\"1\",\n        \"psychologicalCondition\":\"良好\",\n        \"psychologicalConditionRequired\":\"1\",\n        \"bloodPressure\":\"140/90\",\n        \"bloodPressureRequired\":\"1\",\n        \"breast\":\"良好\",\n        \"breastRequired\":\"1\",\n        \"lochia\":\"无\",\n        \"lochiaRequired\":\"1\",\n        \"uterus\":\"良好\",\n        \"uterusRequired\":\"1\",\n        \"wound\":\"未见异常\",\n        \"woundRequired\":\"1\",\n        \"other\":\"未见异常\",\n        \"otherRequired\":\"1\",\n        \"prevalence\":\"无\",\n        \"prevalenceRequired\":\"1\",\n        \"referralAdvice\":\"无\",\n        \"referralAdviceRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/3w904u7.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "03_Maternal"
  },
  {
    "group": "03_Maternal",
    "type": "GET",
    "url": "pregnantFirstFollowUp",
    "title": "02、第1次产前随访服务记录表",
    "version": "1.0.0",
    "name": "pregnantFirstFollowUp_02__1__________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>孕妇姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pnameRequired",
            "description": "<p>孕妇姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>填表日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>填表日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantWeeks",
            "description": "<p>孕周</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantWeeksRequired",
            "description": "<p>孕周是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "ageRequired",
            "description": "<p>年龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandName",
            "description": "<p>丈夫姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandNameRequired",
            "description": "<p>丈夫姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandAge",
            "description": "<p>丈夫年龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandAgeRequired",
            "description": "<p>丈夫年龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandPhone",
            "description": "<p>丈夫手机号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandPhoneRequired",
            "description": "<p>丈夫手机号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantTime",
            "description": "<p>孕次</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantTimeRequired",
            "description": "<p>孕次是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "productionTime",
            "description": "<p>产次</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "productionTimeRequired",
            "description": "<p>产次是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lastMenstruation",
            "description": "<p>末次月经</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lastMenstruationRequired",
            "description": "<p>末次月经是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dueDate",
            "description": "<p>预产期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dueDateRequired",
            "description": "<p>预产期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastHistory",
            "description": "<p>既往史</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastHistoryRequired",
            "description": "<p>既往史是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "familyHistory",
            "description": "<p>家族史</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "familyHistoryRequired",
            "description": "<p>家族史是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "personalHistory",
            "description": "<p>个人史</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "personalHistoryRequired",
            "description": "<p>个人史是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "historyOfSurgery",
            "description": "<p>手术史</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "historyOfSurgeryRequired",
            "description": "<p>手术史是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnancyHistory",
            "description": "<p>孕产史</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnancyHistoryRequired",
            "description": "<p>孕产史是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": "<p>身高</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heightRequired",
            "description": "<p>身高是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BMI",
            "description": "<p>体质指数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BMIRequired",
            "description": "<p>体质指数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressure",
            "description": "<p>血压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressureRequired",
            "description": "<p>血压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heart",
            "description": "<p>心脏</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartRequired",
            "description": "<p>心脏是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lungs",
            "description": "<p>肺部</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lungsRequired",
            "description": "<p>肺部是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vulva",
            "description": "<p>外阴</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vulvaRequired",
            "description": "<p>外阴是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cervical",
            "description": "<p>宫颈</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cervicalRequired",
            "description": "<p>宫颈是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "enclosure",
            "description": "<p>附件</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "enclosureRequired",
            "description": "<p>附件是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vagina",
            "description": "<p>阴道</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vaginaRequired",
            "description": "<p>阴道是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "enuterusclosure",
            "description": "<p>子宫</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobin",
            "description": "<p>血红蛋白值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinRequired",
            "description": "<p>血红蛋白值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "leucocyte",
            "description": "<p>白细胞计数值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "leucocyteRequired",
            "description": "<p>白细胞计数值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "thrombocytopenia",
            "description": "<p>血小板计数值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "thrombocytopeniaRequired",
            "description": "<p>血小板计数值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodOther",
            "description": "<p>血常规其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodOtherRequired",
            "description": "<p>血常规其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "proteinuria",
            "description": "<p>尿蛋白</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "proteinuriaRequired",
            "description": "<p>尿蛋白是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urine",
            "description": "<p>尿糖</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urineRequired",
            "description": "<p>尿糖是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "ketone",
            "description": "<p>尿酮体</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "ketoneRequired",
            "description": "<p>尿酮体是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bld",
            "description": "<p>尿潜血</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bldRequired",
            "description": "<p>尿潜血是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urineOther",
            "description": "<p>尿常规其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urineOtherRequired",
            "description": "<p>尿常规其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodType",
            "description": "<p>血型</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodTypeRequired",
            "description": "<p>血型是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodSugar",
            "description": "<p>血糖</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodSugarRequired",
            "description": "<p>血糖是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "seropropane",
            "description": "<p>血清谷丙转氨酶</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "seropropaneRequired",
            "description": "<p>血清谷丙转氨酶是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "aminotransferase",
            "description": "<p>血清谷草转氨酶</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "aminotransferaseRequired",
            "description": "<p>血清谷草转氨酶是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodProtein",
            "description": "<p>血蛋白</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodProteinRequired",
            "description": "<p>血蛋白是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "totalBilirubin",
            "description": "<p>总胆红素</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "totalBilirubinRequired",
            "description": "<p>总胆红素是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bilirubin",
            "description": "<p>结合胆红素</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bilirubinRequired",
            "description": "<p>结合胆红素是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serumCreatinine",
            "description": "<p>血清肌酐</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serumCreatinineRequired",
            "description": "<p>血清肌酐是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodUrea",
            "description": "<p>血尿素</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodUreaRequired",
            "description": "<p>血尿素是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vaginalSecretions",
            "description": "<p>阴道分泌物</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vaginalSecretionsRequired",
            "description": "<p>阴道分泌物是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vaginaCleanliness",
            "description": "<p>阴道清洁度</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "vaginaCleanlinessRequired",
            "description": "<p>阴道清洁度是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "surfaceAntigen",
            "description": "<p>乙型肝炎表面抗原</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "surfaceAntigenRequired",
            "description": "<p>乙型肝炎表面抗原是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "surfaceAntibody",
            "description": "<p>乙型肝炎表面抗体</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "surfaceAntibodyRequired",
            "description": "<p>乙型肝炎表面抗体是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "EAntigen",
            "description": "<p>乙型肝炎e抗原</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "EAntigenBRequired",
            "description": "<p>乙型肝炎e抗原是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "EAntibody",
            "description": "<p>乙型肝炎e抗体</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "EAntibodyBRequired",
            "description": "<p>乙型肝炎e抗体是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "coreAntibody",
            "description": "<p>乙型肝炎核心抗体</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "coreAntibodyBRequired",
            "description": "<p>乙型肝炎核心抗体是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serological",
            "description": "<p>梅毒血清学试验</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serologicalRequired",
            "description": "<p>梅毒血清学试验是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "HIV",
            "description": "<p>HIV抗体检测</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "HIVlRequired",
            "description": "<p>HIV抗体检测是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BUltrasound",
            "description": "<p>B超</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BUltrasoundRequired",
            "description": "<p>B超是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "overallAssessment",
            "description": "<p>总体评估</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "overallAssessmentRequired",
            "description": "<p>总体评估是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-01-01\",\n        \"followUpDateRequired\":\"1\",\n        \"pregnantWeeks\":\"20\",\n        \"pregnantWeeksRequired\":\"1\",\n        \"age\":\"30\",\n        \"ageRequired\":\"1\",\n        \"husbandName\":\"张三\",\n        \"husbandNameRequired\":\"1\",\n        \"husbandAge\":\"30\",\n        \"husbandAgeRequired\":\"1\",\n        \"husbandPhone\":\"13292333333\",\n        \"husbandPhoneRequired\":\"1\",\n        \"pregnantTime\":\"1\",\n        \"pregnantTimeRequired\":\"1\",\n        \"productionTime\":\"剖宫产1次\",\n        \"productionTimeRequired\":\"1\",\n        \"lastMenstruation\":\"2017-10-10\",\n        \"lastMenstruationRequired\":\"1\",\n        \"dueDate\":\"2018-10-10\",\n        \"dueDateRequired\":\"1\",\n        \"pastHistory\":\"无\",\n        \"pastHistoryRequired\":\"1\",\n        \"personalHistory\":\"贫血\",\n        \"personalHistoryRequired\":\"1\",\n        \"historyOfSurgery\":\"无\",\n        \"historyOfSurgeryRequired\":\"1\",\n        \"pregnancyHistory\":\"自然流产\",\n        \"pregnancyHistoryRequired\":\"1\",\n        \"height\":\"154\",\n        \"heightRequired\":\"1\",\n        \"weight\":\"154\",\n        \"weightRequired\":\"1\",\n        \"weight\":\"15kg/m2\",\n        \"weightRequired\":\"1\",\n        \"bloodPressure\":\"139/69mmHg\",\n        \"bloodPressureRequired\":\"1\",\n        \"heart\":\"未见异常\",\n        \"heartRequired\":\"1\",\n        \"lungs\":\"未见异常\",\n        \"lungsRequired\":\"1\",\n        \"vulva\":\"未见异常\",\n        \"vulvaRequired\":\"1\",\n        \"cervical\":\"未见异常\",\n        \"cervicalRequired\":\"1\",\n        \"enclosure\":\"未见异常\",\n        \"enclosureRequired\":\"1\",\n        \"vagina\":\"未见异常\",\n        \"vaginaRequired\":\"1\",\n        \"enclosure\":\"未见异常\",\n        \"enclosureRequired\":\"1\",\n        \"hemoglobin\":\"112\",\n        \"hemoglobinRequired\":\"1\",\n        \"leucocyte\":\"112\",\n        \"leucocyteRequired\":\"1\",\n        \"thrombocytopenia\":\"112\",\n        \"thrombocytopeniaRequired\":\"1\",\n        \"bloodOther\":\"112\",\n        \"bloodOtherRequired\":\"1\",\n        \"proteinuria\":\"12\",\n        \"proteinuriaRequired\":\"1\",\n        \"urine\":\"12\",\n        \"urineRequired\":\"1\",\n        \"ketone\":\"12\",\n        \"ketoneRequired\":\"1\",\n        \"bld\":\"12\",\n        \"bldRequired\":\"1\",\n        \"urineOther\":\"12\",\n        \"urineOtherRequired\":\"1\",\n        \"bloodType\":\"o\",\n        \"bloodTypeRequired\":\"1\",\n        \"bloodSugar\":\"8mmol/L\",\n        \"bloodSugarRequired\":\"1\",\n        \"seropropane\":\"2\",\n        \"seropropaneRequired\":\"1\",\n        \"aminotransferase\":\"2\",\n        \"aminotransferaseRequired\":\"1\",\n        \"bloodProtein\":\"2\",\n        \"bloodProteinRequired\":\"1\",\n        \"totalBilirubin\":\"2\",\n        \"totalBilirubinRequired\":\"1\",\n        \"bilirubin\":\"2\",\n        \"bilirubinRequired\":\"1\",\n        \"serumCreatinine\":\"1\",\n        \"serumCreatinineRequired\":\"1\",\n        \"bloodUrea\":\"1\",\n        \"bloodUreaRequired\":\"1\",\n        \"vaginalSecretions\":\"未见异常\",\n        \"vaginalSecretionsRequired\":\"1\",\n        \"vaginaCleanliness\":\"I\",\n        \"vaginaCleanlinessRequired\":\"1\",\n        \"surfaceAntigen\":\"+\",\n        \"surfaceAntigenRequired\":\"1\",\n        \"surfaceAntibody\":\"+\",\n        \"surfaceAntibodyRequired\":\"1\",\n        \"EAntigen\":\"+\",\n        \"EAntigenRequired\":\"1\",\n        \"EAntibody\":\"+\",\n        \"EAntibodyRequired\":\"1\",\n        \"coreAntibody\":\"+\",\n        \"coreAntibodyRequired\":\"1\",\n        \"serological\":\"阴性\",\n        \"serologicalRequired\":\"1\",\n        \"HIV\":\"阴性\",\n        \"HIVRequired\":\"1\",\n        \"BUltrasound\":\"有\",\n        \"BUltrasoundRequired\":\"1\",\n        \"overallAssessment\":\"未见异常\",\n        \"overallAssessmentRequired\":\"1\",\n        \"referralAdvice\":\"无\",\n        \"referralAdviceRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/203984u.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "03_Maternal"
  },
  {
    "group": "03_Maternal",
    "type": "GET",
    "url": "pregnantNTimesFollowUp",
    "title": "03、第2~5次产前随访服务记录表",
    "version": "1.0.0",
    "name": "pregnantNTimesFollowUp_03__2_5__________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "times",
            "description": "<p>第几次（前端校验第几次随访，5次以后不显示，提交入口，后台同样校验）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantWeeks",
            "description": "<p>孕周</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantWeeksRequired",
            "description": "<p>孕周是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mainComplaint",
            "description": "<p>主 诉</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mainComplaintRequired",
            "description": "<p>主 诉是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fundusHeight",
            "description": "<p>宫底高度</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fundusHeightRequired",
            "description": "<p>宫底高度是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdominalCircumference",
            "description": "<p>腹 围</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdominalCircumferenceRequired",
            "description": "<p>腹 围是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "babyPosition",
            "description": "<p>胎 位</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "babyPositionRequired",
            "description": "<p>胎 位是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fetalHeartRate",
            "description": "<p>胎心率</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fetalHeartRateRequired",
            "description": "<p>胎心率是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressure",
            "description": "<p>血 压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressureRequired",
            "description": "<p>血 压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobin",
            "description": "<p>血红蛋白</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinRequired",
            "description": "<p>血红蛋白是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urineProtein",
            "description": "<p>尿蛋白</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urineProteinRequired",
            "description": "<p>尿蛋白是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他辅助检查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他辅助检查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>分 类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>分 类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdvice",
            "description": "<p>转诊建议</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralAdviceRequired",
            "description": "<p>转诊建议是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidance",
            "description": "<p>指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "guidanceRequired",
            "description": "<p>指导是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"times\":\"2\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-01-09\",\n        \"followUpDateRequired\":\"1\",\n        \"pregnantWeeks\":\"40\",\n        \"pregnantWeeksRequired\":\"1\",\n        \"mainComplaint\":\"无\",\n        \"mainComplaintRequired\":\"1\",\n        \"fundusHeight\":\"50\",\n        \"fundusHeightRequired\":\"1\",\n        \"weight\":\"50\",\n        \"weightRequired\":\"1\",\n        \"abdominalCircumference\":\"100\",\n        \"abdominalCircumferenceRequired\":\"1\",\n        \"babyPosition\":\"头\",\n        \"babyPositionRequired\":\"1\",\n        \"fetalHeartRate\":\"140\",\n        \"fetalHeartRateRequired\":\"1\",\n        \"bloodPressure\":\"136/90\",\n        \"bloodPressureRequired\":\"1\",\n        \"hemoglobin\":\"114\",\n        \"hemoglobinRequired\":\"1\",\n        \"urineProtein\":\"12\",\n        \"urineProteinRequired\":\"1\",\n        \"other\":\"未见异常\",\n        \"otherRequired\":\"1\",\n        \"classification\":\"未见异常\",\n        \"classificationRequired\":\"1\",\n        \"prevalence\":\"无\",\n        \"prevalenceRequired\":\"1\",\n        \"referralAdvice\":\"无\",\n        \"referralAdviceRequired\":\"1\",\n        \"guidance\":\"科学喂养\",\n        \"guidance\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/230984.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "03_Maternal"
  },
  {
    "group": "03_Maternal",
    "type": "GET",
    "url": "pregnantWomanBaseInformation",
    "title": "01、孕妇基本信息",
    "version": "1.0.0",
    "name": "pregnantWomanBaseInformation_01_______",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantName",
            "description": "<p>孕妇姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantNameRequired",
            "description": "<p>孕妇姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantNumber",
            "description": "<p>孕妇卡号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantNumberRequired",
            "description": "<p>孕妇卡号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantCard",
            "description": "<p>孕妇身份证号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantCardRequired",
            "description": "<p>孕妇身份证号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantAge",
            "description": "<p>孕妇年龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantAgeRequired",
            "description": "<p>孕妇年龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantEducation",
            "description": "<p>孕妇文化程度</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantEducationRequired",
            "description": "<p>孕妇文化程度是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantOccupation",
            "description": "<p>孕妇职业</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantOccupationRequired",
            "description": "<p>孕妇职业是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantPhone",
            "description": "<p>孕妇电话</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantPhoneRequired",
            "description": "<p>孕妇电话是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantNation",
            "description": "<p>孕妇民族</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantNationRequired",
            "description": "<p>孕妇民族是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantResidence",
            "description": "<p>孕妇户口所在地</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantResidenceRequired",
            "description": "<p>孕妇户口所在地是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantPresentPlace",
            "description": "<p>孕妇现住地</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantPresentPlaceRequired",
            "description": "<p>孕妇现住地是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "postpartumPlace",
            "description": "<p>产后休养地</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "postpartumPlaceRequired",
            "description": "<p>产后休养地是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantWorkUnit",
            "description": "<p>孕妇工作单位</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pregnantWorkUnitRequired",
            "description": "<p>孕妇工作单位是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandName",
            "description": "<p>丈夫姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandNameRequired",
            "description": "<p>丈夫姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandAge",
            "description": "<p>丈夫年龄</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandAgeRequired",
            "description": "<p>丈夫年龄是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandPhone",
            "description": "<p>丈夫手机号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandPhoneRequired",
            "description": "<p>丈夫手机号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandEducation",
            "description": "<p>丈夫文化程度</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandEducationRequired",
            "description": "<p>丈夫文化程度是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandOccupation",
            "description": "<p>丈夫职业</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandOccupationRequired",
            "description": "<p>丈夫职业是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandNation",
            "description": "<p>丈夫民族</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandRequired",
            "description": "<p>丈夫民族是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandWorkUnit",
            "description": "<p>丈夫工作单位</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "husbandWorkUnitRequired",
            "description": "<p>丈夫工作单位是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"pregnantName\":\"张三\",\n        \"pregnantNameRequired\":\"0\",\n        \"pregnantNumber\":\"00999888888\",\n        \"pregnantNumberRequired\":\"0\",\n        \"pregnantCard\":\"320722188888888888\",\n        \"pregnantCardRequired\":\"1\",\n        \"pregnantAge\":\"30\",\n        \"pregnantAgeRequired\":\"1\",\n        \"pregnantEducation\":\"本科\",\n        \"pregnantEducationRequired\":\"1\",\n        \"pregnantOccupation\":\"科员\",\n        \"pregnantOccupationRequired\":\"1\",\n        \"pregnantPhone\":\"13291332878\",\n        \"pregnantPhoneRequired\":\"1\",\n        \"pregnantNation\":\"汉\",\n        \"pregnantNationRequired\":\"1\",\n        \"pregnantResidence\":\"江苏常州\",\n        \"pregnantResidenceRequired\":\"1\",\n        \"pregnantPresentPlace\":\"武进区牛汤证\",\n        \"pregnantPresentPlaceRequired\":\"1\",\n        \"pregnantWorkUnit\":\"武进纺织有限公司\",\n        \"pregnantWorkUnitRequired\":\"1\",\n        \"husbandName\":\"张三\",\n        \"husbandNameRequired\":\"1\",\n        \"husbandAge\":\"30\",\n        \"husbandAgeRequired\":\"1\",\n        \"husbandPhone\":\"13292333333\",\n        \"husbandPhoneRequired\":\"1\",\n        \"husbandEducation\":\"职员\",\n        \"husbandEducationRequired\":\"1\",\n        \"husbandEducation\":\"本科\",\n        \"husbandEducationquired\":\"1\",\n        \"husbandNation\":\"汉族\",\n        \"husbandNationRequired\":\"1\",\n        \"husbandWorkUnit\":\"中科大有限公司\",\n        \"husbandWorkUnitRequired\":\"1\",\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "03_Maternal"
  },
  {
    "group": "04_OldPeople",
    "type": "GET",
    "url": "oldPeopleAbility",
    "title": "01、老年人生活自理能力评估表",
    "version": "1.0.0",
    "name": "oldPeopleAbility_01_____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "toiletRequired",
            "description": "<p>如厕（1必填 0非必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "toiletValue",
            "description": "<p>等级（1可自理 2轻度依赖 3中度依赖 4不能自理）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "toilet",
            "description": "<p>如厕分数（0 1 5 10）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dressingRequired",
            "description": "<p>穿衣（1必填 0非必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dressingValue",
            "description": "<p>等级（1可自理 2轻度依赖 3中度依赖 4不能自理）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dressing",
            "description": "<p>穿衣分数（0 0 3 5）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mealRequired",
            "description": "<p>进餐（1必填 0非必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mealValue",
            "description": "<p>等级（1可自理 2轻度依赖 3中度依赖 4不能自理）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "meal",
            "description": "<p>进餐分数（0 0 3 5）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fresheningRequired",
            "description": "<p>梳洗（1必填 0非必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fresheningValue",
            "description": "<p>等级（1可自理 2轻度依赖 3中度依赖 4不能自理）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "freshening",
            "description": "<p>梳洗分数（0 1 3 5）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "avtivityRequired",
            "description": "<p>活动（1必填 0非必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "activityValue",
            "description": "<p>等级（1可自理 2轻度依赖 3中度依赖 4不能自理）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>活动分数（0 1 5 10）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名（1必填 0非必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": ""
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "totalScore",
            "description": "<p>总分</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureUrlOne",
            "description": "<p>合照图片一</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureUrlTwo",
            "description": "<p>合照图片二</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>记录状态（1正常 0删除）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n   \"errcode\": 200,\n   \"data\": {\n       \"toiletRequired\": \"1\",\n       \"toiletValue\": \"1\",\n       \"toilet\": \"0\",\n       \"dressingRequired\": \"1\",\n       \"dressingValue\": \"1\",\n       \"dressing\": \"0\",\n       \"mealRequired\": \"1\",\n       \"mealValue\": \"1\",\n       \"meal\": \"0\",\n       \"fresheningRequired\": \"1\",\n       \"fresheningValue\": \"1\",\n       \"freshening\": \"0\",\n       \"avtivityRequired\": \"1\",\n       \"activityValue\": \"1\",\n       \"activity\": \"0\",\n       \"nameRequired\": \"1\",\n       \"name\": \"唐山\",\n       \"numberRequired\": \"1\",\n       \"number\": \"\",\n       \"fileNumber\": \"\",\n       \"totalScore\": \"0\",\n       \"pictureUrlOne\": \"\",\n       \"pictureUrlTwo\": \"\",\n       \"status\": 1\n   },\n   \"errmsg\": \"success\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "04_OldPeople"
  },
  {
    "group": "04_OldPeople",
    "type": "GET",
    "url": "oldPeopleHealthManagement",
    "title": "02、老年人中医药健康管理服务记录表",
    "version": "1.0.0",
    "name": "oldPeopleHealthManagement_02________________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sublingualVeinStasisPurpleOrThickeningRequired",
            "description": "<p>舌下静脉瘀紫或增粗(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "afterEatingColdFoodWillBeUncomfortable",
            "description": "<p>吃喝了凉的后会不舒服(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "coldHandsAndFeet",
            "description": "<p>手脚发凉(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "brownPatchesOnFace",
            "description": "<p>面色出现褐色斑块(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feelUnhappyRequired",
            "description": "<p>心情不愉快(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "thickAndGreasyTongue",
            "description": "<p>舌苔厚腻(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "limbsNumbnessRequired",
            "description": "<p>肢体麻木(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名图片地址(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "backOrWaistAndKneesColdRequired",
            "description": "<p>背部或腰膝部怕冷(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryStoolRequired",
            "description": "<p>大便干燥(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skinEczemaSoresRequired",
            "description": "<p>皮肤湿疹、疮疖(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "thickAndGreasyTongueRequired",
            "description": "<p>舌苔厚腻(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "brownPatchesOnFaceRequired",
            "description": "<p>面色出现褐色斑块(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "excessiveBodyRequired",
            "description": "<p>身体超重(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "noEnergyToSpeak",
            "description": "<p>话没力气(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "noEnergyToSpeakRequired",
            "description": "<p>话没力气(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryLipsOrDrySkinRequired",
            "description": "<p>皮肤或口唇干(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryMouthAndThroatRequired",
            "description": "<p>口干咽燥(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryStool",
            "description": "<p>大便干燥(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "easyToFeelScared",
            "description": "<p>感到害怕(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "facialGreasy",
            "description": "<p>面部油腻(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sleepSnoringRequired",
            "description": "<p>睡眠打鼾(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryLipsOrDrySkin",
            "description": "<p>皮肤或口唇干(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sublingualVeinStasisPurpleOrThickening",
            "description": "<p>舌下静脉瘀紫或增粗(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "anxiety",
            "description": "<p>焦虑不安(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fullOfEnergy",
            "description": "<p>精力充沛(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdominalHypertrophyRequired",
            "description": "<p>腹部肥大(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "canNotStandTheCold",
            "description": "<p>受不了寒冷(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "coldHandsAndFeetRequired",
            "description": "<p>手脚发凉(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stoolStickyRequired",
            "description": "<p>大便黏滞(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feelLonelyRequired",
            "description": "<p>感到孤独(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureUrlTwo",
            "description": "<p>医生用户合照2</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "anxietyRequired",
            "description": "<p>焦虑不安(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "limbsNumbness",
            "description": "<p>肢体麻木(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "excessiveBody",
            "description": "<p>身体超重(1BMI＜24 224≤BMI＜25 325≤BMI＜26 426≤BMI＜28 5BMI≥28)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "abdominalHypertrophy",
            "description": "<p>腹部肥大(1腹围&lt;80cm，相当于2.4尺 2腹围80-85cm，2.4-2.55尺 3腹围86-90cm，2.56-2.7尺 4腹围1-105cm，2.71-3.15尺 5腹围&gt;105cm或3.15尺)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sleepSnoring",
            "description": "<p>睡眠打鼾(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>记录状态(1正常 0删除)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "easyToFatigueRequired",
            "description": "<p>容易疲乏(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "easyToFeelScaredRequired",
            "description": "<p>感到害怕(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "badBreathRequired",
            "description": "<p>嘴里有异味(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "skinEczemaSores",
            "description": "<p>皮肤湿疹、疮疖(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feelUnhappy",
            "description": "<p>心情不愉快(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "scratches",
            "description": "<p>皮肤一抓就红(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "shortnessOfBreathRequired",
            "description": "<p>呼吸短促(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "facialGreasyRequired",
            "description": "<p>面部油腻(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "badBreath",
            "description": "<p>嘴里有异味(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryMouthAndThroat",
            "description": "<p>口干咽燥(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberOfColdEveryYear",
            "description": "<p>每年感冒的次数(1一年＜2次 2一年感冒2-4次 3一年感冒5-6次 4一年8次以上 5几乎每月)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureUrlOne",
            "description": "<p>医生用户合照1</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cymbidiumBruiseSubcutaneousBleeding",
            "description": "<p>出现青紫瘀斑、皮下出血(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "createDate",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urticariaRequired",
            "description": "<p>容易起荨麻疹(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "easilyAllergic",
            "description": "<p>容易过敏(1从来没有 2一年1、2次 3一年3、4次 4一年5、6次 5每次遇到上述原因都过敏)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nasalCongestionRunnyNose",
            "description": "<p>鼻塞、流鼻涕(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nasalCongestionRunnyNoseRequired",
            "description": "<p>鼻塞、流鼻涕(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "cymbidiumBruiseSubcutaneousBleedingRequired",
            "description": "<p>出现青紫瘀斑、皮下出血(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryEyesRequired",
            "description": "<p>眼睛干涩(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "canNotStandTheColdRequired",
            "description": "<p>受不了寒冷(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberOfColdEveryYearRequired",
            "description": "<p>每年感冒的次数(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "afterEatingColdFoodWillBeUncomfortableRequired",
            "description": "<p>吃喝了凉的后会不舒服(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dryEyes",
            "description": "<p>眼睛干涩(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "backOrWaistAndKneesCold",
            "description": "<p>背部或腰膝部怕冷(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "easilyAllergicRequired",
            "description": "<p>容易过敏(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "easyToFatigue",
            "description": "<p>容易疲乏(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "scratchesRequired",
            "description": "<p>皮肤一抓就红(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "feelLonely",
            "description": "<p>感到孤独(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "urticaria",
            "description": "<p>容易起荨麻疹(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "shortnessOfBreath",
            "description": "<p>呼吸短促(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fullOfEnergyRequired",
            "description": "<p>精力充沛(1必填 0非必填)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stoolSticky",
            "description": "<p>大便黏滞(1没有 2很少 3有时 4经常 5总是)</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "physiqueList",
            "description": "<p>体质列表（一个体质可能对应多个问题，具体算法后台控制）</p>"
          }
        ],
        "physiqueList数组元素对象属性": [
          {
            "group": "physiqueList数组元素对象属性",
            "type": "String",
            "optional": false,
            "field": "physiqueIdentification",
            "description": "<p>体质辨识（1得分；2是；3倾向是）</p>"
          },
          {
            "group": "physiqueList数组元素对象属性",
            "type": "String",
            "optional": false,
            "field": "physiqueScore",
            "description": "<p>体质分数</p>"
          },
          {
            "group": "physiqueList数组元素对象属性",
            "type": "String",
            "optional": false,
            "field": "healthGuidance",
            "description": "<p>保健指导</p>"
          },
          {
            "group": "physiqueList数组元素对象属性",
            "type": "String",
            "optional": false,
            "field": "physiqueName",
            "description": "<p>体质名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n   \"errcode\": 200,\n   \"data\": {\n       \"sublingualVeinStasisPurpleOrThickeningRequired\": \"1\",\n       \"afterEatingColdFoodWillBeUncomfortable\": \"3\",\n       \"coldHandsAndFeet\": \"4\",\n       \"brownPatchesOnFace\": \"3\",\n       \"fileNumber\": \"\",\n       \"feelUnhappyRequired\": \"1\",\n       \"doctorSignNameImageUrlRequired\": \"1\",\n       \"thickAndGreasyTongue\": \"3\",\n       \"limbsNumbnessRequired\": \"1\",\n       \"number\": \"\",\n       \"backOrWaistAndKneesColdRequired\": \"1\",\n       \"dryStoolRequired\": \"1\",\n       \"skinEczemaSoresRequired\": \"1\",\n       \"thickAndGreasyTongueRequired\": \"1\",\n       \"brownPatchesOnFaceRequired\": \"1\",\n       \"excessiveBodyRequired\": \"1\",\n       \"noEnergyToSpeak\": \"3\",\n       \"noEnergyToSpeakRequired\": \"1\",\n       \"dryLipsOrDrySkinRequired\": \"1\",\n       \"dryMouthAndThroatRequired\": \"1\",\n       \"dryStool\": \"3\",\n       \"easyToFeelScared\": \"3\",\n       \"facialGreasy\": \"3\",\n       \"sleepSnoringRequired\": \"1\",\n       \"dryLipsOrDrySkin\": \"3\",\n       \"sublingualVeinStasisPurpleOrThickening\": \"3\",\n       \"anxiety\": \"3\",\n       \"fullOfEnergy\": \"3\",\n       \"abdominalHypertrophyRequired\": \"1\",\n       \"canNotStandTheCold\": \"4\",\n       \"coldHandsAndFeetRequired\": \"1\",\n       \"stoolStickyRequired\": \"1\",\n       \"feelLonelyRequired\": \"1\",\n       \"numberRequired\": \"1\",\n       \"pictureUrlTwo\": \"\",\n       \"anxietyRequired\": \"1\",\n       \"limbsNumbness\": \"3\",\n       \"name\": \"慕容雨\",\n       \"excessiveBody\": \"3\",\n       \"abdominalHypertrophy\": \"3\",\n       \"sleepSnoring\": \"3\",\n       \"status\": 1,\n       \"easyToFatigueRequired\": \"1\",\n       \"easyToFeelScaredRequired\": \"1\",\n       \"badBreathRequired\": \"1\",\n       \"skinEczemaSores\": \"3\",\n       \"feelUnhappy\": \"3\",\n       \"scratches\": \"2\",\n       \"shortnessOfBreathRequired\": \"1\",\n       \"facialGreasyRequired\": \"1\",\n       \"badBreath\": \"3\",\n       \"dryMouthAndThroat\": \"3\",\n       \"numberOfColdEveryYear\": \"3\",\n       \"pictureUrlOne\": \"http://192.168.10.14:8099/open/file/download?data=M80%2FCELarJLLVuHx7ebBTTPL9DV0tTTlx0bocjvRWkAFIdWeIaWif1cAU059yW8G\",\n       \"cymbidiumBruiseSubcutaneousBleeding\": \"3\",\n       \"createDate\": \"2018-09-05\",\n       \"urticariaRequired\": \"1\",\n       \"easilyAllergic\": \"3\",\n       \"nasalCongestionRunnyNose\": \"3\",\n       \"nasalCongestionRunnyNoseRequired\": \"1\",\n       \"physiqueList\": [\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"12\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"气虚质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"14\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"阳虚质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"13\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"阴虚质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"12\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"痰湿质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"12\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"湿热质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"12\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"血瘀质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"12\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"气郁质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"11\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"特禀质\"\n           },\n           {\n               \"physiqueIdentification\": \"是\",\n               \"physiqueScore\": \"14\",\n               \"healthGuidance\": \"\",\n               \"physiqueName\": \"平和质\"\n           }\n       ],\n       \"cymbidiumBruiseSubcutaneousBleedingRequired\": \"1\",\n       \"doctorSignNameImageUrl\": \"http://192.168.10.14:8099/open/file/download?data=M80%2FCELarJLLVuHx7ebBTd7OXvY5VZNa2Jm3pV6GYi5ZOOgW4cHRXJK5E4FoKB81\",\n       \"nameRequired\": \"1\",\n       \"dryEyesRequired\": \"1\",\n       \"canNotStandTheColdRequired\": \"1\",\n       \"numberOfColdEveryYearRequired\": \"1\",\n       \"afterEatingColdFoodWillBeUncomfortableRequired\": \"1\",\n       \"dryEyes\": \"4\",\n       \"backOrWaistAndKneesCold\": \"3\",\n       \"easilyAllergicRequired\": \"1\",\n       \"easyToFatigue\": \"3\",\n       \"scratchesRequired\": \"1\",\n       \"feelLonely\": \"3\",\n       \"urticaria\": \"3\",\n       \"shortnessOfBreath\": \"3\",\n       \"fullOfEnergyRequired\": \"1\",\n       \"stoolSticky\": \"3\"\n   },\n   \"errmsg\": \"success\"\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "04_OldPeople"
  },
  {
    "group": "05_HighBloodPressure",
    "type": "GET",
    "url": "highBloodPressureFollowUp",
    "title": "01、高血压患者随访服务记录表",
    "version": "1.0.0",
    "name": "highBloodPressureFollowUp_01_____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "symptomRequired",
            "description": "<p>症 状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPress",
            "description": "<p>血压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressRequired",
            "description": "<p>血压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetWeight",
            "description": "<p>目标体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BMI",
            "description": "<p>体质指数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetBMI",
            "description": "<p>目标体质指数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BMIRequired",
            "description": "<p>体质指数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartRate",
            "description": "<p>心率</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartRateRequired",
            "description": "<p>心率是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmoking",
            "description": "<p>日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailySmoking",
            "description": "<p>下次目标日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmokingRequired",
            "description": "<p>日吸烟量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrink",
            "description": "<p>日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailyDrink",
            "description": "<p>下次目标日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrinkRequired",
            "description": "<p>日饮酒量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "motion",
            "description": "<p>运动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "targetMotion",
            "description": "<p>下次目标运动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionRequired",
            "description": "<p>运动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "saltUptake",
            "description": "<p>摄盐情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetSaltUptake",
            "description": "<p>目标摄盐情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "saltUptakeRequired",
            "description": "<p>摄盐情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychological",
            "description": "<p>心理调整</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalRequired",
            "description": "<p>心理调整是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehavior",
            "description": "<p>遵医行为</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehaviorRequired",
            "description": "<p>遵医行为是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherExamination",
            "description": "<p>其他辅助检查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherExaminationRequired",
            "description": "<p>其他辅助检查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugCompliance",
            "description": "<p>服药依从性</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugComplianceRequired",
            "description": "<p>服药依从性查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReactionRequired",
            "description": "<p>药物不良反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>此次随访分类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>此次随访分类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "drugList",
            "description": "<p>用药情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugRequired",
            "description": "<p>用药情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "symptom对象属性": [
          {
            "group": "symptom对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "symptom对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          }
        ],
        "motion对象属性": [
          {
            "group": "motion对象属性",
            "type": "String",
            "optional": false,
            "field": "motionWeeks",
            "description": "<p>运动(次/周)</p>"
          },
          {
            "group": "motion对象属性",
            "type": "String",
            "optional": false,
            "field": "motionTimes",
            "description": "<p>运动(分钟/次)</p>"
          }
        ],
        "targetMotion对象属性": [
          {
            "group": "targetMotion对象属性",
            "type": "String",
            "optional": false,
            "field": "targetMotionWeeks",
            "description": "<p>下次目标运动(次/周)</p>"
          },
          {
            "group": "targetMotion对象属性",
            "type": "String",
            "optional": false,
            "field": "targetMotionTimes",
            "description": "<p>下次目标运动(分钟/次)</p>"
          }
        ],
        "drugList元素对象属性": [
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"symptom\":{\n            \"symptom\":\"1,2,3\",\n            \"other\":\"无\"\n        },\n        \"symptomRequired\":\"1\",\n        \"bloodPress\":\"0\",\n        \"bloodPressRequired\":\"1\",\n        \"weight\":\"0\",\n        \"targetWeight\":\"0\",\n        \"weightRequired\":\"1\",\n        \"BMI\":\"0\",\n        \"targetBMI\":\"0\",\n        \"BMIRequired\":\"1\",\n        \"heartRate\":\"0\",\n        \"heartRateRequired\":\"1\",\n        \"other\":\"0\",\n        \"otherRequired\":\"1\",\n        \"dailySmoking\":\"无\",\n        \"targetDailySmoking\":\"无\",\n        \"dailySmokingRequired\":\"1\",\n        \"dailyDrink\":\"无\",\n        \"targetDailyDrink\":\"无\",\n        \"dailyDrinkRequired\":\"1\",\n        \"motion\":{\n            \"motionWeeks\":\"2次/周\",\n            \"motionTimes\":\"20分钟/次\"\n        },\n        \"targetMotion\":{\n            \"targetMotionWeeks\":\"2次/周\",\n            \"targetMotionTimes\":\"20分钟/次\"\n        },\n        \"motionRequired\":\"1\",\n        \"saltUptake\":\"中\",\n        \"targetSaltUptake\":\"中\",\n        \"saltUptakeRequired\":\"1\",\n        \"psychological\":\"中\",\n        \"psychologicalRequired\":\"1\",\n        \"complianceBehavior\":\"中\",\n        \"complianceBehaviorRequired\":\"1\",\n        \"otherExamination\":\"无\",\n        \"otherExaminationRequired\":\"1\",\n        \"drugCompliance\":\"无\",\n        \"drugComplianceRequired\":\"1\",\n        \"adverseDrugReaction\":\"无\",\n        \"adverseDrugReactionRequired\":\"1\",\n        \"classification\":\"控制满意\",\n        \"classificationRequired\":\"1\",\n        \"drugList\":[{\n            \"drugName\":\"药物名称\",\n            \"drugTimes\":\"3\",\n            \"drugConsumption\":\"1片\"\n        }],\n        \"referralReason\":\"无\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"红糖卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrl\":\"http://img.gagctv.com/203948.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "05_HighBloodPressure"
  },
  {
    "group": "06_Diabetes",
    "type": "GET",
    "url": "diabetesFollowUp",
    "title": "01、2型糖尿病患者随访服务记录表",
    "version": "1.0.0",
    "name": "diabetesFollowUp_01_2_____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "symptomRequired",
            "description": "<p>症 状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPress",
            "description": "<p>血压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressRequired",
            "description": "<p>血压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetWeight",
            "description": "<p>目标体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BMI",
            "description": "<p>体质指数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetBMI",
            "description": "<p>目标体质指数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "BMIRequired",
            "description": "<p>体质指数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pulse",
            "description": "<p>足背动脉搏动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pulseRequired",
            "description": "<p>足背动脉搏动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmoking",
            "description": "<p>日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailySmoking",
            "description": "<p>下次目标日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmokingRequired",
            "description": "<p>日吸烟量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrink",
            "description": "<p>日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailyDrink",
            "description": "<p>下次目标日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrinkRequired",
            "description": "<p>日饮酒量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "motion",
            "description": "<p>运动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "targetMotion",
            "description": "<p>下次目标运动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionRequired",
            "description": "<p>运动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stapleFood",
            "description": "<p>主食</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetStapleFood",
            "description": "<p>目标主食</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stapleFoodRequired",
            "description": "<p>主食是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychological",
            "description": "<p>心理调整</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalRequired",
            "description": "<p>心理调整是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehavior",
            "description": "<p>遵医行为</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehaviorRequired",
            "description": "<p>遵医行为是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodGlucose",
            "description": "<p>空腹血糖值</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodGlucoseRequired",
            "description": "<p>空腹血糖值是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobin",
            "description": "<p>糖化血红蛋白</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hemoglobinRequired",
            "description": "<p>糖化血红蛋白是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>检查日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateRequired",
            "description": "<p>检查日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugCompliance",
            "description": "<p>服药依从性</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugComplianceRequired",
            "description": "<p>服药依从性查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReactionRequired",
            "description": "<p>药物不良反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hypoglycemia",
            "description": "<p>低血糖反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hypoglycemiaRequired",
            "description": "<p>低血糖反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>此次随访分类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>此次随访分类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "drugList",
            "description": "<p>用药情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugRequired",
            "description": "<p>用药情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "insulinType",
            "description": "<p>胰岛素种类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "insulinTypeRequired",
            "description": "<p>胰岛素种类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "insulinDosage",
            "description": "<p>胰岛素用法和用量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "insulinDosageRequired",
            "description": "<p>胰岛素用法和用量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "symptom对象属性": [
          {
            "group": "symptom对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "symptom对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          }
        ],
        "motion元素对象属性": [
          {
            "group": "motion元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionWeeks",
            "description": "<p>运动(次/周)</p>"
          },
          {
            "group": "motion元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionTimes",
            "description": "<p>运动(分钟/次)</p>"
          }
        ],
        "targetMotion对象属性": [
          {
            "group": "targetMotion对象属性",
            "type": "String",
            "optional": false,
            "field": "targetMotionWeeks",
            "description": "<p>下次目标运动(次/周)</p>"
          },
          {
            "group": "targetMotion对象属性",
            "type": "String",
            "optional": false,
            "field": "targetMotionTimes",
            "description": "<p>下次目标运动(分钟/次)</p>"
          }
        ],
        "drugList元素对象属性": [
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"symptom\":{\n            \"symptom\":\"1,2,3\",\n            \"other\":\"无\"\n        },\n        \"symptomRequired\":\"1\",\n        \"bloodPress\":\"0\",\n        \"bloodPressRequired\":\"1\",\n        \"weight\":\"0\",\n        \"targerWeight\":\"0\",\n        \"weightRequired\":\"1\",\n        \"BMI\":\"0\",\n        \"targetBMI\":\"0\",\n        \"BMIRequired\":\"1\",\n        \"pulse\":\"0\",\n        \"pulseRequired\":\"1\",\n        \"bloodGlucose\":\"6\",\n        \"bloodGlucoseRequired\":\"1\",\n        \"other\":\"无\",\n        \"otherRequired\":\"1\",\n        \"hemoglobin\":\"23\",\n        \"hemoglobingRequired\":\"1\",\n        \"date\":\"2017-01-01\",\n        \"dategRequired\":\"1\",\n        \"dailySmoking\":\"无\",\n        \"targetDailySmoking\":\"无\",\n        \"dailySmokingRequired\":\"1\",\n        \"dailyDrink\":\"无\",\n        \"targetDailyDrink\":\"无\",\n        \"dailyDrinkRequired\":\"1\",\n        \"motion\":{\n            \"motionWeeks\":\"2次/周\",\n            \"motionTimes\":\"20分钟/次\"\n        },\n        \"targetMotion\":{\n            \"targetMotionWeeks\":\"2次/周\",\n            \"targetMotionTimes\":\"20分钟/次\"\n        },\n        \"motionRequired\":\"1\",\n        \"stapleFood\":\"中\",\n        \"targetStapleFood\":\"中\",\n        \"stapleFoodRequired\":\"1\",\n        \"psychological\":\"中\",\n        \"psychologicalRequired\":\"1\",\n        \"complianceBehavior\":\"中\",\n        \"complianceBehaviorRequired\":\"1\",\n        \"drugCompliance\":\"无\",\n        \"drugComplianceRequired\":\"1\",\n        \"adverseDrugReaction\":\"无\",\n        \"adverseDrugReactionRequired\":\"1\",\n        \"hypoglycemia\":\"偶尔\",\n        \"hypoglycemiaRequired\":\"1\",\n        \"classification\":\"控制满意\",\n        \"classificationRequired\":\"1\",\n        \"drugList\":[{\n            \"drugName\":\"药物名称\",\n            \"drugTimes\":\"3\",\n            \"drugConsumption\":\"1片\"\n        }],\n        \"insulinType\":\"无\",\n        \"insulinTypeRequired\":\"1\",\n        \"insulinDosage\":\"12\",\n        \"insulinDosageRequired\":\"1\",\n        \"referralReason\":\"无\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"红糖卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/o32u.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "06_Diabetes"
  },
  {
    "group": "07_MentalDisorder",
    "type": "GET",
    "url": "mentalDisorderFollowUp",
    "title": "02、严重精神障碍患者随访服务记录表",
    "version": "1.0.0",
    "name": "mentalDisorderFollowUp_02________________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "reason",
            "description": "<p>失访原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "reasonRequired",
            "description": "<p>失访原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "deathDate",
            "description": "<p>死亡日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "deathDateRequired",
            "description": "<p>死亡日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "deathReason",
            "description": "<p>死亡原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "deathReasonRequired",
            "description": "<p>死亡原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "riskAssessment",
            "description": "<p>危险性评估</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "riskAssessmentRequired",
            "description": "<p>危险性评估是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "currentSymptoms",
            "description": "<p>目前症状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "currentSymptomsRequired",
            "description": "<p>目前症状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "insight",
            "description": "<p>自知力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "insightRequired",
            "description": "<p>自知力是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sleepCondition",
            "description": "<p>睡眠情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sleepConditionRequired",
            "description": "<p>睡眠情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "diet",
            "description": "<p>饮食情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dietRequired",
            "description": "<p>饮食情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lifeCuisine",
            "description": "<p>个人生活料理</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lifeCuisineRequired",
            "description": "<p>个人生活料理是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "housework",
            "description": "<p>家务劳动</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "houseworkRequired",
            "description": "<p>家务劳动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "work",
            "description": "<p>生产劳动及工作</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "workRequired",
            "description": "<p>生产劳动及工作是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "study",
            "description": "<p>学习能力</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "studyRequired",
            "description": "<p>学习能力是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "socialContact",
            "description": "<p>社会人际交往</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "socialContactRequired",
            "description": "<p>社会人际交往是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mildTrouble",
            "description": "<p>轻度滋事</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mildTroubleRequired",
            "description": "<p>轻度滋事是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "accident",
            "description": "<p>肇事</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "accidentRequired",
            "description": "<p>肇事是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "trouble",
            "description": "<p>肇祸</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "troubleRequired",
            "description": "<p>肇祸是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "harmfulBehavior",
            "description": "<p>其他危害行为</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "harmfulBehaviorRequired",
            "description": "<p>其他危害行为是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "selfInjury",
            "description": "<p>自伤</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "selfInjuryRequired",
            "description": "<p>自伤是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "attemptedSuicide",
            "description": "<p>自杀未遂</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "attemptedSuicideRequired",
            "description": "<p>自杀未遂是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nothing",
            "description": "<p>无危险行为（0无，1有）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lockingSituation",
            "description": "<p>关锁情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lockingSituationRequired",
            "description": "<p>关锁情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hospitalization",
            "description": "<p>住院情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hospitalizationRequired",
            "description": "<p>住院情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dischargeTime",
            "description": "<p>出院时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dischargeTimeRequired",
            "description": "<p>出院时间是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "examination",
            "description": "<p>实验室检查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "examinationceRequired",
            "description": "<p>实验室检查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugCompliance",
            "description": "<p>服药依从性</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugComplianceRequired",
            "description": "<p>服药依从性查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReactionRequired",
            "description": "<p>药物不良反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "treatment",
            "description": "<p>治疗效果</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "latestTreatmentRequired",
            "description": "<p>治疗效果是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "drugList",
            "description": "<p>用药情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugRequired",
            "description": "<p>用药情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "drugGuidList",
            "description": "<p>用药指导</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "measures",
            "description": "<p>康复措施</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "measuresRequired",
            "description": "<p>康复措施是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>此次随访分类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>此次随访分类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>填表日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateRequired",
            "description": "<p>填表日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "drugList元素对象属性": [
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ],
        "drugGuidList元素对象属性": [
          {
            "group": "drugGuidList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drugGuidList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drugGuidList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"reason\":\"外出打工\",\n        \"reasonRequired\":\"1\",\n        \"deathDate\":\"2012-09-09\",\n        \"deathDateRequired\":\"1\",\n        \"deathReason\":\"肿瘤\",\n        \"deathReasonRequired\":\"1\",\n        \"riskAssessment\":\"0\",\n        \"riskAssessmentRequired\":\"1\",\n        \"currentSymptoms\":\"0\",\n        \"currentSymptomsRequired\":\"1\",\n        \"insight\":\"完全\",\n        \"insightRequired\":\"1\",\n        \"sleepCondition\":\"良好\",\n        \"sleepConditionRequired\":\"1\",\n        \"diet\":\"良好\",\n        \"dietRequired\":\"1\",\n        \"lifeCuisine\":\"良好\",\n        \"lifeCuisineRequired\":\"1\",\n        \"housework\":\"良好\",\n        \"houseworkRequired\":\"1\",\n        \"work\":\"良好\",\n        \"workRequired\":\"1\",\n        \"study\":\"良好\",\n        \"studyRequired\":\"1\",\n        \"socialContact\":\"良好\",\n        \"socialContactRequired\":\"1\",\n        \"mildTrouble\":\"3\",\n        \"mildTroubleRequired\":\"1\",\n        \"accident\":\"3\",\n        \"accidentRequired\":\"1\",\n        \"trouble\":\"2\",\n        \"troubleRequired\":\"1\",\n        \"harmfulBehavior\":\"1\",\n        \"harmfulBehaviorRequired\":\"1\",\n        \"selfInjury\":\"2\",\n        \"selfInjuryRequired\":\"1\",\n        \"attemptedSuicide\":\"2\",\n        \"attemptedSuicideRequired\":\"1\",\n        \"nothing\":\"0\",\n        \"lockingSituation\":\"无关锁\",\n        \"lockingSituationRequired\":\"1\",\n        \"hospitalization\":\"无\",\n        \"hospitalizationRequired\":\"1\",\n        \"dischargeTime\":\"2017-12-10\",\n        \"dischargeTimeRequired\":\"1\",\n        \"examination\":\"无\",\n        \"examinationRequired\":\"1\",\n        \"drugCompliance\":\"无\",\n        \"drugComplianceRequired\":\"1\",\n        \"adverseDrugReaction\":\"无\",\n        \"adverseDrugReactionRequired\":\"1\",\n        \"treatment\":\"痊愈\",\n        \"treatmentRequired\":\"1\",\n        \"referralReason\":\"无\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"红糖卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"drugList\":[{\n           \"drugName\":\"药物名称\",\n           \"drugTimes\":\"3\",\n           \"drugConsumption\":\"1片\"\n        }],\n        \"drugGuidList\":[{\n            \"drugName\":\"药物名称\",\n            \"drugTimes\":\"3\",\n            \"drugConsumption\":\"1片\"\n        }],\n        \"measures\":\"生活劳动能力\",\n        \"measuresRequired\":\"1\",\n        \"classification\":\"基本稳定\",\n        \"classificationRequired\":\"1\",\n        \"date\":\"2018-2-10\",\n        \"dateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/2308.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "07_MentalDisorder"
  },
  {
    "group": "07_MentalDisorder",
    "type": "GET",
    "url": "supplementMentalDisorderInformation",
    "title": "01、严重精神障碍患者个人信息补充表",
    "version": "1.0.0",
    "name": "supplementMentalDisorderInformation_01________________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameOfGuardian",
            "description": "<p>监护人姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameOfGuardianRequired",
            "description": "<p>监护人姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>与患者关系</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "relationshipRequired",
            "description": "<p>与患者关系是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "addressOfGuardian",
            "description": "<p>监护人住址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "addressOfGuardianRequired",
            "description": "<p>监护人住址是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "phoneOfGuardian",
            "description": "<p>监护人电话</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "phoneOfGuardianRequired",
            "description": "<p>监护人电话是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "neighborhoodContact",
            "description": "<p>居委会联系人</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "neighborhoodContactRequired",
            "description": "<p>居委会联系人是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>居委会电话</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "contactPhoneRequired",
            "description": "<p>居委会电话是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "households",
            "description": "<p>户别</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "householdsRequired",
            "description": "<p>户别是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "employment",
            "description": "<p>就业情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "employmentRequired",
            "description": "<p>就业情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "agree",
            "description": "<p>同意参加管理</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "agreeRequired",
            "description": "<p>同意参加管理是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>签字</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signRequired",
            "description": "<p>签字是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signDate",
            "description": "<p>签字时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signDateRequired",
            "description": "<p>签字时间是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "firstOnset",
            "description": "<p>初次发病时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "firstOnsetRequired",
            "description": "<p>初次发病时间是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mainSymptoms",
            "description": "<p>主要症状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mainSymptomsRequired",
            "description": "<p>主要症状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lockingSituation",
            "description": "<p>关锁情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "lockingSituationRequired",
            "description": "<p>关锁情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastOutpatient",
            "description": "<p>既往治疗情况-门诊</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastOutpatientRequired",
            "description": "<p>既往治疗情况-门诊是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastTreatmentDate",
            "description": "<p>既往治疗情况-首次抗精神病药治疗时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastTreatmentDateRequired",
            "description": "<p>首次抗精神病药治疗时间是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastHospitalization",
            "description": "<p>既往治疗情况-住院</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pastHospitalizationRequired",
            "description": "<p>住院是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "treatmentRequired",
            "description": "<p>既往治疗情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "currentDiagnosis",
            "description": "<p>目前诊断</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "currentDiagnosisRequired",
            "description": "<p>目前诊断是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hospital",
            "description": "<p>确诊医院</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hospitalRequired",
            "description": "<p>确诊医院是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "diagnosisDate",
            "description": "<p>确诊日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "diagnosisDateRequired",
            "description": "<p>确诊日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "latestTreatment",
            "description": "<p>最近一次治疗效果</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "latestTreatmentRequired",
            "description": "<p>最近一次治疗效果是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mildTrouble",
            "description": "<p>轻度滋事</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mildTroubleRequired",
            "description": "<p>轻度滋事是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "accident",
            "description": "<p>肇事</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "accidentRequired",
            "description": "<p>肇事是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "trouble",
            "description": "<p>肇祸</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "troubleRequired",
            "description": "<p>肇祸是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "harmfulBehavior",
            "description": "<p>其他危害行为</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "harmfulBehaviorRequired",
            "description": "<p>其他危害行为是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "selfInjury",
            "description": "<p>自伤</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "selfInjuryRequired",
            "description": "<p>自伤是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "attemptedSuicide",
            "description": "<p>自杀未遂</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "attemptedSuicideRequired",
            "description": "<p>自杀未遂是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nothing",
            "description": "<p>无危险行为（0无，1有）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "economic",
            "description": "<p>经济状况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "economicRequired",
            "description": "<p>经济状况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "advice",
            "description": "<p>专科医生的意见</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adviceRequired",
            "description": "<p>专科医生的意见是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>填表日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dateRequired",
            "description": "<p>填表日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n      \"fileNumber\":\"213421\",\n      \"name\":\"张三\",\n      \"nameRequired\":\"0\",\n      \"number\":\"00999888888\",\n      \"numberRequired\":\"0\",\n      \"nameOfGuardian\":\"张三\",\n      \"nameOfGuardianRequired\":\"1\",\n      \"relationship\":\"子女\",\n      \"relationshipdRequired\":\"1\",\n      \"addressOfGuardian\":\"恬静四合院\",\n      \"addressOfGuardianRequired\":\"1\",\n      \"phoneOfGuardian\":\"13291332890\",\n      \"phoneOfGuardianRequired\":\"1\",\n      \"neighborhoodContact\":\"里斯\",\n      \"neighborhoodContactRequired\":\"1\",\n      \"contactPhone\":\"1329188909\",\n      \"contactPhoneRequired\":\"1\",\n      \"households\":\"城镇\",\n      \"householdsRequired\":\"1\",\n      \"employment\":\"在职\",\n      \"employmentRequired\":\"1\",\n      \"agree\":\"同意\"，\n      \"agreeRequired\":\"1\",\n      \"sign\":\"张三\"\n      \"signRequired\":\"1\",\n      \"signDate\":\"2017-01-01\",\n      \"signDateRequired\":\"1\",\n      \"informedRequired\":\"1\",\n      \"firstOnset\":\"2017-10-10\",\n      \"firstOnsetRequired\":\"1\",\n      \"mainSymptoms\":\"交流困难\",\n      \"mainSymptomsRequired\":\"1\",\n      \"lockingSituation\":\"无\",\n      \"lockingSituationRequired\":\"1\",\n      \"pastOutpatient\":\"连续治疗\",\n      \"pastTreatmentDate\":\"2017-09-10\",\n      \"pastHospitalization\":\"2\",\n      \"treatmentRequired\":\"1\",\n      \"currentDiagnosis\":\"中\",\n      \"currentDiagnosisRequired\":\"1\",\n      \"hospital\":\"中医院\",\n      \"hospitalRequired\":\"1\",\n      \"diagnosisDate\":\"无\",\n      \"diagnosisDateRequired\":\"1\",\n      \"latestTreatment\":\"无\",\n      \"latestTreatmentRequired\":\"1\",\n      \"mildTrouble\":\"3\",\n      \"mildTroubleRequired\":\"1\",\n      \"accident\":\"3\",\n      \"accidentRequired\":\"1\",\n      \"trouble\":\"2\",\n      \"troubleRequired\":\"1\",\n      \"harmfulBehavior\":\"1\",\n      \"harmfulBehaviorRequired\":\"1\",\n      \"selfInjury\":\"2\",\n      \"selfInjuryRequired\":\"1\",\n      \"attemptedSuicide\":\"2\",\n      \"attemptedSuicideRequired\":\"1\",\n      \"nothing\":\"0\",\n      \"economic\":\"2018-2-10\",\n      \"economicRequired\":\"1\",\n      \"advice\":\"2018-2-10\",\n      \"adviceRequired\":\"1\",\n      \"date\":\"2018-2-10\",\n      \"dateRequired\":\"1\",\n      \"doctorSignNameImageUrl\":\"诸葛镇\",\n      \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/23o0u8.jpg\"\n     }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "07_MentalDisorder"
  },
  {
    "group": "08_CerebralApoplexy",
    "type": "GET",
    "url": "cerebralApoplexyFollowUp",
    "title": "01、脑卒中患者随访服务记录表",
    "version": "1.0.0",
    "name": "cerebralApoplexyFollowUp_01_____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "symptomRequired",
            "description": "<p>症 状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPress",
            "description": "<p>血压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressRequired",
            "description": "<p>血压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeDrugs",
            "description": "<p>服用何种药物</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeDrugsRequired",
            "description": "<p>服用何种药物是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmoking",
            "description": "<p>烟酒注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmokingRequired",
            "description": "<p>烟酒注意事项是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "motion",
            "description": "<p>运动注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionRequired",
            "description": "<p>运动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "saltUptake",
            "description": "<p>摄盐注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "saltUptakeRequired",
            "description": "<p>摄盐注意事项是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychological",
            "description": "<p>心理调整</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalRequired",
            "description": "<p>心理调整是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehavior",
            "description": "<p>遵医行为</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehaviorRequired",
            "description": "<p>遵医行为是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherExamination",
            "description": "<p>其他辅助检查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherExaminationRequired",
            "description": "<p>其他辅助检查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugCompliance",
            "description": "<p>服药依从性</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugComplianceRequired",
            "description": "<p>服药依从性查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReactionRequired",
            "description": "<p>药物不良反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>此次随访分类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>此次随访分类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "drugList",
            "description": "<p>用药情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugRequired",
            "description": "<p>用药情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "symptom对象属性": [
          {
            "group": "symptom对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "symptom对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          }
        ],
        "drugList元素对象属性": [
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"symptom\":{\n            \"symptom\":\"1,2,3\",\n            \"other\":\"无\"\n        },\n        \"symptomRequired\":\"1\",\n        \"bloodPress\":\"0\",\n        \"bloodPressRequired\":\"1\",\n        \"weight\":\"0\",\n        \"weightRequired\":\"1\",\n        \"other\":\"0\",\n        \"otherRequired\":\"1\",\n        \"dailySmoking\":\"无\",\n        \"dailySmokingRequired\":\"1\",\n        \"motion\":\"每天运动2小时\",\n        \"motionRequired\":\"1\",\n        \"saltUptake\":\"中\",\n        \"saltUptakeRequired\":\"1\",\n        \"psychological\":\"中\",\n        \"psychologicalRequired\":\"1\",\n        \"complianceBehavior\":\"中\",\n        \"complianceBehaviorRequired\":\"1\",\n        \"otherExamination\":\"无\",\n        \"otherExaminationRequired\":\"1\",\n        \"takeDrugs\":\"无\",\n        \"takeDrugsRequired\":\"1\",\n        \"drugCompliance\":\"无\",\n        \"drugComplianceRequired\":\"1\",\n        \"adverseDrugReaction\":\"无\",\n        \"adverseDrugReactionRequired\":\"1\",\n        \"classification\":\"控制满意\",\n        \"classificationRequired\":\"1\",\n        \"drugList\":[{\n            \"drugName\":\"药物名称\",\n            \"drugTimes\":\"3\",\n            \"drugConsumption\":\"1片\"\n        }],\n        \"referralReason\":\"无\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"红糖卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/w3ou89.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "08_CerebralApoplexy"
  },
  {
    "group": "09_CoronaryHeartDisease",
    "type": "GET",
    "url": "coronaryHeartDiseaseFollowUp",
    "title": "01、冠心病患者随访服务记录表（文档暂时保留）",
    "version": "1.0.0",
    "name": "coronaryHeartDiseaseFollowUp_01_____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "symptomRequired",
            "description": "<p>症 状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPress",
            "description": "<p>血压</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "bloodPressRequired",
            "description": "<p>血压是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>体重</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "weightRequired",
            "description": "<p>体重是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartWeakened",
            "description": "<p>第一心音是否减弱</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "heartWeakenedRequired",
            "description": "<p>其他是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "atrialFibrillation",
            "description": "<p>心率失常是否闻及早搏心房纤颤</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "atrialFibrillationRequired",
            "description": "<p>心率失常是否闻及早搏心房纤颤是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "gallop",
            "description": "<p>心肩部是否闻及奔马律</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "gallopRequired",
            "description": "<p>心肩部是否闻及奔马律是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmoking",
            "description": "<p>烟酒注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmokingRequired",
            "description": "<p>烟酒注意事项是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionAttention",
            "description": "<p>运动注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "motionAttentionRequired",
            "description": "<p>运动是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "saltUptake",
            "description": "<p>摄盐注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "saltUptakeRequired",
            "description": "<p>摄盐注意事项是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychological",
            "description": "<p>心理调整</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "psychologicalRequired",
            "description": "<p>心理调整是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehavior",
            "description": "<p>遵医行为</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complianceBehaviorRequired",
            "description": "<p>遵医行为是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他辅助检查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "otherRequired",
            "description": "<p>其他辅助检查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "remission",
            "description": "<p>服用硝酸甘油后是否缓解</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "remissionRequired",
            "description": "<p>服用硝酸甘油后是否缓解是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugCompliance",
            "description": "<p>服药依从性</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugComplianceRequired",
            "description": "<p>服药依从性查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReactionRequired",
            "description": "<p>药物不良反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>此次随访分类</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationRequired",
            "description": "<p>此次随访分类是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "drugList",
            "description": "<p>用药情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugRequired",
            "description": "<p>用药情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "drug元素对象属性": [
          {
            "group": "drug元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drug元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drug元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ],
        "drugList元素对象属性": [
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugName",
            "description": "<p>药物名称</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugTimes",
            "description": "<p>每日次</p>"
          },
          {
            "group": "drugList元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugConsumption",
            "description": "<p>每次用量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"symptom\":{\n            \"symptom\":\"1,2,3\",\n            \"other\":\"无\"\n        },\n        \"symptomRequired\":\"1\",\n        \"bloodPress\":\"0\",\n        \"bloodPressRequired\":\"1\",\n        \"weight\":\"0\",\n        \"weightRequired\":\"1\",\n        \"heartWeakened\":\"是\",\n        \"heartWeakenedRequired\":\"1\",\n        \"atrialFibrillation\":\"是\",\n        \"atrialFibrillationRequired\":\"1\",\n        \"gallop\":\"无\",\n        \"gallopRequired\":\"1\",\n        \"dailySmoking\":\"无\",\n        \"dailySmokingRequired\":\"1\",\n        \"motionAttention\":\"每天运动2小时\",\n        \"motionAttentionRequired\":\"1\",\n        \"saltUptake\":\"中\",\n        \"saltUptakeRequired\":\"1\",\n        \"psychological\":\"中\",\n        \"psychologicalRequired\":\"1\",\n        \"complianceBehavior\":\"中\",\n        \"complianceBehaviorRequired\":\"1\",\n        \"other\":\"无\",\n        \"otherRequired\":\"1\",\n        \"remission\":\"无\",\n        \"remissionRequired\":\"1\",\n        \"takeDrugs\":\"无\",\n        \"takeDrugsRequired\":\"1\",\n        \"drugCompliance\":\"无\",\n        \"drugComplianceRequired\":\"1\",\n        \"adverseDrugReaction\":\"无\",\n        \"adverseDrugReactionRequired\":\"1\",\n        \"classification\":\"控制满意\",\n        \"classificationRequired\":\"1\",\n        \"drugList\":[{\n            \"drugName\":\"药物名称\",\n            \"drugTimes\":\"3\",\n            \"drugConsumption\":\"1片\"\n        }],\n        \"referralReason\":\"无\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"红糖卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/230ou9.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "09_CoronaryHeartDisease"
  },
  {
    "group": "10_Tuberculosis",
    "type": "GET",
    "url": "tuberculosisService",
    "title": "01、肺结核患者随访服务记录表",
    "version": "1.0.0",
    "name": "tuberculosisService_01_____________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "month",
            "description": "<p>治疗月序</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "monthRequired",
            "description": "<p>治疗月序是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "supervisor",
            "description": "<p>督导人员</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "supervisorRequired",
            "description": "<p>督导人员是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "symptomRequired",
            "description": "<p>症 状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmoking",
            "description": "<p>日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailySmoking",
            "description": "<p>下次目标日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmokingRequired",
            "description": "<p>日吸烟量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrink",
            "description": "<p>日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailyDrink",
            "description": "<p>下次目标日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrinkRequired",
            "description": "<p>日饮酒量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "object",
            "optional": false,
            "field": "chemotherapy",
            "description": "<p>化疗方案</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chemotherapyRequired",
            "description": "<p>化疗方案是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>用法</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "usageRequired",
            "description": "<p>用法是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugFormulations",
            "description": "<p>药品剂型</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugFormulationsRequired",
            "description": "<p>药品剂型是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "missed",
            "description": "<p>漏服</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "missedRequired",
            "description": "<p>漏服是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReaction",
            "description": "<p>药物不良反应</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseDrugReactionRequired",
            "description": "<p>药物不良反应是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complications",
            "description": "<p>并发症或合并症</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "complicationsRequired",
            "description": "<p>并发症或合并症查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReason",
            "description": "<p>转诊原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralReasonRequired",
            "description": "<p>转诊原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitution",
            "description": "<p>转诊机构</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "referralInstitutionRequired",
            "description": "<p>转诊机构是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "results",
            "description": "<p>2周内随访，随访结果</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "resultsRequired",
            "description": "<p>2周内随访，随访结果是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "opinions",
            "description": "<p>处理意见</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "opinionsRequired",
            "description": "<p>处理意见是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stopTime",
            "description": "<p>停止治疗时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stopTimeRequired",
            "description": "<p>停止治疗时间是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stopReasion",
            "description": "<p>停止治疗原因</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "stopReasionRequired",
            "description": "<p>停止治疗原因是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "shouldTimes",
            "description": "<p>应访视患者次数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "shouldTimesRequired",
            "description": "<p>应访视患者次数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "actualTimes",
            "description": "<p>实际访视次数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "actualTimesRequired",
            "description": "<p>实际访视次数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "shouldTakeTimes",
            "description": "<p>应服药次数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "shouldTakeTimesRequired",
            "description": "<p>应服药次数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "actualTakeTimes",
            "description": "<p>实际服药次数</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "actualTakeTimesRequired",
            "description": "<p>实际服药次数是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "medicationRate",
            "description": "<p>服药率</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "medicationRateRequired",
            "description": "<p>服药率是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "symptom对象属性": [
          {
            "group": "symptom对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "symptom对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "  {\n      \"errcode\": 200,\n      \"errmsg\":\"\",\n      \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"month\":\"2\",\n        \"monthRequired\":\"1\",\n        \"supervisor\":\"2\",\n        \"supervisorRequired\":\"1\",\n        \"symptom\":{\n           \"symptom\":\"1,2,3\",\n           \"other\":\"无\"\n        },\n        \"symptomRequired\":\"1\",\n        \"dailySmoking\":\"无\",\n        \"targetDailySmoking\":\"无\",\n        \"dailySmokingRequired\":\"1\",\n        \"dailyDrink\":\"每天运动2小时\",\n        \"targetDailyDrink\":\"无\",\n        \"dailyDrinkRequired\":\"1\",\n        \"chemotherapy\":\"无\",\n        \"chemotherapyRequired\":\"1\",\n        \"usage\":\"每日\",\n        \"usageRequired\":\"1\",\n        \"drugFormulations\":\"固定剂量复合制剂\",\n        \"drugFormulationsRequired\":\"1\",\n        \"missed\":\"1\",\n        \"missedRequired\":\"1\",\n        \"adverseDrugReaction\":\"无\",\n        \"adverseDrugReactionRequired\":\"1\",\n        \"complications\":\"无\",\n        \"complicationsRequired\":\"1\",\n        \"referralReason\":\"无\",\n        \"referralReasonRequired\":\"1\",\n        \"referralInstitution\":\"红糖卫生室\",\n        \"referralInstitutionRequired\":\"1\",\n        \"opinions\":\"良好\",\n        \"opinionsRequired\":\"1\",\n        \"results\":\"良好\",\n        \"resultsRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/o32u09.jpg\",\n        \"stopTime\":\"2018-2-10\",\n        \"stopTimeRequired\":\"1\",\n        \"stopReasion\":\"完成疗程\",\n        \"stopReasionRequired\":\"1\",\n        \"shouldTimes\":\"5\",\n        \"shouldTimesRequired\":\"1\",\n        \"actualTimes\":\"5\",\n        \"actualTimesRequired\":\"1\",\n        \"shouldTakeTimes\":\"5\",\n        \"shouldTakeTimesRequired\":\"1\",\n        \"actualTakeTimes\":\"5\",\n        \"actualTakeTimesRequired\":\"1\",\n        \"medicationRate\":\"5\",\n        \"medicationRateRequired\":\"1\",\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "10_Tuberculosis"
  },
  {
    "group": "11_PulmonaryTuberculosis",
    "type": "GET",
    "url": "pulmonaryTuberculosisFirstFollowUp",
    "title": "01、肺结核患者第一次入户随访记录表",
    "version": "1.0.0",
    "name": "pulmonaryTuberculosisFirstFollowUp_01________________",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "followUpId",
            "description": "<p>随访记录id，必填</p>"
          }
        ],
        "data元素对象属性": [
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fileNumber",
            "description": "<p>档案号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nameRequired",
            "description": "<p>姓名是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>编号</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "numberRequired",
            "description": "<p>编号是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDate",
            "description": "<p>随访日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpDateRequired",
            "description": "<p>随访日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethod",
            "description": "<p>随访方式</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "followUpMethodRequired",
            "description": "<p>随访方式是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "patientType",
            "description": "<p>患者类型</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "patientTypeRequired",
            "description": "<p>患者类型是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "phlegm",
            "description": "<p>痰菌情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "phlegmRequired",
            "description": "<p>痰菌情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "resistant",
            "description": "<p>耐药情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "resistantRequired",
            "description": "<p>耐药情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "supervisor",
            "description": "<p>督导人员</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "supervisorRequired",
            "description": "<p>督导人员是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "symptomRequired",
            "description": "<p>症 状是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmoking",
            "description": "<p>日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailySmoking",
            "description": "<p>下次目标日吸烟量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailySmokingRequired",
            "description": "<p>日吸烟量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrink",
            "description": "<p>日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "targetDailyDrink",
            "description": "<p>下次目标日饮酒量</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "dailyDrinkRequired",
            "description": "<p>日饮酒量是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chemotherapy",
            "description": "<p>化疗方案</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "chemotherapyRequired",
            "description": "<p>化疗方案是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>用法</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "usageRequired",
            "description": "<p>用法是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugFormulations",
            "description": "<p>药品剂型</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "drugFormulationsRequired",
            "description": "<p>药品剂型是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hasHouse",
            "description": "<p>单独的居室</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "hasHouseRequired",
            "description": "<p>单独的居室是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "ventilation",
            "description": "<p>通风情况</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "ventilationRequired",
            "description": "<p>通风情况是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takingPlace",
            "description": "<p>取药地点</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takingPlaceRequired",
            "description": "<p>取药地点是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takingTime",
            "description": "<p>取药时间</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takingTimeRequired",
            "description": "<p>取药时间是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fillCard",
            "description": "<p>服药记录卡的填写</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "fillCardRequired",
            "description": "<p>服药记录卡的填写是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "storage",
            "description": "<p>服药方法及药品存放</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "storageRequired",
            "description": "<p>服药方法及药品存放是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "courses",
            "description": "<p>肺结核治疗疗程</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "coursesRequired",
            "description": "<p>肺结核治疗疗程\t是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "harm",
            "description": "<p>不规律服药危害</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "harmRequired",
            "description": "<p>不规律服药危害\t是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseReaction",
            "description": "<p>服药后不良反应及处理</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "adverseReactionRequired",
            "description": "<p>服药后不良反应及处理是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sputum",
            "description": "<p>治疗期间复诊查痰</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sputumRequired",
            "description": "<p>治疗期间复诊查痰是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeMedicine",
            "description": "<p>外出期间如何坚持服药</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "takeMedicineRequired",
            "description": "<p>外出期间如何坚持服药是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "attention",
            "description": "<p>生活习惯及注意事项</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "attentionRequired",
            "description": "<p>生活习惯及注意事项是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "closeExamination",
            "description": "<p>密切接触者检查</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "closeExaminationRequired",
            "description": "<p>密切接触者检查是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDate",
            "description": "<p>下次访视日期</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "nextVisitDateRequired",
            "description": "<p>下次访视日期是否必填（0.非必填，1.必填）</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrl",
            "description": "<p>随访医生签名图片地址</p>"
          },
          {
            "group": "data元素对象属性",
            "type": "String",
            "optional": false,
            "field": "doctorSignNameImageUrlRequired",
            "description": "<p>随访医生签名是否必填（0.非必填，1.必填）</p>"
          }
        ],
        "symptom对象属性": [
          {
            "group": "symptom对象属性",
            "type": "Object",
            "optional": false,
            "field": "symptom",
            "description": "<p>症 状</p>"
          },
          {
            "group": "symptom对象属性",
            "type": "String",
            "optional": false,
            "field": "other",
            "description": "<p>其他</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例\":",
          "content": "{\n    \"errcode\": 200,\n    \"errmsg\":\"\",\n    \"data\": {\n        \"fileNumber\":\"213421\",\n        \"name\":\"张三\",\n        \"nameRequired\":\"0\",\n        \"number\":\"00999888888\",\n        \"numberRequired\":\"0\",\n        \"followUpDate\":\"2018-09-09\",\n        \"followUpDateRequired\":\"1\",\n        \"followUpMethod\":\"家庭\",\n        \"followUpMethodRequired\":\"1\",\n        \"patientType\":\"初治\",\n        \"patientTypeRequired\":\"1\",\n        \"phlegm\":\"阳性\",\n        \"phlegmRequired\":\"1\",\n        \"resistant\":\"耐药\",\n        \"resistantRequired\":\"1\",\n        \"supervisor\":\"医生\",\n        \"supervisorRequired\":\"1\",\n        \"symptom\":{\n            \"symptom\":\"1,2,3\",\n            \"other\":\"无\"\n        },\n        \"symptomRequired\":\"1\",\n        \"dailySmoking\":\"无\",\n        \"targetDailySmoking\":\"无\",\n        \"dailySmokingRequired\":\"1\",\n        \"dailyDrink\":\"每天运动2小时\",\n        \"targetDailyDrink\":\"无\",\n        \"dailyDrinkRequired\":\"1\",\n        \"chemotherapy\":\"无\",\n        \"chemotherapyRequired\":\"1\",\n        \"usage\":\"每日\",\n        \"usageRequired\":\"1\",\n        \"drugFormulations\":\"固定剂量复合制剂\",\n        \"drugFormulationsRequired\":\"1\",\n        \"hasHouse\":\"良好\",\n        \"hasHouseRequired\":\"1\",\n        \"Ventilation\":\"无\",\n        \"VentilationRequired\":\"1\",\n        \"takingPlace\":\"无\",\n        \"takingPlaceRequired\":\"1\",\n        \"takingTime\":\"2018-01-01\",\n        \"takingTimeRequired\":\"1\",\n        \"fillCard\":\"掌握\",\n        \"fillCardRequired\":\"1\",\n        \"storage\":\"掌握\",\n        \"storageRequired\":\"1\",\n        \"courses\":\"掌握\",\n        \"coursesRequired\":\"1\",\n        \"harm\":\"掌握\",\n        \"harmRequired\":\"1\",\n        \"adverseReaction\":\"掌握\",\n        \"adverseReactionRequired\":\"1\",\n        \"sputum\":\"掌握\",\n        \"sputumRequired\":\"1\",\n        \"takeMedicine\":\"掌握\",\n        \"takeMedicineRequired\":\"1\",\n        \"attention\":\"掌握\",\n        \"attentionRequired\":\"1\",\n        \"closeExamination\":\"掌握\",\n        \"closeExaminationRequired\":\"1\",\n        \"nextVisitDate\":\"2018-2-10\",\n        \"nextVisitDateRequired\":\"1\",\n        \"doctorSignNameImageUrl\":\"诸葛镇\",\n        \"doctorSignNameImageUrlRequired\":\"http://img.gagctv.com/23o908u4.jpg\"\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./getPublicHealthFollow.js",
    "groupTitle": "11_PulmonaryTuberculosis"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "F______________doc_main_js",
    "groupTitle": "F______________doc_main_js",
    "name": ""
  }
] });

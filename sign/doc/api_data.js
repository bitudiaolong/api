define({ "api": [
  {
    "group": "01_Login",
    "type": "POST",
    "url": "open/sysaccount/getCode",
    "title": "02、获取验证码",
    "version": "1.0.0",
    "name": "open_sysaccount_getCode",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>医生手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"验证码已经成功发送\",\n   \"data\":{\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "01_Login"
  },
  {
    "group": "01_Login",
    "type": "POST",
    "url": "open/sysaccount/login",
    "title": "01、登录",
    "version": "1.0.1",
    "name": "open_sysaccount_login",
    "description": "<p>doctorSignQRCode的data参数解密之后为json串：{&quot;mainDocId&quot;:&quot;8f9150d1fba84a2e80ebce6bcc0ee3c7&quot;}</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>医生账号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>医生密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userPicture",
            "description": "<p>医生头像地址</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userPhone",
            "description": "<p>医生手机号</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>医生名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userSex",
            "description": "<p>医生性别</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userAddress",
            "description": "<p>医生地址</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>所属服务机构id</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "organizationName",
            "description": "<p>所属服务机构,签约卫生室</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "teamMembers",
            "description": "<p>医生团队成员名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "docTeamName",
            "description": "<p>所属医生团队名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "docTeamId",
            "description": "<p>所属医生团队id</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "doctorSignQRCode",
            "description": "<p>医生签约码字符串（所有参数用加密之后用data作为参数名）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"doctorToken\":\"sjdhfakldhflkadsfhljkas==\",\n       \"userUid\":\"666\",\n       \"userPicture\":\"http://xxx/images/weather/day/00.png\",\n       \"userPhone\":\"18812345678\",\n       \"userName\":\"张三\",\n       \"userSex\":\"\",\n       \"userAddress\":\"\",\n       \"organizationId\":\"\",\n       \"organizationName\":\"\",\n       \"teamMembers\":\"\",\n       \"docTeamName\":\"\",\n       \"docTeamId\":\"\",\n       \"doctorSignQRCode\":\"\"\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "01_Login"
  },
  {
    "group": "01_Login",
    "type": "POST",
    "url": "open/sysaccount/login",
    "title": "01、登录",
    "version": "1.0.0",
    "name": "open_sysaccount_login",
    "description": "<p>doctorSignQRCode的data参数解密之后为json串：{&quot;mainDocId&quot;:&quot;8f9150d1fba84a2e80ebce6bcc0ee3c7&quot;}</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>医生账号</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>医生密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userPicture",
            "description": "<p>医生头像地址</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userPhone",
            "description": "<p>医生手机号</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>医生名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userSex",
            "description": "<p>医生性别</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userAddress",
            "description": "<p>医生地址</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "healthRoomName",
            "description": "<p>所属服务机构,签约卫生室</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "teamMembers",
            "description": "<p>医生团队成员名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "docTeamName",
            "description": "<p>所属医生团队名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "doctorSignQRCode",
            "description": "<p>医生签约码字符串（所有参数用加密之后用data作为参数名）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"doctorToken\":\"sjdhfakldhflkadsfhljkas==\",\n       \"userUid\":\"666\",\n       \"userPicture\":\"http://xxx/images/weather/day/00.png\",\n       \"userPhone\":\"18812345678\",\n       \"userName\":\"张三\",\n       \"userSex\":\"\",\n       \"userAddress\":\"\",\n       \"healthRoomName\":\"\",\n       \"teamMembers\":\"医生a,医生b,医生c\",\n       \"docTeamName\":\"超神团队\",\n       \"doctorSignQRCode\":\"http://xxx/xxx/startSign.html?data=u8nhasd98fhasd8f==\"\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "01_Login"
  },
  {
    "group": "01_Login",
    "type": "POST",
    "url": "open/sysaccount/modifyPassword",
    "title": "03、修改密码",
    "version": "1.0.0",
    "name": "open_sysaccount_modifyPassword",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"密码更新成功\",\n   \"data\":{\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "01_Login"
  },
  {
    "group": "02_Sign_______api__POST__open_doctor_confirmReject_06____________apiVersion_1_0_0_______apiName_open_doctor_confirmReject____________apiParam___________String__doctorToken_________________apiParam___________String__userUid___Uid____________apiParam___________String__signUid______id_______apiParam___________String__rejectReason_________________apiSuccessExample__JSON_______________________errcode__200________errmsg____________data____________________",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign_______api__POST__open_doctor_confirmReject_06____________apiVersion_1_0_0_______apiName_open_doctor_confirmReject____________apiParam___________String__doctorToken_________________apiParam___________String__userUid___Uid____________apiParam___________String__signUid______id_______apiParam___________String__rejectReason_________________apiSuccessExample__JSON_______________________errcode__200________errmsg____________data____________________",
    "name": ""
  },
  {
    "group": "02_Sign_______api__POST__open_doctor_confirmSubmit_07__________________apiVersion_1_0_0_______apiName_open_doctor_confirmSubmit____________apiParam___________String__doctorToken_________________apiParam___________String__userUid___Uid____________apiParam___________String__signUid______id_______apiParam___________String__remarks_____________apiParam___________String__classificationList__________________apiParam___________String__signTime______2017_12_31_2018_12_31________apiParam___________Array__servicePackageList________________apiSuccess__servicePackageList____________String__servicePackageId____id_______apiSuccess__servicePackageList____________String__servicePackageName____________apiSuccess__servicePackageList____________String__expiryDate________2017_12_31_2018_12_31________apiSuccess__servicePackageList____________Array__serviceContent__________________apiSuccess__serviceContent____________String__serviceItemId____id_______apiSuccess__serviceContent____________String__serviceItem__________________apiSuccessExample__JSON_______________________errcode__200________errmsg____________data____________________",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign_______api__POST__open_doctor_confirmSubmit_07__________________apiVersion_1_0_0_______apiName_open_doctor_confirmSubmit____________apiParam___________String__doctorToken_________________apiParam___________String__userUid___Uid____________apiParam___________String__signUid______id_______apiParam___________String__remarks_____________apiParam___________String__classificationList__________________apiParam___________String__signTime______2017_12_31_2018_12_31________apiParam___________Array__servicePackageList________________apiSuccess__servicePackageList____________String__servicePackageId____id_______apiSuccess__servicePackageList____________String__servicePackageName____________apiSuccess__servicePackageList____________String__expiryDate________2017_12_31_2018_12_31________apiSuccess__servicePackageList____________Array__serviceContent__________________apiSuccess__serviceContent____________String__serviceItemId____id_______apiSuccess__serviceContent____________String__serviceItem__________________apiSuccessExample__JSON_______________________errcode__200________errmsg____________data____________________",
    "name": ""
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/classPopulation/peopleTypeList",
    "title": "07、获取人群分类列表",
    "version": "1.0.0",
    "name": "open_classPopulation_peopleTypeList",
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "typeUid",
            "description": "<p>人群分类id</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "typeName",
            "description": "<p>人群分类名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\":200,\n    \"errmsg\":\"\",\n    \"data\":[\n       {\n            \"typeUid\":\"\",\n            \"typeName\":\"\"\n       },\n       {\n            \"typeUid\":\"\",\n            \"typeName\":\"\"\n       }\n    ]\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/doctor/familyMembersList",
    "title": "03、签约列表-家庭成员列表、确认签约页面也用该接口调取数据",
    "version": "1.0.8",
    "name": "open_doctor_familyMembersList",
    "description": "<p>确认签约页面也用该接口调取数据</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "householderIDCard",
            "description": "<p>身份证号码（不一定是户主，要根据身份证找到户主）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userPhone",
            "description": "<p>医生手机号</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>医生名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "healthRoomName",
            "description": "<p>服务机构,签约卫生室</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "teamMembers",
            "description": "<p>医生团队成员名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>个人签约列表</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "contractedUserIDCard",
            "description": "<p>签约用户身份证号码</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signId",
            "description": "<p>签约记录号id</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signState",
            "description": "<p>当前签约状态（1已签约 9已过期 11待审核 12待确认）</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>签约用户姓名</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>签约用户年龄</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>签约用户性别</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>与户主关系</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationList",
            "description": "<p>人群分类</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackageList",
            "description": "<p>服务包名字 此处只需要给出包名集合</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "rongCloudToken",
            "description": "<p>用户融云聊天的token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":0,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"userPhone\":\"18812345678\",\n       \"userName\":\"张三\",\n       \"healthRoomName\":\"\"\n       \"teamMembers\":\"医生a,医生b,医生c\",\n       \"list\":[{\n           \"contractedUserIDCard\":\"\",\n           \"signId\":\"334334344\",\n           \"signState\":\"1\",\n           \"name\":\"\",\n           \"age\":\"26\",\n           \"sex\":\"\",\n           \"relationship\":\"户主本人\",\n           \"classificationList\":[\"高血压\",\"糖尿病\",\"冠心病\"],\n           \"servicePackageList\":[\"初级包\"],\n           \"rongCloudToken\":\"9082q3490348qrw\"\n       },{\n           \"contractedUserIDCard\":\"\",\n           \"signId\":\"5343434434\",\n           \"signState\":\"9\",\n           \"name\":\"111\",\n           \"age\":\"26\",\n           \"sex\":\"\",\n           \"relationship\":\"兄弟\",\n           \"classificationList\":[\"高血压\",\"糖尿病\",\"冠心病\"],\n           \"servicePackageList\":[\"初级包\",\"高级包\",\"vip包\"],\n           \"rongCloudToken\":\"2437897892403\"\n       }]\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/doctor/signDetail",
    "title": "04、签约详情",
    "version": "1.0.0",
    "name": "open_doctor_signDetail",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signId",
            "description": "<p>签约记录号id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "signId",
            "description": "<p>签约id</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "signType",
            "description": "<p>签约类型（1个人 2家庭）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "signState",
            "description": "<p>当前签约状态（1已签约 9已过期 11待审核 12待确认）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "submitDate",
            "description": "<p>用户提交时间（yyyy-MM-dd）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "auditDate",
            "description": "<p>医生审核时间（yyyy-MM-dd）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "signDate",
            "description": "<p>签约时间（yyyy-MM-dd）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "overdueDate",
            "description": "<p>逾期时间（yyyy-MM-dd）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "docTeamId",
            "description": "<p>医生团队id</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "docTeamName",
            "description": "<p>医生团队名称</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "mainDocName",
            "description": "<p>医生名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "mainDocTel",
            "description": "<p>医生联系电话</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "healthRoomName",
            "description": "<p>卫生室名称</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "healthRoomImageUrl",
            "description": "<p>医生团队图片</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "signCount",
            "description": "<p>已签约人数</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "teamMembers",
            "description": "<p>医生团队成员名字</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>签约用户姓名</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证号码</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别 （1 2女）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "raceName",
            "description": "<p>民族</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>出生日期（yyyy-MM-dd）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userPhone",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userAddress",
            "description": "<p>现住址</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "classificationList",
            "description": "<p>人群分类</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "servicePackageList",
            "description": "<p>服务包</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "signAgreementUrl",
            "description": "<p>服务用户协议</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userSignAgrennment",
            "description": "<p>用户签约协议，带标签的富文本</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>与户主关系</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Long",
            "optional": false,
            "field": "serviceTotalPrice",
            "description": "<p>服务总价（单位：分）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注说明</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "rejectReason",
            "description": "<p>驳回原因</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "pictureOneName",
            "description": "<p>拍照图片名字1</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "pictureTwoName",
            "description": "<p>拍照图片名字2</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "pictureSignName",
            "description": "<p>用户签名图片名字</p>"
          }
        ],
        "servicePackageList列表内元素对象属性": [
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackageName",
            "description": "<p>服务包名</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>服务有效期 （2017-12-31~2018-12-31）</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suitablePerson",
            "description": "<p>服务包适用人群</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackDescribe",
            "description": "<p>服务包描述</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "serviceContent",
            "description": "<p>服务包内容</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "Long",
            "optional": false,
            "field": "totalPrice",
            "description": "<p>服务包总价（单位：分）</p>"
          }
        ],
        "serviceContent列表内元素对象属性": [
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serviceItem",
            "description": "<p>服务项目名</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "projectContent",
            "description": "<p>项目内容</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>单位</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "Long",
            "optional": false,
            "field": "expenses",
            "description": "<p>费用，单位：分</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\": 200,\n     \"errmsg\": \"\",\n     \"data\": {\n         \"signId\":\"203498\",\n         \"signState\":\"1\",\n         \"submitDate\":\"2018-05-22\",\n         \"auditDate\":\"2018-05-23\",\n         \"signDate\":\"2018-05-24\",\n         \"overdueDate\":\"2019-05-24\",\n         \"docTeamId\":\"122\",\n         \"docTeamName\":\"朱医生团队\",\n         \"mainDocName\":\"\",\n         \"mainDocTel\":\"19911111111\",\n         \"healthRoomName\":\"新北区辽河卫生室\",\n         \"healthRoomImageUrl\":\"http://www.gagctv.com/023984.jpg\",\n         \"signCount\":\"2309\",\n         \"teamMembers\":\"喻越，王俏，大雄\",\n         \"userName\":\"张三丰\",\n         \"identityCard\":\"320312199512205409\",\n         \"sex\":\"\",\n         \"raceName\":\"汉族\",\n         \"birthday\":\"2010-02-12\",\n         \"age\":\"22\",\n         \"userPhone\":\"18812341242\",\n         \"userAddress\":\"江苏省常州\",\n         \"classificationList\":[\"高血压\",\"糖尿病\",\"冠心病\"],\n         \"signAgreementUrl\":\"http://img.gagctv.com/17103114214744738\",\n         \"userSignAgrennment\":\"用户协议富文本\",\n         \"relationship\":\"父子\",\n         \"serviceTotalPrice\":20000,\n         \"remarks\":\"备注说明内容详情\",\n         \"rejectReason\":\"驳回原因\",\n         \"pictureOneName\":\"http://img.gagctv.com/17103114214744738\",\n         \"pictureTwoName\":\"http://img.gagctv.com/17103114214744738\",\n         \"pictureSignName\":\"http://img.gagctv.com/17103114214744738\",\n         \"servicePackageList\":[{\n             \"servicePackageName\": \"高级包\",\n             \"expiryDate\": \"2017-12-31~2018-12-31\",\n             \"suitablePerson\": \"所有人\",\n             \"servicePackDescribe\":\"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX\",\n             \"totalPrice\":20000,\n             \"serviceContent\": [{\n                 \"serviceItem\": \"健康宣传册\",\n                 \"projectContent\": \"每年得到免费发放的健康宣传单一份\",\n                 \"unit\": \"2次/年\",\n                 \"expenses\": 2000\n             }]\n         },{\n             \"servicePackageName\": \"高级包\",\n             \"expiryDate\": \"2017-12-31~2018-12-31\",\n             \"suitablePerson\": \"所有人\",\n             \"servicePackDescribe\":\"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX\",\n             \"totalPrice\":0,\n             \"serviceContent\": [{\n                 \"serviceItem\": \"健康宣传册\",\n                 \"projectContent\": \"每年得到免费发放的健康宣传单一份\",\n                 \"unit\": \"2次/年\",\n                 \"expenses\": 0\n             },{\n                 \"serviceItem\": \"健康宣传册\",\n                 \"projectContent\": \"每年得到免费发放的健康宣传单一份\",\n                 \"unit\": \"2次/年\",\n                 \"expenses\": 0\n             }]\n         }]\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/doctor/signFamilyList",
    "title": "02、签约列表-家庭",
    "version": "1.0.0",
    "name": "open_doctor_signFamilyList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索关键字（身份证号、手机号、姓名）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signType",
            "description": "<p>签约类型 (2家庭)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>家庭签约列表</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>分页对象</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "householderIDCard",
            "description": "<p>家庭编号,户主身份证号码</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "householderName",
            "description": "<p>户主姓名</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "familyMembers",
            "description": "<p>家庭成员</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":0,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"page\": {\n           \"totalPageCount\": 1,\n           \"totalCount\": 2,\n           \"pageSize\": 100,\n           \"currentPage\": 1\n       },\n       \"list\":[{\n           \"householderIDCard\":\"\",\n           \"householderName\":\"\",\n           \"familyMembers\":\"0,1,2\"\n       },{\n           \"householderIDCard\":\"\",\n           \"householderName\":\"张三丰\",\n           \"familyMembers\":\"0,1,2\"\n       }]\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/doctor/signPersonalList",
    "title": "01、签约列表-个人",
    "version": "1.0.0",
    "name": "open_doctor_signPersonalList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索关键字(身份证号、手机号、姓名)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signType",
            "description": "<p>签约类型 (1个人)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signState",
            "description": "<p>签约状态(1已签约 2已解约 9已过期)</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>通用分页对象</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>个人签约列表</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "contractedUserIDCard",
            "description": "<p>签约用户身份证号码</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signId",
            "description": "<p>签约记录号id</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signState",
            "description": "<p>当前签约状态(1已签约 2已解约 9已过期)</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>签约用户姓名</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>签约用户年龄</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>签约用户性别</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>签约用户手机号码</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>签约用户居住地址</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "rongCloudToken",
            "description": "<p>用户融云聊天的token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\":0,\n    \"errmsg\":\"\",\n    \"data\":{\n        \"page\": {\n            \"totalPageCount\": 1,\n            \"totalCount\": 2,\n            \"pageSize\": 100,\n            \"currentPage\": 1\n        },\n        \"list\":[{\n            \"contractedUserIDCard\":\"\",\n            \"signId\":\"\",\n            \"signState\":\"1\",\n            \"name\":\"\",\n            \"age\":\"26\",\n            \"sex\":\"\",\n            \"phone\":\"\",\n            \"address\":\"\",\n            \"rongCloudToken\":\"289034890234\"\n        },{\n            \"contractedUserIDCard\":\"\",\n            \"signId\":\"333423434\",\n            \"signState\":\"9\",\n            \"name\":\"111\",\n            \"age\":\"26\",\n            \"sex\":\"\",\n            \"phone\":\"\",\n            \"address\":\"\",\n            \"rongCloudToken\":\"243908234908\"\n        }]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/doctor/submitSign",
    "title": "05、确认-提交签约",
    "version": "1.0.0",
    "name": "open_doctor_submitSign",
    "description": "<p>只要有一个已经签约,就报错,返回已经签约人的名字。   入参是Array的，用json格式的字符串。</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>用户有效性校验标识，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "signType",
            "description": "<p>签约类型：1个人 2家庭，必填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "Array",
            "optional": false,
            "field": "submitSignList",
            "description": "<p>签约用户的列表，必填</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "submitSignList列表内元素对象属性": [
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "docTeamId",
            "description": "<p>医生团队id，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>签约用户姓名，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "householderIDCard",
            "description": "<p>户主身份证号，选填。不填，字段值传空（签约类型：个人，户主身份证号传空）</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证号码，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "identityCardImage",
            "description": "<p>身份证照片名，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>用户性别（&quot;&quot;,&quot;女&quot;），必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "raceName",
            "description": "<p>民族，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>出生日期(yyyy-MM-dd)，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userPhone",
            "description": "<p>联系电话，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userAddress",
            "description": "<p>现住址，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>与户主关系，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureOneName",
            "description": "<p>拍照图片名字1，选填。不填，字段值传空</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureTwoName",
            "description": "<p>拍照图片名字2，选填。不填，字段值传空</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "pictureSignName",
            "description": "<p>用户签名图片名字，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "classificationList",
            "description": "<p>人群分类，必填。例如：['一般人群','老年人','五保户']</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "servicePackageList",
            "description": "<p>服务包，必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "Long",
            "optional": false,
            "field": "serviceTotalPrice",
            "description": "<p>服务总价(单位：分），必填</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注说明，选填。不填，字段值传空</p>"
          },
          {
            "group": "submitSignList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signTime",
            "description": "<p>签约时间，必填（2017-12-31~2018-12-31）</p>"
          }
        ],
        "servicePackageList列表内元素对象属性": [
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackageId",
            "description": "<p>服务包id，必填</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackageName",
            "description": "<p>服务包名，必填</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>服务有效期 ，必填（2017-12-31~2018-12-31）</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "serviceContent",
            "description": "<p>服务包内容，必填</p>"
          }
        ],
        "serviceContent列表内元素对象属性": [
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serviceItemId",
            "description": "<p>服务项id，必填</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serviceItem",
            "description": "<p>服务项目名，必填</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"提交成功\",\n     \"data\":{\n     }\n }",
          "type": "JSON"
        },
        {
          "title": "执行失败示例:",
          "content": "{\n     \"errcode\":500,\n     \"errmsg\":\"xxx已经签约,请勿重复签约\",\n     \"data\":{\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/server/getServicePackageList",
    "title": "06、获得服务包",
    "version": "1.0.0",
    "name": "open_server_getServicePackageList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          }
        ],
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "servicePackageList",
            "description": "<p>服务包</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "servicePackageList列表内元素对象属性": [
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackageId",
            "description": "<p>服务包id</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackageName",
            "description": "<p>服务包名</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>服务有效期 （2017-12-31~2018-12-31）</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "suitablePerson",
            "description": "<p>服务包适用人群</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "servicePackDescribe",
            "description": "<p>服务包描述</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "serviceContent",
            "description": "<p>服务包内容</p>"
          },
          {
            "group": "servicePackageList列表内元素对象属性",
            "type": "Long",
            "optional": false,
            "field": "totalPrice",
            "description": "<p>服务包总价（单位：分）</p>"
          }
        ],
        "serviceContent列表内元素对象属性": [
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serviceId",
            "description": "<p>服务项目id</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "serviceItem",
            "description": "<p>服务项目名</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "projectContent",
            "description": "<p>项目内容</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>单位（实际意义是服务频次）</p>"
          },
          {
            "group": "serviceContent列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "expenses",
            "description": "<p>费用，单位：分（免费返回0，不要是“免费”两个字）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\":200,\n    \"errmsg\":\"\",\n    \"data\":{\n        \"servicePackageList\":[{\n            \"servicePackageId\": \"234089243809\",\n            \"servicePackageName\": \"高级包\",\n            \"expiryDate\": \"2017-12-31~2018-12-31\",\n            \"suitablePerson\": \"所有人\",\n            \"servicePackDescribe\":\"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX\",\n            \"totalPrice\":20000,\n            \"serviceContent\": [{\n                \"serviceItemId\": \"2342354234\",\n                \"serviceItem\": \"健康宣传册\",\n                \"projectContent\": \"每年得到免费发放的健康宣传单一份\",\n                \"unit\": \"2次/年\",\n                \"expenses\": \"2000\"\n            }]\n        },{\n            \"servicePackageId\": \"2143423\",\n            \"servicePackageName\": \"高级包\",\n            \"expiryDate\": \"2017-12-31~2018-12-31\",\n            \"suitablePerson\": \"所有人\",\n            \"servicePackDescribe\":\"该服务包内容是XXXXXXXXXXXXXXXXXXXXXXXX\",\n            \"totalPrice\":0,\n            \"serviceContent\": [{\n                \"serviceId\": \"24363523\",\n                \"serviceItem\": \"健康宣传册\",\n                \"projectContent\": \"每年得到免费发放的健康宣传单一份\",\n                \"unit\": \"2次/年\",\n                \"expenses\": \"0\"\n            },{\n                \"serviceId\": \"423423\",\n                \"serviceItem\": \"健康宣传册\",\n                \"projectContent\": \"每年得到免费发放的健康宣传单一份\",\n                \"unit\": \"2次/年\",\n                \"expenses\": \"0\"\n            }]\n        }]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "02_Sign",
    "type": "POST",
    "url": "open/team/docTeamList",
    "title": "08、医生团队列表",
    "version": "1.0.0",
    "name": "open_team_docTeamList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>机构id</p>"
          }
        ],
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>医生团队列表</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>医生团队id</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "docTeamName",
            "description": "<p>医生团队名称</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mainDocName",
            "description": "<p>主治医生名字</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "mainDocTel",
            "description": "<p>主治医生联系电话</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "signCount",
            "description": "<p>已签约人数</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "teamMembers",
            "description": "<p>医生团队成员名字。逗号分隔字符串</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"\",\n     \"data\":{\n         \"docTeamList\":[{\n             \"id\":\"\",\n             \"docTeamName\":\"\",\n             \"mainDocName\":\"\",\n             \"mainDocTel\":\"\",\n             \"signCount\":\"\",\n             \"teamMembers\":\"\"\n         },{\n             \"id\":\"\",\n             \"docTeamName\":\"\",\n             \"mainDocName\":\"\",\n             \"mainDocTel\":\"\",\n             \"signCount\":\"\",\n             \"teamMembers\":\"\"\n         }]\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "02_Sign"
  },
  {
    "group": "03_FollowPlan",
    "type": "POST",
    "url": "open/count/crowdList",
    "title": "02、随访计划人群列表",
    "version": "1.0.0",
    "name": "open_count_crowdList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "classification",
            "description": "<p>人群分类（多个用逗号隔开：a,b,c）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "crowdType",
            "description": "<p>随访计划类型 （1首次随访未进行 2本日应随访 3本周应随访 4逾期随访）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>人群列表</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>分页对象</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>随访记录号id</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "IDCard",
            "description": "<p>随访用户身份证号码</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>随访用户姓名</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>随访用户年龄</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>随访用户性别</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>随访用户手机号码</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>随访用户地址</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "classificationList",
            "description": "<p>人群分类</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":0,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"page\": {\n           \"totalPageCount\": 1,\n           \"totalCount\": 2,\n           \"pageSize\": 100,\n           \"currentPage\": 1\n       },\n       \"list\":[\n           {\n               \"id\":\"334334344\",\n               \"IDCard\":\"\",\n               \"name\":\"\",\n               \"age\":\"25\",\n               \"sex\":\"\",\n               \"phone\":\"19912121212\",\n               \"address\":\"江苏省常州市新北区\",\n               \"classificationList\":[\"高血压\",\"糖尿病\",\"冠心病\"]\n           },\n           {\n               \"id\":\"r2323r23\",\n               \"IDCard\":\"\",\n               \"name\":\"\",\n               \"age\":\"25\",\n               \"sex\":\"\",\n               \"phone\":\"19912121212\",\n               \"address\":\"江苏省常州市新北区\",\n               \"classificationList\":[\"高血压\",\"糖尿病\"]\n           }\n       ]\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "03_FollowPlan"
  },
  {
    "group": "03_FollowPlan",
    "type": "POST",
    "url": "open/count/visitPlan",
    "title": "01、随访计划统计",
    "version": "1.0.0",
    "name": "open_count_visitPlan",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          }
        ],
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "firstVisit",
            "description": "<p>首次随访未进行</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "dayVisit",
            "description": "<p>本日应随访</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "weekVisit",
            "description": "<p>本周应随访</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "auditsVisit",
            "description": "<p>逾期随访</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"firstVisit\":200,\n       \"dayVisit\":500,\n       \"weekVisit\":200,\n       \"auditsVisit\":333\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "03_FollowPlan"
  },
  {
    "group": "04_ChatCommunication",
    "type": "POST",
    "url": "open/doctor/getChatToken",
    "title": "01、获取当前登录账号的token 医生",
    "version": "1.0.0",
    "name": "open_doctor_getChatToken",
    "description": "<p>用户聊天token失效的情况，后台去请求融云，保证返回给前端的token永远是有效的</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>用户有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          }
        ],
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "userToken",
            "description": "<p>用户融云token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\":200,\n    \"errmsg\":\"\",\n    \"data\":{\n         \"userToken\":\"9989d9yas9saydf9a9f\",\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "04_ChatCommunication"
  },
  {
    "group": "04_ChatCommunication",
    "type": "POST",
    "url": "open/doctor/getChatUserInfo",
    "title": "02、获取当前聊天列表的头像和昵称",
    "version": "1.0.0",
    "name": "open_doctor_getChatUserInfo",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userChatIds",
            "description": "<p>列表的String 例如:&quot;id1,id2,id3&quot;, 以,隔开</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "userChatList",
            "description": "<p>用户信息列表</p>"
          }
        ],
        "userChatList列表内元素对象属性": [
          {
            "group": "userChatList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userChatId",
            "description": "<p>用户融云token</p>"
          },
          {
            "group": "userChatList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userChatName",
            "description": "<p>用户融云token</p>"
          },
          {
            "group": "userChatList列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "userChatHeadUrl",
            "description": "<p>用户融云token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n    \"errcode\":200,\n    \"errmsg\":\"\",\n    \"data\":{\n        \"userChatList\":[{\n            \"userChatId:\"12g3jh1gjhg\",\n            \"userChatName:\"丽萨\",\n            \"userChatHeadUrl:\"http://touxiang1.jpg\"\n        },{\n            \"userChatId:\"2k2hk1hkj\",\n            \"userChatName:\"丽是\",\n            \"userChatHeadUrl:\"http://touxiang1.jpg\"\n        }]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "04_ChatCommunication"
  },
  {
    "group": "05_HealthRoom",
    "type": "POST",
    "url": "open/doctor/getUserInfoByDoctor",
    "title": "01、医生端用户列表",
    "version": "1.0.0",
    "name": "open_doctor_getUserInfoByDoctor",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>用户名称搜索关键词</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currentPage",
            "description": "<p>第几页</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>分页对象</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>用户列表</p>"
          }
        ],
        "list列表内数据结果": [
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别（，女）</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "Int",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "populateName",
            "description": "<p>人群分类</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "testDate",
            "description": "<p>最后一次测量时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"success\",\n     \"data\":{\n         \"page\":{\n             \"pageSize\":\"20\",\n             \"totalPageCount\":\"1\",\n             \"currentPage\":\"1\",\n             \"totalCount\":\"1\"\n         },\n         \"list\":[{\n             \"sex\":\"\",\n             \"name\":\"戴程云\",\n             \"identityCard\":\"320483199706244911\",\n             \"age\":21,\n             \"testDate\":\"2018-11-20\",\n             \"populateName\":\"五保户,低保户\"\n         }]\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "05_HealthRoom"
  },
  {
    "group": "05_HealthRoom",
    "type": "POST",
    "url": "open/thirdhealthhut/summaryReportDateList",
    "title": "02、体检列表",
    "version": "1.0.13",
    "name": "open_thirdhealthhut_summaryReportDateList",
    "description": "<p>APP用户端同一个接口</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "identityCard",
            "description": "<p>身份证号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>体检列表</p>"
          }
        ],
        "list列表内数据结果": [
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>体检时间</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "Array",
            "optional": false,
            "field": "detailList",
            "description": "<p>体检详情列表</p>"
          }
        ],
        "detailList列表内数据结果": [
          {
            "group": "detailList列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "reportProjectId",
            "description": "<p>体检项id</p>"
          },
          {
            "group": "detailList列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "detailUrl",
            "description": "<p>体检详情url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"success\",\n     \"data\":{\n         \"list\":[{\n             \"date\":\"2018-11-20\",\n             \"detailList\":[{\n                 \"reportProjectName\":\"基本体检项目\",\n                 \"reportProjectId\":\"101\",\n                 \"detailUrl\":\"http://192.168.10.12:8093/html/healthyHut/pad/basicPhysicalExamination.html?identityCard=320483199706244911&date=2018-11-20&type=101\"\n             }, {\n                 \"reportProjectName\":\"人体成分分析体检项目\",\n                 \"reportProjectId\":\"108\",\n                 \"detailUrl\":\"http://192.168.10.12:8093/html/healthyHut/pad/humanBodyCompositionExamination.html?identityCard=320483199706244911&date=2018-11-20&type=108\"\n             }]\n         }]\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "05_HealthRoom"
  },
  {
    "group": "05_HealthRoom",
    "type": "POST",
    "url": "open/thirdhealthhut/summaryReportDetailPad",
    "title": "03、健康体检详情",
    "version": "1.0.0",
    "name": "open_thirdhealthhut_summaryReportDetailPad",
    "description": "<p>APP医生端、APP用户端的详情页面使用同一个接口</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
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
            "field": "date",
            "description": "<p>日期（yyyy-MM-dd）</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>100到108依次为：个人信息、基本体检项目、尿液分析体检项目、心电图体检项目、骨密度体检项目、肺功能体检项目、九型体质体检项目、血液分析体检项目、人体成分分析体检项目</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>体检项列表</p>"
          }
        ],
        "list列表内数据结果": [
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>体检时间</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "String",
            "optional": false,
            "field": "reportProjectName",
            "description": "<p>体检项名称</p>"
          },
          {
            "group": "list列表内数据结果",
            "type": "Array",
            "optional": false,
            "field": "reportValueList",
            "description": "<p>体检值列表（具体参见携康的健康小屋接口文档）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"success\",\n     \"data\":{\n         \"list\": [{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"UserInfo\",\n             \"reportValueList\": {\n                 \"nationName\": \"汉族\",\n                 \"address\": \"广东省阳新县黄颡口镇凤凰村凤凰山291号\",\n                 \"orgName\": null,\n                 \"phone\": \"13510217417\",\n                 \"name\": \"潘少华\",\n                 \"genderName\": \"\",\n                 \"birthDate\": \"1989-07-14\"\n             },\n             \"reportProjectId\": \"100\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"基本体检项目\",\n             \"reportValueList\": {\n                 \"Waistline\": \"暂无\",\n                 \"VisionColor\": \"暂无\",\n                 \"Chol\": \"暂无\",\n                 \"LeftVsion\": \"暂无\",\n                 \"BloodSugar\": \"暂无\",\n                 \"BoPulse\": \"暂无\",\n                 \"Hdl\": \"暂无\",\n                 \"RightVsion\": \"暂无\",\n                 \"BloodSugarType\": \"暂无\",\n                 \"Dbp\": \"暂无\",\n                 \"LungCapacity\": \"暂无\",\n                 \"Ldl\": \"暂无\",\n                 \"Hemoglobin\": \"暂无\",\n                 \"BoPi\": \"暂无\",\n                 \"Height\": \"暂无\",\n                 \"MoistureContent\": \"暂无\",\n                 \"Bmi\": \"暂无\",\n                 \"Whr\": \"暂无\",\n                 \"Sbp\": \"暂无\",\n                 \"BodyTemperature\": \"暂无\",\n                 \"Bmr\": \"暂无\",\n                 \"Pulse\": \"暂无\",\n                 \"Hipline\": \"暂无\",\n                 \"Triglycerides\": \"暂无\",\n                 \"Bo\": \"暂无\",\n                 \"Weight\": \"暂无\",\n                 \"PhysicalGluHb\": \"暂无\",\n                 \"BloodKetone\": \"暂无\",\n                 \"Fat\": \"暂无\",\n                 \"Uric\": \"暂无\"\n             },\n             \"reportProjectId\": \"101\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"尿液分析体检项目\",\n             \"reportValueList\": {\n                 \"GLU\": \"暂无\",\n                 \"RBC\": \"暂无\",\n                 \"URO\": \"暂无\",\n                 \"SG\": \"暂无\",\n                 \"BIL\": \"暂无\",\n                 \"NIT\": \"暂无\",\n                 \"PH\": \"暂无\",\n                 \"KET\": \"暂无\",\n                 \"BLD\": \"暂无\",\n                 \"PRO\": \"暂无\",\n                 \"VC\": \"暂无\",\n                 \"LEU\": \"暂无\"\n             },\n             \"reportProjectId\": \"102\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"骨密度体检项目\",\n             \"reportValueList\": {\n                 \"Site\": \"暂无\",\n                 \"AGEPERCENT\": \"暂无\",\n                 \"RRF\": \"暂无\",\n                 \"TTO\": \"暂无\",\n                 \"BUA\": \"暂无\",\n                 \"ADULTPERCENT\": \"暂无\",\n                 \"PAB\": \"暂无\",\n                 \"EOA\": \"暂无\",\n                 \"TSCORE\": \"暂无\",\n                 \"SOS\": \"暂无\",\n                 \"Refdata\": \"暂无\",\n                 \"BQI\": \"暂无\",\n                 \"ZSCORE\": \"暂无\",\n                 \"RESULT\": \"暂无\"\n             },\n             \"reportProjectId\": \"104\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"肺功能体检项目\",\n             \"reportValueList\": {\n                 \"VCM\": \"暂无\",\n                 \"IRVM\": \"暂无\",\n                 \"VCP\": \"暂无\",\n                 \"MVV_BSAM\": \"暂无\",\n                 \"MMFM\": \"暂无\",\n                 \"ERVM\": \"暂无\",\n                 \"MVVM\": \"暂无\",\n                 \"BSA1M\": \"暂无\",\n                 \"MVM\": \"暂无\",\n                 \"MVVP\": \"暂无\",\n                 \"FEV1M\": \"暂无\",\n                 \"TVM\": \"暂无\",\n                 \"FEV3M\": \"暂无\",\n                 \"RRM\": \"暂无\",\n                 \"FEV2PerM\": \"暂无\",\n                 \"V25HM\": \"暂无\",\n                 \"FEV1P\": \"暂无\",\n                 \"MMFP\": \"暂无\",\n                 \"MBC\": \"暂无\",\n                 \"Result\": \"暂无\",\n                 \"V50P\": \"暂无\",\n                 \"PEFM\": \"暂无\",\n                 \"FEV3PerM\": \"暂无\",\n                 \"PEFP\": \"暂无\",\n                 \"V50M\": \"暂无\",\n                 \"FVCM\": \"暂无\",\n                 \"FVCP\": \"暂无\",\n                 \"MVV_BSAP\": \"暂无\",\n                 \"BSAM\": \"暂无\",\n                 \"MVV1P\": \"暂无\",\n                 \"FEV2M\": \"暂无\",\n                 \"MVV1M\": \"暂无\",\n                 \"V2M\": \"暂无\",\n                 \"V25P\": \"暂无\",\n                 \"ICM\": \"暂无\",\n                 \"V25HP\": \"暂无\",\n                 \"MB1M\": \"暂无\",\n                 \"V25M\": \"暂无\",\n                 \"FEV1PerM\": \"暂无\",\n                 \"FEV1PerP\": \"暂无\",\n                 \"V2P\": \"暂无\",\n                 \"MB1P\": \"暂无\",\n                 \"V75P\": \"暂无\",\n                 \"V75M\": \"暂无\"\n             },\n             \"reportProjectId\": \"105\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"九型体质体检项目\",\n             \"reportValueList\": {\n                 \"Mentality\": \"暂无\",\n                 \"Overall\": \"暂无\",\n                 \"Adaptability\": \"暂无\",\n                 \"Physique\": \"暂无\",\n                 \"CorporeityName\": \"暂无\",\n                 \"Morbidity\": \"暂无\",\n                 \"Display\": \"暂无\"\n             },\n             \"reportProjectId\": \"106\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"血液分析体检项目\",\n             \"reportValueList\": {\n                 \"PCT\": \"暂无\",\n                 \"MCV\": \"暂无\",\n                 \"PDW\": \"暂无\",\n                 \"HGB\": \"暂无\",\n                 \"GRAN_per\": \"暂无\",\n                 \"GRAN_\": \"暂无\",\n                 \"P_LCC\": \"暂无\",\n                 \"MPV\": \"暂无\",\n                 \"RBC\": \"暂无\",\n                 \"MCH\": \"暂无\",\n                 \"MID_\": \"暂无\",\n                 \"MCHC\": \"暂无\",\n                 \"HCT\": \"暂无\",\n                 \"PLT\": \"暂无\",\n                 \"RDW_CV\": \"暂无\",\n                 \"WBC\": \"暂无\",\n                 \"MID_per\": \"暂无\",\n                 \"LYM_\": \"暂无\",\n                 \"LYM_per\": \"暂无\",\n                 \"P_LCR\": \"暂无\",\n                 \"RDW_SD\": \"暂无\"\n             },\n             \"reportProjectId\": \"107\"\n         },{\n             \"date\": \"2018-09-23\",\n             \"reportProjectName\": \"人体成分分析体检项目\",\n             \"reportValueList\": {\n                 \"MuscleRegulation\": \"暂无\",\n                 \"VisceralFatLevel\": \"暂无\",\n                 \"Fatremoval\": \"暂无\",\n                 \"BasalMetabolism\": \"暂无\",\n                 \"Pbf\": \"暂无\",\n                 \"LeanBodyWeight\": \"暂无\",\n                 \"VFI\": \"暂无\",\n                 \"Height\": \"暂无\",\n                 \"Muscle\": \"暂无\",\n                 \"OtherComponentValue\": \"暂无\",\n                 \"SubcutaneousFatRate\": \"暂无\",\n                 \"BMI\": \"暂无\",\n                 \"Mineral\": \"暂无\",\n                 \"Edema\": \"暂无\",\n                 \"TBW\": \"暂无\",\n                 \"SkeletalMuscleRate\": \"暂无\",\n                 \"WeightRegulation\": \"暂无\",\n                 \"Extracellular\": \"暂无\",\n                 \"Weight\": \"暂无\",\n                 \"Protein\": \"暂无\",\n                 \"BodyWaterComponent\": \"暂无\",\n                 \"BoneMass\": \"暂无\",\n                 \"BodyWaterRate\": \"暂无\",\n                 \"BodyFatMass\": \"暂无\",\n                 \"SMM\": \"暂无\",\n                 \"FatRegulation\": \"暂无\",\n                 \"Bone\": \"暂无\",\n                 \"Intracellular\": \"暂无\"\n             },\n             \"reportProjectId\": \"108\"\n         }]\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "05_HealthRoom"
  },
  {
    "group": "06_Index",
    "type": "POST",
    "url": "open/appinformation/newsClassesList",
    "title": "02、首页卫计专线资讯分类",
    "version": "1.0.0",
    "name": "open_appinformation_newsClassesList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>新闻类型列表</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>新闻资讯类型id</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>新闻资讯类型名称</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"list\":[{\n           \"id\":\"1\",\n           \"name\":\"时政要闻\"\n       },{\n           \"id\":\"2\",\n           \"name\":\"政务公开\"\n       }]\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "06_Index"
  },
  {
    "group": "06_Index",
    "type": "POST",
    "url": "open/appinformation/newsRecommandList",
    "title": "03、首页卫计专线 新闻资讯",
    "version": "1.0.0",
    "name": "open_appinformation_newsRecommandList",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "newsClassesId",
            "description": "<p>新闻资讯类型id,选填</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "currentPage",
            "description": "<p>当前页</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>新闻列表</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": "<p>分页对象</p>"
          }
        ],
        "list列表内元素对象属性": [
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>新闻id</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "simpleInfo",
            "description": "<p>简介</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "Array",
            "optional": false,
            "field": "imageList",
            "description": "<p>图片列表</p>"
          },
          {
            "group": "list列表内元素对象属性",
            "type": "String",
            "optional": false,
            "field": "detailUrl",
            "description": "<p>详情地址链接</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"\",\n     \"data\":{\n         \"page\": {\n             \"totalPageCount\": 1,\n             \"totalCount\": 2,\n             \"pageSize\": 100,\n             \"currentPage\": 1\n         },\n        \"list\":[{\n             \"id\":\"1\",\n             \"title\":\"家庭医生服务开启\",\n             \"simpleInfo\":\"简介你懂得\",\n             \"imageList\":[\"http://xxx/images/weather/day/00.png\",\"http://xxx/images/weather/day/00.png\"],\n             \"detailUrl\":\"http://209384209.com/2093o84jlkf\"\n         },{\n             \"id\":\"2\",\n             \"title\":\"国务院新规定\",\n             \"simpleInfo\":\"简介你懂得\",\n             \"imageList\":[\"http://xxx/images/weather/day/00.png\",\"http://xxx/images/weather/day/00.png\"],\n             \"detailUrl\":\"http://209384209.com/2093o84jlkf\"\n         }]\n    }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "06_Index"
  },
  {
    "group": "06_Index",
    "type": "POST",
    "url": "open/count/signingStatistics",
    "title": "01、首页签约统计",
    "version": "1.0.0",
    "name": "open_count_signingStatistics",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "doctorToken",
            "description": "<p>医生有效性校验标识</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "userUid",
            "description": "<p>医生Uid,医生标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "newSigningNumber",
            "description": "<p>日新增签约数</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "cumulativeNumber",
            "description": "<p>累积签约总数</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "overdueNumber",
            "description": "<p>签约逾期总数</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "Int",
            "optional": false,
            "field": "auditsNumber",
            "description": "<p>签约待审核数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"newSigningNumber\":200,\n       \"cumulativeNumber\":500,\n       \"overdueNumber\":200,\n       \"auditsNumber\":333\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "06_Index"
  },
  {
    "group": "Config",
    "type": "POST",
    "url": "open/appaddressconfig/getConfigByDoctor",
    "title": "01、城市功能配置（暂时不做）",
    "version": "1.0.13",
    "name": "open_appaddressconfig_getConfigByDoctor",
    "description": "<p>pad、APP医生端、小程序医生端通用。APP用户端用的是getConfigByUser接口</p>",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>医生uid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "delayComfirmDay",
            "description": "<p>两卡制随访确认过期时间</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "visitConfirm",
            "description": "<p>两卡制随访（1开放，0不开放；下同）</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "mtx",
            "description": "<p>MTX体检</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "healthHut",
            "description": "<p>健康小屋</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n     \"errcode\":200,\n     \"errmsg\":\"success\",\n     \"data\":{\n         \"visitConfirm\":\"0\",\n         \"delayComfirmDay\":\"7\",\n         \"mtx\":\"0\",\n         \"healthHut\":\"0\"\n     }\n }",
          "type": "JSON"
        }
      ]
    },
    "filename": "./BasicPublicHealthDoctor.js",
    "groupTitle": "Config"
  },
  {
    "description": "<p>mac mac地址</p>",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./BasicPublicHealthDoctor.js",
    "group": "E__workspace_api_sign_BasicPublicHealthDoctor_js",
    "groupTitle": "E__workspace_api_sign_BasicPublicHealthDoctor_js",
    "name": ""
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
    "group": "E__workspace_api_sign_doc_main_js",
    "groupTitle": "E__workspace_api_sign_doc_main_js",
    "name": ""
  }
] });

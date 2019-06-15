define({ "api": [
  {
    "group": "01_update",
    "type": "POST",
    "url": "open/updateApk",
    "title": "01、apk更新",
    "version": "1.0.0",
    "name": "open_updateApk",
    "success": {
      "fields": {
        "data返回数据结果": [
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>版本号</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "packageName",
            "description": "<p>升级安装包名</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "packSize",
            "description": "<p>升级安装包大小(单位：kb)</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "packageUrl",
            "description": "<p>apk升级地址，eg：http://.../download?id=...</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "isForceUpdate",
            "description": "<p>是否强制更新 1是、0否</p>"
          },
          {
            "group": "data返回数据结果",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>更新内容描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"version\":\"\",\n       \"packageName\":\"\",\n       \"packSize\":\"\",\n       \"packageUrl\":\"\",\n       \"isForceUpdate\":\"\",\n       \"description\":\"\"\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "01_update"
  },
  {
    "group": "02_upload",
    "type": "POST",
    "url": "open/file/upload",
    "title": "01、上传图片（单张）",
    "version": "1.0.0",
    "name": "open_upload",
    "parameter": {
      "fields": {
        "功能请求参数": [
          {
            "group": "功能请求参数",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>图片文件，必填。不加密</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>图片文件md5值，选填。</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>医生的uid，必填。需要des3加密</p>"
          },
          {
            "group": "功能请求参数",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>图片类型，必填。0、用户头像；1、签约签名图片；2、签约医生用户合照；3、随访医生用户合照；4、心电图；99、其他图片</p>"
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
            "field": "fileName",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "执行成功示例:",
          "content": "{\n   \"errcode\":200,\n   \"errmsg\":\"\",\n   \"data\":{\n       \"fileName\":\"http://xxx.ccc.png\",\n   }\n}",
          "type": "JSON"
        }
      ]
    },
    "filename": "./index.js",
    "groupTitle": "02_upload"
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
    "group": "E__workspace_api_public_doc_main_js",
    "groupTitle": "E__workspace_api_public_doc_main_js",
    "name": ""
  }
] });

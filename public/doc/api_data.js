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
    "group": "F__privateWork_api_public_doc_main_js",
    "groupTitle": "F__privateWork_api_public_doc_main_js",
    "name": ""
  }
] });

module.exports = {
    "pluginOptions": {
        "electronBuilder": {
            "builderOptions": {
                "appId": "com.harri.electron",
                "productName": "harri-electron",
                "copyright":"Copyright © 2020",//版权信息
                "directories":{
                    "output":"./dist"//输出文件路径
                },
                "nsis": {
                    "oneClick": false,
                    "allowToChangeInstallationDirectory": true,
                    "installerHeaderIcon": "./public/favicon.ico",// 安装图标
                    "shortcutName": "harri"
                }
            }
        }
    }
}
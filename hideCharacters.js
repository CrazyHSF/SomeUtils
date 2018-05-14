//移动电话号码隐藏
var defaultCellphone = {
    isKeepFirst : true,
    keepFirstLength : 3,
    isKeepLast : true,
    keepLastLength : 4,
    templeteCharacter : "*"
}

//身份证号码隐藏
var defaultIdcard = {
    isKeepFirst : true,
    keepFirstLength : 4,
    isKeepLast : true,
    keepLastLength : 4,
    templeteCharacter : "*"
}

//银行卡号隐藏
var defaultBankCard = {
    isKeepFirst : true,
    keepFirstLength : 4,
    isKeepLast : true,
    keepLastLength : 4,
    templeteCharacter : "*"
}

//type : cellphone 对应手机号
//type : idcard 对应身份证号
//type : bankcard 对应银行卡号
var hideCharacters = function(sourceStr,type,setting){
    try{
        var options = setting ? setting : null ;
        var sourceType = type.toLocaleLowerCase();
        if(sourceType === "cellphone"){
            options =  options ? options : defaultCellphone
        }else if(sourceType === "idcard"){
            options =  options ? options : defaultIdcard
        }else if(sourceType === "bankcard"){
            options =  options ? options : defaultBankCard
        }else{
            return "未获取到配置";
        }
        //前缀
        var prefix = "";
        //前缀的长
        var prefixLength = options.keepFirstLength;
        //后缀
        var suffix = "";
        //后缀的长
        var suffixLength = options.keepFirstLength;
        //取等长的字符串作为模板
        var templet = sourceStr.replace(/./g,options.templeteCharacter);
        if(options.isKeepFirst && prefixLength > 0){
            prefix = sourceStr.slice(0,prefixLength);
            templet = templet.slice(prefixLength);
        }
        if(options.isKeepLast && suffixLength > 0 ){
            suffix = sourceStr.slice(-suffixLength);
            templet = templet.slice(0,-suffixLength);
        }
        //拼接字符串
        return  prefix.concat(templet).concat(suffix);
    }catch(e){
        return sourceStr;
    }
}

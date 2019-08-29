import pathToRegexp from 'path-to-regexp';
import { message } from 'antd';

export function pxtovw(px) {
  return `${px / 750 * 100}vw`
}

export function checkImageWH(file, width) {
  return new Promise(function(resolve, reject) {
    let filereader = new FileReader();
    filereader.onload = e => {
      let src = e.target.result;
      const image = new Image();
      image.onload = function() {
        // 获取图片的宽高，并存放到file对象中
        file.width = this.width;
        file.height = this.height;
        if(this.width <= width){
          resolve();
        }else {
          message.error(`上传图片宽度必须小${width}PX`);
          reject()
        }
      };
      image.onerror = reject;
      image.src = src;
    };
    filereader.readAsDataURL(file);
  });
}


export function pictureTypeaAndSize(file) {
  const isJPG = file.type === 'image/jpeg';
  const isJPEG = file.type === 'image/jpeg';
  const isGIF = file.type === 'image/gif';
  const isPNG = file.type === 'image/png';
  if (!(isJPG || isJPEG || isGIF || isPNG)) {
    // message.error('只能上传JPG 、JPEG 、GIF、 PNG格式的图片!');
    return false
  }
  const isLt2M = file.size / 1024 / 1024 < 1;
  if (!isLt2M) {
    // message.error('图片大小必须小于1MB!');
    return false
  }
  return (isJPG || isJPEG || isGIF || isPNG) && isLt2M
}



/**
 * Query objects that specify keys and values in an array where all values are objects.
 * @param   {array}         array   An array where all values are objects, like [{key:1},{key:2}].
 * @param   {string}        key     The key of the object that needs to be queried.
 * @param   {string}        value   The value of the object that needs to be queried.
 * @return  {object|undefined}   Return frist object when query success.
 */
export function queryArray(array, key, value) {
  if (!Array.isArray(array)) {
    return
  }
  return array.find(_ => _[key] === value)
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */
export function pathMatchRegexp(regexp, pathname) {
  return pathToRegexp(regexp).exec(pathname)
}

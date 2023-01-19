/**
 * @type {Datacontroller[]}
 */
 let Datacontroller = [
    {
      compnayname: "华泰证券",
      appname: "华泰App",
      email: "info@huatai.com.cn",
      companyID: "JSJJS11111"
    },
    {
      compnayname: "中国移动",
      appname: "移动App",
      email: "info@chinamobile.com.cn",
      companyID: "JSJJS11112"
    },
    {
      compnayname: "微众银行",
      appname: "微众App",
      email: "info@webank.com.cn",
      companyID: "JSJJS11113"
      },
  ];
  
  export function getDatacontrollers() {
    return Datacontroller;
  }
  
  /**
   * @param {appname}} number
   * @returns {Datacontroller}
   */
  export function getDatacontroller(appname) {
    return Datacontroller.find(Datacontroller => Datacontroller.appname === appname);
  }
  
  /**
   * @param {appname} number
   * @returns {void}
   */
  export function deleteDatacontroller(appname) {
    Datacontroller = Datacontroller.filter(Datacontroller => Datacontroller.appname !== appname);
  }
  
  /**
   * @typedef {{ companyname: string; appnumber: string; email: string; companyID: string }} Datacontroller
   */

  
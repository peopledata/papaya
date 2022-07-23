import React, { Component } from "react";

export default class Quoeryform extends Component {
    render() {

      return (
  
        <form id="quoeryForm" action method="post">
          <h2>查阅</h2>  
          <p>查阅应用程序服务商的个人信息使用情况.</p> 
          <section className="customerInfo">
            <section className="input"> 
              <label>名字</label>
              <input type="text" placeholder="Your First Name" name="firstName" />
            </section>
            <section className="input">
              <label>姓</label>
              <input type="text" placeholder="Your Last Name" name="lastName" />
            </section> 
            <section className="input">
              <label>电子邮件</label>
              <input type="text" placeholder="Your Email Address" name="customerEmail" />
            </section> 
            <section className="input">
              <label>手机号码</label>
              <input type="text" placeholder="Your Phone Number" name="customerPhone" />
            </section>
          </section>
          <section className="appEntry">
            <section className="appEntryRow">
              <section className="input">
                <label>应用程序服务商</label>
                <input type="text" placeholder="应用程序服务商名称" name="appName" className="appName" />
              </section> 
            </section>  
          </section> 
          <section className="comments">
            <section className="input">
              <label>留言</label>
              <textarea name="customerComment" placeholder="有关查阅的要求补充说明" defaultValue={""} />
            </section>
          </section>
          <input type="submit" defaultValue="Submit Quote" id="submitQuoteButton" />
        </form>
      );
    }
  };
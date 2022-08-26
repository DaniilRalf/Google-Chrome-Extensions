import './App.css';
import {useState} from "react";


function App() {

    setInterval(() => {
        console.log('test2');
    }, 2000)

    const [checkState, SetCheckState] = useState(0);



    let testWindow = async () => {
        // eslint-disable-next-line no-undef
        let window = await chrome.tabs.query({active: true, currentWindow: true});
        console.log(window[0]);
        console.log(window[0].url);
    }




    let howBlocks = async () => {
        // eslint-disable-next-line no-undef
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // eslint-disable-next-line no-undef
        let aaa = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: () => {

                // let elem = document.querySelector('.article-header h1')
                // elem.style.color = 'red';
                // document.body.style.backgroundColor = 'red';

                let elems = document.querySelectorAll('div');
                console.log(elems);
                let check = 0;
                elems.forEach(item => {
                    check++;
                })
                console.log(check);
                return check;
            },
        }, (injectionResults) => {
            for (const frameResult of injectionResults){
                SetCheckState(frameResult.result);
            }
        });
    }



    let getData = () => {
        // eslint-disable-next-line no-undef
        chrome.storage.sync.get(['color'], function(result) {
            console.log(result);
        });
    }


    let getCookies = () => {
        // eslint-disable-next-line no-undef
        chrome.cookies.getAll({domain: '.thecode.media'}, function (cookies){
        // // eslint-disable-next-line no-undef
        // chrome.cookies.getAll({}, function (cookies){
            for (let item of cookies){
                console.log(item);
            }
        });
        // eslint-disable-next-line no-undef
        chrome.cookies.getAll({domain: '.testing.com'}, function (cookies){
            // // eslint-disable-next-line no-undef
            // chrome.cookies.getAll({}, function (cookies){
            for (let item of cookies){
                console.log(item);
            }
        });
    }


    let setCookies = async () => {
        // // eslint-disable-next-line no-undef
        // await chrome.cookies.set({
        //     url: "http://www.testing.com",
        //     domain: "www.testing.com",
        //     name: "name1",
        //     value: "value1",
        //     path: "/"
        // });
    }



  return (
    <div className="App">
      <p>my test page</p>
      <div>Div's - {checkState}</div>
      <button onClick={() => howBlocks()}>How many blocks</button> {/*инжектирование скрипта на активную страницу*/}
      <button onClick={() => getData()}>Get Data</button> {/*получить все данные из локального хранилища(не использовать)*/}
      <button onClick={() => getCookies()}>Get Cookies</button> {/*получить все куки*/}
      <button onClick={() => setCookies()}>Set Cookies</button> {/*установить куки*/}
      <button onClick={() => testWindow()}>Window?</button> {/*получить значенеи урл активной страницы*/}
    </div>
  );
}

export default App;

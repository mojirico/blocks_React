import React, { Component }  from 'react';

class Show extends React.Component {


    render() {

        return(
                

                <div class="container">
                {/* <div th:replace="common :: header"></div> */}
                {/* <h4 th:if="${isAllPass}">ゲーム終了しました！</h4>
                <p th:if="${isAllPass}" th:text="${minPlayer.getColor()} + 'の' + ${minPlayer.getName()} + 'の勝利です。'"></p> */}

                {/* <!-- ゲーム盤 --> */}
                <table class="inline-top">
                    <tr each="row, statY : ${cells}">
                        {/* <td each="cell, statX : ${row}" class="cell" style="'background-color: #' + ${cell}"> */}
                        {/* </td> */}
                    </tr>
                </table>

                {/* // <!-- プレイヤー達の情報--> */}
                <div class="inline-top">
                    <div class="card" >
                        <div class="card-body">
                            <table class="table players-table">
                                <thead>
                                    <tr>
                                        <th>色</th>
                                        <th>名前</th>
                                        <th>ポイント</th>
                                        <th>残数</th>
                                        <th>パス有無</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr each="info : ${playersInfo}">
                                        <td text="${info.getColor()}"></td>
                                        <td text="${info.getName()}"></td>
                                        <td text="${info.getPoint()}"></td>
                                        <td text="'残り' + ${info.getBlockZansu()} + '個'"></td>
                                        <td text="${info.isPass() == true}? 'パス' : ''"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <hr />

                <div unless="${isAllPass}">

                    {/* <!-- メッセージ -->
                    <p th:if="${isLoginUserNow}">あなたの番です。置きたいブロックを選択してください。</p>
                    <p th:unless="${isLoginUserNow}">「<span th:text="${nowPlayerName}"></span>」の番です。お待ちください。</p> */}

                    {/* <!-- 手持ちのブロック --> */}
                    <table>　　{/* style="display: inline-block;" */}
                        <tr each="row : ${nexts}">
                            {/* <td each="cell : ${row}" class="cell" style="'background-color: #' + ${cell.getColor()}">
                                <a href="@{/game/kouho(block=${cell.getBlockType()}, id=${id})}" if="${cell.isDefault() == false && isLoginUserNow}">
                                    <div class="cellBlock"></div>
                                </a>
                            </td> */}
                        </tr>
                    </table>

                    <hr />
                    <a if="${isLoginUserPass}" class="btn btn-danger" href="@{/game/oku(block=${0}, id=${id}, x=${0}, y=${0}, angle=${0}, pass=${true}, player=${nowPlayer})}">
                        パスする
                    </a>
                </div>

                <div if="${isAllPass}">
                    <a class="btn btn-primary" href="@{/game/index}">
                        閉じる
                    </a>
                </div>

            </div>

            
        )
            // <script inline="javascript">
            //     var timerFunc = function() {
            //         console.log('timer!');
            //         var autoUrl = /*[[${cpuHandUrl}]]*/ null;
            //         if (autoUrl) {
            //             window.location.href = autoUrl;;
            //         }
            //     }
            //     setTimeout(timerFunc, 3000);
            //     onload = function() {
            //         var id = /*[[${id}]]*/ null;
            //         connect(id);
            //     }
            // </script>
        
    }
    
}




export default Show;
import React from 'react';
// import { withRouter } from 'react-router-dom';
import Show from './show';


class Start extends React.Component {

    constructor(props){
        super(props);
        this.state = {name: 'もものすけたろう'}
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(){
    //     this.props.history.push('/show')
    // }


    render() {
        return(
        <div class="container">
            <p>{this.state.name}</p>
            <button onClick={() => {this.setState({name: 'ももたろう'})}}>とじる</button>
            {/* <!-- <div replace="common :: header"></div> --> */}
            <p class="momoji">ももころ</p>

            <div class="contents">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">新規ゲーム</h5>

                    <form action="/game/start" method="post">

                        {/* <!-- 赤 --> */}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addonRed">赤</span>
                            </div>
                            <select class="form-control" aria-label="Username" aria-describedby="basic-addonRed" name="player-red">
                                <option selected value="${username}">あなた</option>
                                <option value="">CPU</option>
                                <option each="account : ${accounts}" text="${account.getUsername()}"
                                    value="${account.getUsername()}">naoki
                                </option>
                            </select>
                        </div>

                        {/* <!-- 青 --> */}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addonBlue">青</span>
                            </div>
                            <select class="form-control" aria-label="Username" aria-describedby="basic-addonBlue" name="player-blue">
                                <option value="${username}">あなた</option>
                                <option selected value="">CPU</option>
                                <option each="account : ${accounts}" text="${account.getUsername()}"
                                    value="${account.getUsername()}">naoki
                                </option>
                            </select>
                        </div>

                        {/* <!-- 緑 --> */}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addonGreen">緑</span>
                            </div>
                            <select class="form-control" aria-label="Username" aria-describedby="basic-addonGreen" name="player-green">
                                <option value="${username}">あなた</option>
                                <option selected value="">CPU</option>
                                <option each="account : ${accounts}" text="${account.getUsername()}"
                                    value="${account.getUsername()}">naoki
                                </option>
                            </select>
                        </div>

                        {/* <!-- 黄 --> */}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addonYellow">黄</span>
                            </div>
                            <select class="form-control" aria-label="Username" aria-describedby="basic-addonYellow" name="player-yellow">
                                <option value="${username}">あなた</option>
                                <option selected value="">CPU</option>
                                <option each="account : ${accounts}" text="${account.getUsername()}"
                                    value="${account.getUsername()}">naoki
                                </option>
                            </select>
                        </div>

                        <input type="submit" class="btn btn-primary" value="スタート"/>
                    </form>
                </div>
            </div>

            <hr />

            <table class="table table-striped game-index-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">日時</th>
                        <th scope="col">開始者</th>
                        <th scope="col">赤</th>
                        <th scope="col">青</th>
                        <th scope="col">緑</th>
                        <th scope="col">黄</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr each="gameInfo : ${games}">
                        <th scope="row" text="${gameInfo.getId()}"></th>
                        <td text="${gameInfo.getDate()}"></td>
                        <td text="${gameInfo.getAuthor()}"></td>
                        <td text="${gameInfo.getPlayers().get(0).getName()}"></td>
                        <td text="${gameInfo.getPlayers().get(1).getName()}"></td>
                        <td text="${gameInfo.getPlayers().get(2).getName()}"></td>
                        <td text="${gameInfo.getPlayers().get(3).getName()}"></td>
                        <td>
                            {/* <BrowserRouter> */}
                                {/* <a href="@{/game/show(id=${gameInfo.getId()})}" class="btn btn-primary">入る</a> */}
                                <button onClick={this.handleClick}>とじる</button>
                            {/* </BrowserRouter> */}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        </div> )
    }
}


export default Start;
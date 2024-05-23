//用戶檢舉
$.get('./json.json', function (e) {
    //console.log(e.recipes); console.log(e.users); console.log(e.userReportList); console.log(e.reportList); console.log(e.commentReports);

    //用戶清單
    e.users.forEach(e => {
        console.log(e.userId);
        $("#user").append(`<tr>
                        <td>${e.userId}</td>
                        <td>${e.name}</td>
                        <td>${e.email}</td>
                        <td>${e.reported}</td>
                    </tr>`)

    });
    //用戶清單

    //用戶檢舉
    e.userReportList.forEach(e => {
        console.log(e.userId);
        $("#user_review").append(`<tr>
                    <td>${e.reportId}</td>
                    <td>${e.reportedUserId}</td>
                    <td>${e.reportedUserEmail}</td>
                    <td>${e.reason}</td>
                    <td id="user_review_0">
                        <!-- modal的彈出按鈕 -->
                        <button class="btn btn-primary btn_modal" data-bs-toggle="modal" data-bs-target="#user${e.userId}"
                            id="censor">
                            待審核
                        </button>
                        <!-- modal的彈出按鈕 -->
                        <!-- modal的本體 -->
                        <div class="modal fade btn_modalBody" id="user${e.userId}" tabindex="-1" aria-labelledby="modal-title"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="modal-title">
                                            審核欄
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <p>被檢舉人: ${e.reportedUserId}</p>
                                        <p>被檢舉原因: ${e.reason}</p>
                                        <label for="">檢舉圖片:</label>
                                        <img src="../新增資料夾/img/螢幕擷取畫面 2024-05-21 212334.png" alt="">
                                        <p>檢舉人: ${e.reporterUserId}</p>
                                        <p>遭檢舉頁:<a href="#">${e.reportedUserId}的食譜頁</a></p>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" data-bs-dismiss="modal">通過</button>
                                        <button class="btn btn-primary" data-bs-dismiss="modal">駁回</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- modal的本體 -->
                    </td>
                </tr>`)

    });
    //用戶檢舉
    
    //食譜清單
    e.recipes.forEach(e => {
        console.log(e.userId);
        $("#recipes").append(`<tr>
                    <td>${e.id}</td>
                    <td>${e.title}</td>
                    <td>${e.author}</td>
                    <td >${e.views}</td>
                    <td >${e.message}</td>
                    <td >正常</td>
                    
                </tr>`)

    });
    //食譜清單

    //食譜檢舉
    e.reportList.forEach(e => {
        console.log(e.userId);
        $("#recipes_reports").append(`<tr>
                    <td>${e.recipeId}</td>
                    <td>${e.recipeName}</td>
                    <td>${e.reporterUserId}</td>
                    <td>${e.reason}</td>
                    <td id="user_review_0">
                        <!-- modal的彈出按鈕 -->
                        <button class="btn btn-primary btn_modal" data-bs-toggle="modal" data-bs-target="#recipes${e.reportId}"
                            id="censor">
                            待審核
                        </button>
                        <!-- modal的彈出按鈕 -->
                        <!-- modal的本體 -->
                        <div class="modal fade btn_modalBody" id="recipes${e.reportId}" tabindex="-1" aria-labelledby="modal-title"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="modal-title">
                                            審核欄
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <p>被檢舉人: ${e.reportedUsername}</p>
                                        <p>被檢舉原因: ${e.reason}</p>
                                        <p>詳細原因: ${e.details}</p>
                                        <label for="">檢舉圖片:</label>
                                        <img src="../新增資料夾/img/螢幕擷取畫面 2024-05-21 212334.png" alt="">
                                        <p>檢舉人: ${e.reporterUserId}</p>
                                        <p>遭檢舉頁:<a href="#">${e.reportedUsername}的食譜頁</a></p>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" data-bs-dismiss="modal">通過</button>
                                        <button class="btn btn-primary" data-bs-dismiss="modal">駁回</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- modal的本體 -->
                    </td>
                </tr>`)

    });
    //食譜檢舉

    //留言檢舉
    e.commentReports.forEach(e => {
        console.log(e.userId);
        $("#comments").append(`<tr>
                    <td>${e.recipeId}</td>
                    <td>${e.recipeName}</td>
                    <td>${e.author}</td>
                    <td>${e.reportedComment}</td>
                    <td>${e.reason}</td>
                    <td id="user_review_0">
                        <!-- modal的彈出按鈕 -->
                        <button class="btn btn-primary btn_modal" data-bs-toggle="modal" data-bs-target="#comment${e.reportId}"
                            id="censor">
                            待審核
                        </button>
                        <!-- modal的彈出按鈕 -->
                        <!-- modal的本體 -->
                        <div class="modal fade btn_modalBody" id="comment${e.reportId}" tabindex="-1" aria-labelledby="modal-title"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <div class="modal-title">
                                            審核欄
                                        </div>
                                    </div>
                                    <div class="modal-body">
                                        <p>被檢舉人: ${e.reportedUser}</p>
                                        <p>被檢舉原因: ${e.reason}</p>
                                        <p>被檢舉留言: ${e.reportedComment}</p>

                                        <label for="">檢舉圖片:</label>
                                        <img src="../新增資料夾/img/螢幕擷取畫面 2024-05-21 212334.png" alt="">
                                        <p>檢舉人: ${e.reportedByUserId}</p>
                                        <p>遭檢舉頁:<a href="#">${e.張三}的食譜頁</a></p>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" data-bs-dismiss="modal">通過</button>
                                        <button class="btn btn-primary" data-bs-dismiss="modal">駁回</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- modal的本體 -->
                    </td>
                </tr>`)

    });
    //留言檢舉


})



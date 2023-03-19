// 監聽按鈕的點擊事件
$('div[data-target="#myModal"]').on('click', function () {
    // 獲取按鈕中的data-img屬性的值
    var imgSrc = $(this).data('img');
    // 將模態框架中的圖片替換為指定的圖片
    $('#modal-img').attr('src', imgSrc);
});

function showModal() {
    $('#myModal').modal('show');
}
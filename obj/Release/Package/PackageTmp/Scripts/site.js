// ��ť���s���I���ƥ�
$('div[data-target="#myModal"]').on('click', function () {
    // ������s����data-img�ݩʪ���
    var imgSrc = $(this).data('img');
    // �N�ҺA�ج[�����Ϥ����������w���Ϥ�
    $('#modal-img').attr('src', imgSrc);
});

function showModal() {
    $('#myModal').modal('show');
}
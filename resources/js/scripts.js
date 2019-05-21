$(document).ready(function (e) {

    $('.action-btn').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#ajaxLoader').css('display', 'flex');
        let url = $(this).attr('href');
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (res) {
            $('#ajaxLoader').css('display', 'none');
            $('#modalDefault .modal-content').html(res);
            $('#modalDefault').modal({});
            $(document).trigger('modal-ready');
        }).fail(function (res) {
            swal({
                text: "Algo deu errado, tente novamente mais tarde!",
                icon: "error"
            }).then((ok)=>{
                window.location.reload();
            });
        });
    });

    $(document).on('submit', 'form.submit-ajax', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#ajaxLoader').css('display', 'flex');
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).find('input[name="_method"]').val(),
            data: $(this).serialize()
        }).done(function (res) {
            $('#ajaxLoader').css('display', 'none');
            if (res.success == true) {
                swal({
                    title: res.alert.title,
                    text: res.alert.text,
                    icon: res.alert.icon
                }).then(function () {
                    window.location.reload();
                });
            }
        }).fail(function (res) {
            $('#ajaxLoader').css('display', 'none');
            if (res.success == false || res.status == 500) {
                swal({
                    title: 'Solicitação recusada!',
                    text: "Não foi possivel realizar esta ação.",
                    icon: 'error'
                }).then(function () {
                    window.location.reload();
                });
            }
        });
    });

    $(document).on('submit', 'form.export-ajax', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $('#ajaxLoader').css('display', 'flex');
        let url = $(this).attr('action');
        let method = "GET";
        let data = $('.form-search').serialize();

        $.ajax({
            url: url,
            method: method,
            data: data
        }).done(function (res) {
            $('#ajaxLoader').css('display', 'none');
            var a = document.createElement("a");
            a.href = res.file;
            a.download = res.name;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
    });

    $('.password-reset').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        let url = $(this).attr('href');
        let method = "GET";
        //let email = $('input[name="email"]').val();
        let email = $('.emailUser').val();
        console.log(url);
        $.ajax({
            url: url,
            method: method,
            data: email
        }).done(function (res) {
            swal(res.title, res.text, res.status);
        }).fail(function (res) {
            swal("Falha", "Algo deu errado, por favor tente novamente mais tarde!", "error");
        });

    });


    // $('.password-reset').on('click', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //
    //     let url = $(this).attr('href');
    //     let email = $(".emailUser").val();
    //
    //
    //     $.post(url, {email: email}, function (data) {
    //         swal(data.title, data.message, data.status);
    //     }).fail(function (data) {
    //         swal("Falha", "Algo deu errado, por favor tente novamente mais tarde!", "error");
    //     });
    // });

    $('#ajaxLoader').css('display', 'none');
});

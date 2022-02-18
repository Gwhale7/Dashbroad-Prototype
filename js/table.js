$(document).ready(function () {
  $("#table").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 394px)",
    scrollCollapse: false,
    dom: '<"toolbar">frtip',
  });

  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  // $("div.toolbar").html(
  //   "<a  href='detailProduct.html'><input type='button'  value='Thêm sản phẩm mới'></a>"
  // );

  var table = $("#table").DataTable();

  $("#table tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#table-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_sub = $("#table-sub").DataTable();

  $("#table-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-table").click(function () {
    setTimeout(function () {
      $("#table-sub").DataTable().columns.adjust();
    }, 1);
  });

  $("#table-s-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_s_sub = $("#table-s-sub").DataTable();

  $("#table-s-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_s_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-s-table").click(function () {
    setTimeout(function () {
      $("#table-s-sub").DataTable().columns.adjust();
    }, 1);
  });

  $("#table-d-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_d_sub = $("#table-d-sub").DataTable();

  $("#table-d-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_d_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-d-table").click(function () {
    setTimeout(function () {
      $("#table-d-sub").DataTable().columns.adjust();
    }, 1);
  });

  $("#table-g-sub").DataTable({
    info: false,
    lengthChange: false,
    paging: false,
    oLanguage: {
      sSearch: "",
    },
    scrollX: true,
    scrollY: "calc(100vh - 476px)",
  });
  $(".dataTables_filter input").attr("placeholder", "Tìm kiếm nhanh...");

  var table_g_sub = $("#table-g-sub").DataTable();

  $("#table-g-sub tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table_g_sub.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#modal-toggle-g-table").click(function () {
    setTimeout(function () {
      $("#table-g-sub").DataTable().columns.adjust();
    }, 1);
  });
});

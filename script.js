//html:
// <button class="btn btn-sm btn-birumsa mr-1 autoreload" data-toggle="tooltip" title="Enable Otomatis Reload" data-placement="left"><i class="fa fa-arrows-rotate"></i></button>

<script>
  $(document).ready(function () {
    var reloadInterval;

    if (localStorage.getItem("autoReload") === "true") {
        enableAutoReload();
    }

    $('.autoreload').click(function () {
        if (localStorage.getItem("autoReload") === "true") {
            disableAutoReload();
        } else {
            enableAutoReload();
        }
    });

    function enableAutoReload() {
        localStorage.setItem("autoReload", "true"); // Simpan status auto-reload di localStorage

        reloadInterval = setInterval(function () {
            location.reload();
        }, 300000); // Reload setiap 300000 ms atau 5 menit , kalau 5000 ya 5 detik

        $('.autoreload')
            .removeClass('btn-birumsa')
            .addClass('btn-danger')
            .attr('title', 'Disable Otomatis Reload')
            .tooltip('dispose') 
            .tooltip(); 
    }

    function disableAutoReload() {
        localStorage.setItem("autoReload", "false"); // Hapus status auto-reload di localStorage
        clearInterval(reloadInterval);

        $('.autoreload')
            .removeClass('btn-danger')
            .addClass('btn-birumsa')
            .attr('title', 'Enable Otomatis Reload') 
            .tooltip('dispose') 
            .tooltip(); 
    }
  });
</script>

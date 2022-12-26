

let angka = 0
const kata=[
    "Itung Lagi", "Cape Dah", "Cape Yah...", 
    "Udahan Jig", "Jangan Diterusin", 
    "Mending Itung Dosa", "Istigfar",
    "Mending Dzikir Dah", "Dah Sore Dzikir Sore",
    "Baca Qur'an Gih", "Udahan", "Error", "Error",
    "Error Error"
]

$(".clicker").click(function click(){
    angka++
    console.log(angka)
    $(".angka").text(angka)
    if(angka == 10){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }else if(angka == 20){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }else if(angka == 30){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }else if(angka == 40){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }else if(angka == 50){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }
    else if(angka == 60){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }
    else if(angka == 70){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }
    else if(angka == 80){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }
    else if(angka == 90){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }
    else if(angka == 100){
        $(".title").text(kata[Math.floor(Math.random() * 15)])
    }else if(angka > 100){
        Swal.fire({
            title: 'Error',
            text: "Yah Kebanyakan, HAPUS!!!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Kehapus!!!',
                'Skormu Telah Terhapus',
                'success'
              )
              angka = 0
              $(".angka").text(angka)
              $(".title").text("Click")
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              Swal.fire(
                'Gak Jadi Deh',
                'error'
              )
            }
          })
    }})


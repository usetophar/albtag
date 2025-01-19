$("button").click((e)=>{
    $.getJSON("data.json", (data)=>{
        let bn = e.target.id;
        $("#show").html(bn)
        // $("#show").html(bn + "<br>" + Object.entries(data[bn]));
        let k = Object.entries(data[bn]);
        let keyZ = "";
        let valZ = "";
        let showZ = "";
            k.forEach(([kx,vx]) =>{
                keyZ += `${kx}&nbsp`;
                valZ += `${vx}&nbsp`;
                showZ += `${kx}&nbsp&nbsp&nbsp&nbsp${vx}<br>`
            });
        $("#key").html(showZ);
        $("#show").hide();
    });
});
    // let vz = $("button[name='name']").val();
    // let vz = $(this).attr('id');
    
    // var vz = e.target.id;
    // if(vz.startsWith("usual")){
    //     $("#show").html(vz + "平日");
    // } else {
    //     // $("#show").html(Object.keys(data.eR) + "<br>非平日");
    //     var gg = 'data.' + vz //+ ".Onine2";
    //     let k = Object.entries(data.eL);
    //     let keyZ = "";
    //     let valZ = "";
    //     let showZ = "";
    //         k.forEach(([kx,vx]) =>{
    //             keyZ += `${kx}&nbsp`;
    //             valZ += `${vx}&nbsp`;
    //             showZ += `${kx}<br>${vx}<br><br>`
    //         });
    //         $("#show").html(showZ);
    // }
    // });
// }); 
                function osonnetsend(command, fnam) {
                        var xhReq = new XMLHttpRequest();
                        xhReq.open("POST", "/", false);
                        xhReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhReq.onreadystatechange  = function(){
                            if (xhReq.readyState == 4){
                                var osonajaObj = JSON.parse(xhReq.responseText);
                                singer.playlistnew = 0 ;                             
                                for (i=0;osonajaObj.length>i;i++) {
                                     playerinput(jsonObj[i]);
                                }
                                osonajaObj.name;
                                if (singer.playlistnew >0){
                                    playerlistmake();
                                    playerinterfacefl(singer.playlistbyid[singer.singi].lengt);
                                    playerinterbarpos(singer.playlistbyid[singer.singi].lengt);
                                    if (singer.singed.toString() === "none"){
                                        singerpush(singer.singi)
                                    }
                                }
                            }
                        }
                        xhReq.send(outda);
                }
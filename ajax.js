                function osonajaxnetsend(command, fnam) {
                        var xhReq = new XMLHttpRequest();
                        xhReq.open("POST", "/", false);
                        xhReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhReq.onreadystatechange  = function(){
                            if (xhReq.readyState == 4){
                                var osonajaObj = JSON.parse(xhReq.responseText);                            
                                for (i=0;osonajaObj.length>i;i++) {
                                     osonajaxcomcent(jsonajaObj[i]);
                                }
                            }
                        }
                        xhReq.send(outda);
                }
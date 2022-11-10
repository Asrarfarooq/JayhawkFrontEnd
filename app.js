                         <script>
                            function onSumbit() {
                                var username = doucument.getElementById('email').value;
                                var dob = document.getElementById('bdate').value;
                                var date = doucument.getElementById('date').value;
                                var time  = doucument.getElementById('time').value;
                                var doc_name= doucument.getElementById('doc_name').value;
                                var speciality = doucument.getElementById('special').value;
                                console.log()
                                if(username == "" || date == "" || time == "" ){
                                        alert("FIELDS ARE INCOMPLETE");
                                }
                                else if(docname == "" && specilaity == "")
                                {
                                        alert("FIELDS ARE INCOMPLETE");    
                                }
                                else
                                {
                                    const Appointment = {
                                    
                                        username: username,
                                        date: date,
                                        time: time,
                                        doc_name: doc_name,
                                        speciality: speciality

                                    };
                                    
                                    const otherParam = {
                                        headers:
                                        {
                                            "content-type":"application/json; charset=UTF-8"
                                        },

                                        body: JSON.stringify(Appointment),
                                        method:"POST"
                                        }
                                    console.log(doucument.getElementById('date'));
                                    console.log(doucument.getElementById('time'));

                                    var valid = false;
                                    fetch("https://localhost:44354/Create", otherParam)
                                    .then(data =>{return data.json()})
                                    .then(res=>{if(res == true)
                                    {
                                        alert("APPOINTMENT ADDED")
                                        window.location.assign("confirmation.html"); 
                                    }
                                    else
                                    {
                                        alert("ERROR!");
                                    }})
                                    .catch(error=>console.log(error))
                                };
                
                            }
                         </script>
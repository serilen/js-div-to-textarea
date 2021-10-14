document.body.addEventListener("keydown", keyIncl);

function keyIncl(event) {
            //если нажаты S или E + ctrl
            if (((event.code === "KeyS" || event.code === "KeyE") && event.ctrlKey) || event.code === "Escape") {
                event.preventDefault(); //отменяем встроенные действия горячих клавиш для браузера

                let el = document.querySelector("hr").nextElementSibling; //объявляем элемент после hr

                if (event.code === "KeyE" && el.nodeName === "DIV") {
                    let newEl = document.createElement("textarea");
                    newEl.textContent = el.textContent;//Если нажата Е и тип узла после узла hr див (обязательно большими буквами), то создаем новый элемент Текстареа с новым содержимым 
                    el.replaceWith(newEl);  // меняем содержимое
                }
                
                else if (event.code === "KeyS" && el.nodeName === "TEXTAREA") {
                    let newEl = document.createElement("div");
                    newEl.textContent = el.value;  //Если нажата S и тип узла после узла hr текстареа (обязательно большими буквами - название узла), то создаем новый див с новым содержимым
                    el.replaceWith(newEl); // меняем содержимое
                }

                else if (event.code === "Escape" && el.nodeName === "TEXTAREA") {

                 let newEl = document.createElement("div");
                    newEl.textContent = document.getElementById("box").value;  //Если нажата Escape и тип узла после узла hr текстареа (обязательно большими буквами - название узла), то создаем новый див с новым содержимым взятым из первоначального дива
                    // Не работает! Где ошибка?
                    el.replaceWith(newEl); // меняем содержимое
                }
            }
        }
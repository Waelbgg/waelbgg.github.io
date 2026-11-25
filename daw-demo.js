(() => {
  "use strict";
  const initial = [
    {id:"DEMO-001",title:"Consultas SQL con subconsultas",course:"Bases de datos",date:"2026-11-26",status:"synced"},
    {id:"DEMO-002",title:"Maquetación responsive",course:"Lenguajes de marcas",date:"2026-11-28",status:"synced"},
    {id:"DEMO-003",title:"Ejercicios de bucles",course:"Programación",date:"2026-11-30",status:"pending"},
    {id:"DEMO-004",title:"Práctica de máquinas virtuales",course:"Sistemas informáticos",date:"2026-12-02",status:"pending"},
    {id:"DEMO-005",title:"Modelo entidad-relación",course:"Bases de datos",date:"2026-12-03",status:"pending"},
    {id:"DEMO-006",title:"Proyecto Java",course:"Entornos de desarrollo",date:"2026-12-04",status:"error"}
  ];
  const $ = id => document.getElementById("daw-" + id);
  const labels = {synced:"Sincronizada",pending:"Pendiente",error:"Error simulado"};
  let tasks = initial.map(t => ({...t}));
  let running = false;
  const date = new Intl.DateTimeFormat("es-ES",{day:"2-digit",month:"2-digit",year:"numeric",timeZone:"UTC"});
  const clock = new Intl.DateTimeFormat("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
  const timestamp = new Intl.DateTimeFormat("es-ES",{dateStyle:"short",timeStyle:"medium"});
  function cell(row,label,value){
    const td = row.insertCell();
    td.dataset.label = label;
    const span = document.createElement("span");
    span.textContent = value;
    td.append(span);
    return span;
  }
  function render(){
    $("total").textContent = tasks.length;
    for(const [status,id] of [["synced","synced"],["pending","pending"],["error","errors"]]){
      $(id).textContent = tasks.filter(t=>t.status===status).length;
    }
    $("tasks").replaceChildren();
    const filter = $("filter").value;
    const visible = tasks.filter(t=>filter==="all" || t.status===filter);
    for(const t of visible){
      const row = $("tasks").insertRow();
      const name = cell(row,"Tarea",t.title);
      const id = document.createElement("small");
      id.textContent = t.id; name.append(id);
      cell(row,"Asignatura",t.course);
      cell(row,"Entrega",date.format(new Date(t.date)));
      cell(row,"Estado",labels[t.status]).className = "daw-badge "+t.status;
    }
    if(!visible.length){
      const td = $("tasks").insertRow().insertCell();
      td.colSpan = 4;
      td.textContent = "No hay tareas con este estado.";
    }
  }
  function log(message){
    const li = document.createElement("li");
    const time = document.createElement("time");
    const now = new Date();
    time.dateTime = now.toISOString();
    time.textContent = clock.format(now);
    li.append(time,document.createTextNode(message));
    $("log").append(li);
    $("log").scrollTop = $("log").scrollHeight;
  }
  const wait = () => new Promise(resolve=>setTimeout(resolve,500));
  async function sync(){
    if(running) return;
    running = true;
    $("sync").disabled = $("reset").disabled = true;
    $("sync").textContent = "Simulando…";
    const steps = ["Inicializando proceso local","Consultando tareas ficticias","Procesando registros de ejemplo","Comprobando identificadores de demostración","Preparando sincronización simulada"];
    for(const step of steps){$("process").textContent = step;log(step);await wait();}
    const pending = tasks.filter(t=>t.status==="pending");
    for(const t of pending){t.status="synced";log(t.id+": sincronización simulada.");render();await wait();}
    const errors = tasks.filter(t=>t.status==="error").length;
    const result = pending.length+" nuevas sincronizadas · "+errors+" error(es) simulado(s) · sin duplicados";
    $("process").textContent = "Proceso finalizado: "+result;
    $("last").textContent = timestamp.format(new Date());
    log("Proceso finalizado. "+result+". No se ha realizado ninguna conexión externa.");
    $("sync").disabled = $("reset").disabled = running = false;
    $("sync").textContent = "Simular sincronización";
  }
  function reset(){
    if(running) return;
    tasks = initial.map(t=>({...t}));
    $("filter").value = "all";
    $("last").textContent = "Todavía no ejecutada";
    $("process").textContent = "Listo para simular";
    $("log").replaceChildren();
    log("Demo local preparada con datos ficticios.");
    render();
  }
  $("filter").addEventListener("change",render);
  $("sync").addEventListener("click",sync);
  $("reset").addEventListener("click",reset);
  reset();
})();

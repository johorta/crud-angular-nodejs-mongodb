import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  providers: [ EmpleadoService ]
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.getEmpleados();
  }

  addEmpleado(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.empleadoService.putEmpleado(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmpleados();
          M.toast({html: 'Empleado actualizado correctamente'});
        });
    } else {
      this.empleadoService.postEmpleado(form.value)
      .subscribe(res => {
        this.getEmpleados();
        this.resetForm(form);
        M.toast({html: 'Empleado guardado correctamente'});
      });
    }

  }

  getEmpleados() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleadoService.empleados = res as Empleado[];
      });
  }

  editEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = empleado;
  }

  deleteEmpleado(_id: string, form: NgForm) {
    if (confirm('¿Esta seguro que desea eliminar el empleado?')) {
      this.empleadoService.deleteEmpleado(_id)
        .subscribe(res => {
          this.getEmpleados();
          this.resetForm(form);
          M.toast({html: 'Empleado eliminado correctamente'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }

}

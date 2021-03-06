function dx_last_mile_year_script(f){
  if (f.bandwidth.value<=1000){
    f.dx_last_mile.value = 2500;
    f.dx_last_mile_year.value = f.dx_last_mile.value * 12;
  }
  else {
    f.dx_last_mile.value = 10000;
    f.dx_last_mile_year.value = f.dx_last_mile.value * 12;
  }
}

function dx_port_output_script(f){
  var regions_selected = document.querySelectorAll('input[name=regions]:checked').length
  switch (f.bandwidth.value){
    case "50":
      f.dx_port.value = (0.03 * 24 * 30 * regions_selected).toFixed(2);;
      break;
    case "100":
      f.dx_port.value = (0.06 * 24 * 30 * regions_selected).toFixed(2);
      break;
    case "200":
      f.dx_port.value = (0.12 * 24 * 30 * regions_selected).toFixed(2);
      break;
    case "300":
      f.dx_port.value = (0.18 * 24 * 30 * regions_selected).toFixed(2);
      break;
    case "400":
      f.dx_port.value = (0.24 * 24 * 30 * regions_selected).toFixed(2);
      break;
    case "500":
      f.dx_port.value = (0.30 * 24 * 30 * regions_selected).toFixed(2);
      break;
    case "1000":
      f.dx_port.value = (0.30 * 24 * 30 * regions_selected).toFixed(2);
      break;
    case "10000":
      f.dx_port.value = (2.25 * 24 * 30 * regions_selected).toFixed(2);
  }
  f.dx_port_year.value = (f.dx_port.value * 12).toFixed(2);
}

function dx_encryption_script(f){
  if (f.dx_encryption_input.checked){
      f.dx_encryption.value = 2000;
      f.dx_encryption_year.value = 2000 * 12;
  }
  else {
    f.dx_encryption.value = 0;
    f.dx_encryption_year.value = 0;
  }

}

function dx_out_output_script(f){
    f.dx_out.value = (((f.bandwidth.value * 60 * 60 * 24 * 30 * 0.03) / (12 * 8 * 1024)) * (f.utilization.value/100)).toFixed(2);
    f.dx_out_year.value = (f.dx_out.value * 12).toFixed(2);
}

function avx_out_script(f){
  var bandwidth_GBm = (f.bandwidth.value * 60 * 60 * 24 * 30) / (12 * 8 * 1024);
  if (bandwidth_GBm<=1){
      f.avx_out.value = 0;
  }
  else if (bandwidth_GBm > 1 && bandwidth_GBm <= 10000){
    f.avx_out.value = ((bandwidth_GBm * 0.09) * (f.utilization.value/100)).toFixed(2);
  }
  else if (bandwidth_GBm > 10000 && bandwidth_GBm <= 40000){
    f.avx_out.value = ((((bandwidth_GBm - (10000 + 1)) * 0.085) + (0.09 * 10000)) * (f.utilization.value/100)).toFixed(2);
  }
  else if (bandwidth_GBm > 40000 && bandwidth_GBm <= 100000){
    f.avx_out.value = ((((bandwidth_GBm - (40000 + 10000 + 1)) * 0.07) + (40000 * 0.085) + (0.09 * 10000)) * (f.utilization.value/100)).toFixed(2);
  }
  else if (bandwidth_GBm > 100000 && bandwidth_GBm <= 350000){
    f.avx_out.value = ((((bandwidth_GBm - (100000 + 40000 + 10000 + 1)) * 0.05) + (100000 * 0.07) + (40000 * 0.085) + (0.09 * 10000)) * (f.utilization.value/100)).toFixed(2);
  }
  else if (bandwidth_GBm > 350000){
    f.avx_out.value = ((((bandwidth_GBm - (350000 + 100000 + 40000 + 10000 + 1)) * 0.05) + (350000 * 0.05) + (100000 * 0.07) + (40000 * 0.085) + (0.09 * 10000)) * (f.utilization.value/100)).toFixed(2);
  }
  f.avx_out_year.value = (f.avx_out.value *12).toFixed(2);
}

function avx_instance_script(f){
  switch (f.bandwidth.value){
    case "50":
      f.avx_instance_type_output.value = "t2.micro";
      f.avx_instance.value = (0.012 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "100":
      f.avx_instance_type_output.value = "t2.micro";
      f.avx_instance.value = (0.012 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "200":
      f.avx_instance_type_output.value = "m4.xlarge";
      f.avx_instance.value = (0.2 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "300":
      f.avx_instance_type_output.value = "m4.xlarge";
      f.avx_instance.value = (0.2 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "400":
      f.avx_instance_type_output.value = "m4.xlarge";
      f.avx_instance.value = (0.2 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "500":
      f.avx_instance_type_output.value = "m4.xlarge";
      f.avx_instance.value = (0.2 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "1000":
      f.avx_instance_type_output.value = "m4.4xlarge";
      f.avx_instance.value = (0.8 * 24 * 30 * f.number_tunnels.value).toFixed(2);
      break;
    case "10000":
      f.avx_instance_type_output.value = "m4.4xlarge";
      f.avx_instance.value = (0.8 * 24 * 30 * 10 * f.number_tunnels.value).toFixed(2);
      break;
  }
  f.avx_instance_year.value =   f.avx_instance.value * 12;
}

function avx_dia_script(f){
    if (Math.floor(f.bandwidth.value/1000)==0){
      f.avx_dia.value = 300 * document.querySelectorAll('input[name=regions]:checked').length;
      f.avx_dia_year.value = f.avx_dia.value *12;
    }
    else {
      f.avx_dia.value = Math.floor(f.bandwidth.value/1000) * 300 * document.querySelectorAll('input[name=regions]:checked').length;
    }
  }

function gbps_to_GB(f){
  f.avx_bandwidth_GB.value = ((f.bandwidth.value * 60 * 60 * 24 * 365 * f.utilization.value) / (12 * 8 * 100 * 1024)).toFixed(2);
  f.dx_bandwidth_GB.value = ((f.bandwidth.value * 60 * 60 * 24 * 365 * f.utilization.value) / (12 * 8 * 100 * 1024)).toFixed(2);
}

function regions_output_script(f){
  f.number_tunnels.value = document.querySelectorAll('input[name=regions]:checked').length * f.number_vpc.value;
  f.avx_licensing.value = f.number_tunnels.value * 300;
  f.avx_licensing_year.value = f.number_tunnels.value * 300 * 12;

}

function dx_calculate_total(f){
  f.dx_total.value = (Number(f.dx_last_mile.value) + Number(f.dx_port.value) + Number(f.dx_out.value) + Number(f.dx_encryption.value)).toFixed(2);
  f.dx_total_year.value = (Number(f.dx_last_mile_year.value) + Number(f.dx_port_year.value) + Number(f.dx_out_year.value) + Number(f.dx_encryption_year.value)).toFixed(2);
}

function avx_calculate_total(f){
  f.avx_total.value = (Number(f.avx_instance.value) + Number(f.avx_licensing.value) + Number(f.avx_dia.value) + Number(f.avx_out.value)).toFixed(2);
  f.avx_total_year.value = (Number(f.avx_instance_year.value) + Number(f.avx_licensing_year.value) + Number(f.avx_dia_year.value) + Number(f.avx_out_year.value)).toFixed(2);
}

function recalculate(f){
  gbps_to_GB(f)
  regions_output_script(f);

  dx_last_mile_year_script(f);
  dx_port_output_script(f);
  dx_out_output_script(f);
  dx_encryption_script(f);

  avx_out_script(f);
  avx_dia_script(f)
  avx_instance_script(f);
  avx_dia_script(f);

  dx_calculate_total(f);
  avx_calculate_total(f);


}

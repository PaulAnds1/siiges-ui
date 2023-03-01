import { Grid, TextField, Typography } from '@mui/material';
import { Input } from '@siiges-ui/shared';
import BasicSelect from '@siiges-ui/shared/src/components/Select';
import React from 'react';

export default function DatosPlanEstudios() {
  const nivel = [
    { id: 1, nombre: 'Bachillerato' },
    { id: 2, nombre: 'Licenciatura' },
    { id: 3, nombre: 'Técnico Superior Universitario' },
    { id: 4, nombre: 'Especialidad' },
    { id: 5, nombre: 'Maestria' },
    { id: 6, nombre: 'Doctorado' },
    { id: 7, nombre: 'Profesional Asociado' },
    { id: 8, nombre: 'Educación Continua' },
  ];

  const turno = [
    { id: 1, nombre: 'Matutino' },
    { id: 2, nombre: 'Vespertino' },
    { id: 3, nombre: 'Nocturno' },
    { id: 4, nombre: 'Mixto' },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Datos del plan de estudios</Typography>
      </Grid>
      <Grid container spacing={2} sx={{ ml: 15, width: '100%' }}>
        <Grid item xs={3}>
          <BasicSelect title="Nivel" name="nivel" options={nivel} required />
        </Grid>
        <Grid item xs={9}>
          <Input
            id="nameProgramaEstudio"
            label="Nombre del programa de estudio"
            name="nameProgramaEstudio"
            auto="nameProgramaEstudio"
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            id="modalidad"
            label="Modalidad"
            name="modalidad"
            auto="modalidad"
          />
        </Grid>
        <Grid item xs={3}>
          <Input id="periodo" label="Periodo" name="periodo" auto="periodo" />
        </Grid>
        <Grid item xs={3}>
          <BasicSelect title="Turno" name="turno" options={turno} multiple required />
        </Grid>
        <Grid item xs={6}>
          <Input
            id="programDuration"
            label="Duracion del programa"
            name="programDuration"
            auto="programDuration"
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <Typography>Periodos</Typography>
        </Grid>
        <Grid item xs={9}>
          <Input
            id="creditos"
            label="Creditos necesarios para concluir el programa"
            name="creditos"
            auto="creditos"
          />
        </Grid>
        <Grid item xs={9}>
          <Input
            id="nivelPrevio"
            label="Nivel educativo previo"
            name="nivelPrevio"
            auto="nivelPrevio"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="generalObjective"
            label="Objetivo General"
            rows={4}
            multiline
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

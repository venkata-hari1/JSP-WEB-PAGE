import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  InputAdornment,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useStyles } from './MakeStyles/Style';
import { FormGrid, FormLabelText } from './ReusableStyles/Styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
type VillageType = {
  name: string;
  pincode: string;
};

type DivisionType = {
  [division: string]: VillageType[];
};

type ConstituencyType = {
  [constituency: string]: {
    divisions: DivisionType;
  };
};

type DistrictDataType = {
  [district: string]: {
    constituencies: ConstituencyType;
  };
};

export default function LocationSelector() {
  const { t } = useTranslation();
  const { classes }: any = useStyles();

  const districtData:any = t('districtData', { returnObjects: true });

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [villages, setVillages] = useState<VillageType[]>([]);
  const [selectedVillage, setSelectedVillage] = useState('');
  const [pincode, setPincode] = useState('');

  const handleDistrictChange = (e: SelectChangeEvent<string>) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setSelectedConstituency('');
    setSelectedDivision('');
    setVillages([]);
    setSelectedVillage('');
    setPincode('');
  };

  const handleConstituencyChange = (e: SelectChangeEvent<string>) => {
    const constituency = e.target.value;
    setSelectedConstituency(constituency);
    setSelectedDivision('');
    setVillages([]);
    setSelectedVillage('');
    setPincode('');
  };

  const handleDivisionChange = (e: SelectChangeEvent<string>) => {
    const division = e.target.value;
    setSelectedDivision(division);
    const villageList =
      districtData[selectedDistrict]?.constituencies[selectedConstituency]?.divisions[division] || [];
    setVillages(villageList);
    setSelectedVillage('');
    setPincode('');
  };

  const handleVillageChange = (e: SelectChangeEvent<string>) => {
    const villageName = e.target.value;
    setSelectedVillage(villageName);
    const village = villages.find((v) => v.name === villageName);
    setPincode(village?.pincode || '');
  };

  return (
    <Box sx={{ display: 'grid', gap: 2,mt:2,mx: 'auto' }}>
      {/* District */}
      <FormGrid>
      <FormControl  classes={{ root: classes.selecttextfield}}>
        <InputLabel>{t('SelectDistrict')}</InputLabel>
        <Select
         style={{ height: 30 }}
          value={selectedDistrict}
          onChange={handleDistrictChange}    
          input={
            <OutlinedInput
              label={t('SelectDistrict')}
              classes={{ notchedOutline: classes.selectoutlineBorder }}
            
            />
          }
        >
          {Object.keys(districtData).map((district) => (
            <MenuItem key={district} value={district}>
              {district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ErrorOutlineIcon sx={{ marginTop: '12px',color:'#889095' }} />
      </FormGrid>
      {/* Constituency */}
      <FormGrid>
      <FormControl fullWidth  disabled={!selectedDistrict} classes={{ root: classes.selecttextfield}}>
        <InputLabel>{t('SelectConstituency')}</InputLabel>
        <Select
          value={selectedConstituency}
          onChange={handleConstituencyChange}
          label={t('SelectConstituency')}
          input={
            <OutlinedInput
              label={t('SelectConstituency')}
              classes={{ notchedOutline: classes.selectoutlineBorder }}
            
            />
          }
        >
          {selectedDistrict &&
            Object.keys(districtData[selectedDistrict]?.constituencies || {}).map((constituency) => (
              <MenuItem key={constituency} value={constituency}>
                {constituency}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <ErrorOutlineIcon sx={{ marginTop: '12px',color:'#889095' }} />
      </FormGrid>
      {/* Division */}
      <FormGrid>
      <FormControl fullWidth  disabled={!selectedConstituency}  classes={{ root: classes.selecttextfield}}>
        <InputLabel>{t('SelectDivision')}</InputLabel>
        <Select
          value={selectedDivision}
          onChange={handleDivisionChange}
          label={t('SelectDivision')}
          input={
            <OutlinedInput
              label={t('SelectDivision')}
              classes={{ notchedOutline: classes.selectoutlineBorder }}
            
            />
          }
        >
          {selectedDistrict &&
            selectedConstituency &&
            Object.keys(
              districtData[selectedDistrict]?.constituencies[selectedConstituency]?.divisions || {}
            ).map((division) => (
              <MenuItem key={division} value={division}>
                {division}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <ErrorOutlineIcon sx={{ marginTop: '12px',color:'#889095' }} />
      </FormGrid>
      {/* Village */}
      <FormGrid>
      <FormControl fullWidth  disabled={!selectedDivision}  classes={{ root: classes.selecttextfield}}>
        <InputLabel>{t('SelectVillageArea')}</InputLabel>
        <Select
          value={selectedVillage}
          onChange={handleVillageChange}
          label={t('SelectVillageArea')}
          input={
            <OutlinedInput
              label={t('SelectVillageArea')}
              classes={{ notchedOutline: classes.selectoutlineBorder }}
            
            />
          }
        >
          {villages.map((village) => (
            <MenuItem key={village.name} value={village.name}>
              {village.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ErrorOutlineIcon sx={{ marginTop: '12px',color:'#889095' }} />
      </FormGrid>

      {/* Pincode */}
      <FormGrid>
      <Box>
      <FormLabelText>{t('Pincode')} <Typography component="span" color='red'>*</Typography></FormLabelText>
      <TextField
        fullWidth
   
        placeholder={t('Pincode')}
        value={pincode}
        InputProps={{
          readOnly: true,
          classes: { notchedOutline: classes.outlineBorder },
        }}
        classes={{ root: classes.textfield }}
      />
      </Box>
       <ErrorOutlineIcon sx={{ marginTop: '38px',color:'#889095' }} />
       </FormGrid>
    </Box>
  );
}

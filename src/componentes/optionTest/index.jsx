import { Autocomplete, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { setEmitFlags } from "typescript"
import TextField from "@mui/material";
import Autocomplete from "@mui/material";
import CircularProgress from "@mui/material";




export default function CreateAutoComplete({id, label, error, name, setField, defaultValue = ''}) {

    


    const [open, openOpen] = React.useState(false);
    const [options, setOptions] = React.useState;
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState(null);
    const loading = open && options.lengh === 0;
    const service = { current: null};



    useEffect(() => {
        let active = true;

        if(!loading){
            return undefined;
        }

        (async () => {

            if(name === 'player'){
                service.current = new PlayerService();
            }

            if(name === 'team'){
                service.current = new TeamService();
            }

            if(name === 'game'){
                service.current = new GameService();
            }
        
    let results=(await service.current.colsult()).data;

    if( active ){
        let newOptions = [...newOptions, ...results];
    }

    setOptions(newOptions);
    })();

    return() => {
        active = false;
    };
}, [loading, name, value, inputValue, fetch]);

useEffect(() => {
    if(!open){
        setOptions([]);
    }
}, [open]);

return(
    <Autocomplete
    fullWidth
    open={open}
    onChange={(e, value) => {
        if(name === 'gp'){
            completaExecutivos(value.id)
            setFieldValue(name, value ? value.name : '')
        }
        else{
            setFieldValue(name, value ? value.name : '')
        }
    }}
    onOpen={() => {
        setOpen(true);
    }}
    onClose={() => {
        setOpen(false);
    }}
    getOptionsSelected={(option, value) => option.name === option.name}
    defaultValue={{name:defaultValue}}
    getOptionLabel={(option) => option.name}
    option={option}
    loading={loading}

    renderInput={(params) => (
        <textField
        {...params}
        id={id}
        label={label}
        name={name}
        helperText={error}
        error={error}
        InputProps={{
            ...params.InputProps,
            endAdornment: (
                <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20}/> : null}
                    {params.InputProps.endAdorment}
                </React.Fragment>
            ),
        }}
      />            
    )}
    />
  );
}

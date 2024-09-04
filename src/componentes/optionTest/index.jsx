import Autocomplete from '@mui/material/Autocomplete';
import React, { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import PlayerService from '../../service/playerService'; // Ajuste conforme necessário
import TeamService from '../../service/teamService copy';
import GameService from '../../service/teamService copy';

export default function CreateAutoComplete({ id, label, error, name, setFieldValue, value: externalValue }) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const loading = open && options.length === 0;
    const service = useRef(null);

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            try {
                if (name === 'player') {
                    service.current = new PlayerService();
                } else if (name === 'team') {
                    service.current = new TeamService();
                } else if (name === 'game') {
                    service.current = new GameService();
                }

                if (service.current) {
                    const results = (await service.current.consult()).data;

                    if (active) {
                        setOptions(results);
                    }
                }
            } catch (error) {
                console.error('Error fetching options:', error);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading, name]); // Remover `value` e `inputValue` da lista de dependências

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    useEffect(() => {
        // Atualiza o valor selecionado com base no valor externo
        if (externalValue) {
            const selectedOption = options.find(option => option.nome === externalValue);
            setValue(selectedOption || null);
            setInputValue(selectedOption ? selectedOption.nome : ''); // Atualiza o inputValue
        }
    }, [externalValue, options]);

    return (
        <Autocomplete
            fullWidth
            open={open}
            value={value}
            onChange={(e, newValue) => {
                setValue(newValue);
                setFieldValue(name, newValue ? newValue.nome : '');
            }}
            onInputChange={(e, newInputValue) => {
                setInputValue(newInputValue);
            }}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            isOptionEqualToValue={(option, value) => option.nome === value.nome}
            getOptionLabel={(option) => option.nome || ''}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    id={id}
                    label={label}
                    name={name}
                    helperText={error}
                    error={!!error}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}

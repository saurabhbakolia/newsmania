import { Container, FormControl, FormLabel, Paper, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Form = () => {
    // Create state variables to store the input values
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can do something with the title and body here, such as sending it to an API or displaying it on the page.
        console.log('Title:', title);
        console.log('Body:', body);
    }

    return (
        <Container maxWidth="xl" sx={{ mt: 8 }}>
            <Paper elevation={1}>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth sx={{ p: 2 }}>
                        <Typography variant="h2" fontWeight="bold" align="center" sx={{ mb: 8 }}>
                            Share your News Article :)
                        </Typography>
                        <TextField
                            label="News Article Title"
                            fullWidth
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            sx={{ mb: 2 }} 
                            placeholder='Enter Article Title'
                        />
                        <TextField
                            label="News Article Body"
                            fullWidth
                            multiline
                            rows={10}
                            variant="outlined"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                            sx={{ mb: 2 }} 
                            placeholder='Enter Article Body'
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Paper>
        </Container>
    )
}

export default Form

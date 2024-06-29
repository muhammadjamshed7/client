// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import { Box, Button, Container, TextField, Typography, List, ListItem, ListItemText, Card, CardContent, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

// const socket = io('http://localhost:5000');

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [imagesWithPrices, setImagesWithPrices] = useState([]);
//   const [hotelOptions, setHotelOptions] = useState([]);

//   useEffect(() => {
//     socket.on('message', (message) => {
//       setMessages(prevMessages => [...prevMessages, { text: message, sender: 'bot' }]);
//     });

//     socket.on('images_with_prices', (images) => {
//       setImagesWithPrices(images);
//       setShowDropdown(false); // Hide dropdown if images are displayed
//     });

//     socket.on('hotel_options', (options) => {
//       setHotelOptions(options);
//       setShowDropdown(false); // Hide dropdown if hotel options are displayed
//     });

//     return () => {
//       socket.off('message');
//       socket.off('images_with_prices');
//       socket.off('hotel_options');
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim()) {
//       socket.emit('message', input);
//       setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
//       setInput('');
//     }
//   };

//   const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
//     setShowDropdown(false);
//     socket.emit('message', event.target.value);
//     setMessages(prevMessages => [...prevMessages, { text: event.target.value, sender: 'user' }]);
//   };

//   const handleHelloResponse = () => {
//     const response = "Thanks for reaching out to us! How can we assist you today?";
//     socket.emit('message', response);
//     setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
//   };

//   const handleTourismInformation = () => {
//     setShowDropdown(true);
//   };

//   const renderDropdown = () => {
//     if (showDropdown) {
//       return (
//         <FormControl fullWidth sx={{ mt: 2 }}>
//           <InputLabel>Select an Option</InputLabel>
//           <Select
//             value={selectedOption}
//             onChange={handleDropdownChange}
//             displayEmpty
//             fullWidth
//           >
//             <MenuItem value="Dubai Tourism and Travel Services">Dubai Tourism</MenuItem>
//             <MenuItem value="Visa Processing Information">Visa Process</MenuItem>
//             <MenuItem value="Hotel Booking Information">Hotel Booking</MenuItem>
//             {/* Add more options as needed */}
//           </Select>
//         </FormControl>
//       );
//     }
//     return null;
//   };

//   const renderImagesWithPrices = () => {
//     if (imagesWithPrices.length > 0) {
//       return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
//           {imagesWithPrices.map((image, index) => (
//             <Box key={index} sx={{ mb: 2 }}>
//               <img src={image.url} alt={`Option ${index + 1}`} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
//               <Typography variant="body1" sx={{ mt: 1 }}>{`Price: ${image.price}`}</Typography>
//             </Box>
//           ))}
//         </Box>
//       );
//     }
//     return null;
//   };

//   const renderHotelOptions = () => {
//     if (hotelOptions.length > 0) {
//       return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
//           {hotelOptions.map((option, index) => (
//             <Card key={index} sx={{ maxWidth: '80%', mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">{option.name}</Typography>
//                 <img src={option.image} alt={option.name} style={{ width: '100%', maxWidth: '300px', height: 'auto', marginTop: '8px' }} />
//                 <Typography variant="body1" sx={{ mt: 1 }}>{`Price: ${option.price}`}</Typography>
//                 <Button variant="outlined" color="primary" sx={{ mt: 1 }} onClick={() => handleCallToHotel(option.name)}>Call Hotel Management</Button>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       );
//     }
//     return null;
//   };

//   const handleCallToHotel = (hotelName) => {
//     const response = `Initiating call to ${hotelName} management. Please hold on...`;
//     socket.emit('message', response);
//     setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
//   };

//   return (
//     <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'space-between', p: 1 }}>
//       <Box sx={{ overflowY: 'auto', flex: 1, my: 2 }}>
//         <List>
//           {messages.map((msg, index) => (
//             <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
//               <Card sx={{ maxWidth: '80%', bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.200' }}>
//                 <CardContent>
//                   <Typography variant="body1">
//                     {msg.text}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </ListItem>
//           ))}
//         </List>
//         {renderImagesWithPrices()}
//         {renderHotelOptions()}
//       </Box>
//       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//         {renderDropdown()}
//         <TextField
//           variant="outlined"
//           fullWidth
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//           placeholder="Type your message..."
//           size="small"
//         />
//         <Button variant="contained" color="primary" onClick={sendMessage} size="small">
//           Send
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Chatbot;






// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import { Box, Button, Container, TextField, Typography, List, ListItem, ListItemText, Card, CardContent, MenuItem, Select, FormControl, InputLabel, IconButton } from '@mui/material';
// import PhoneIcon from '@mui/icons-material/Phone';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const socket = io('http://localhost:5000');

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [imagesWithPrices, setImagesWithPrices] = useState([]);
//   const [hotelOptions, setHotelOptions] = useState([]);

//   useEffect(() => {
//     socket.on('message', (message) => {
//       setMessages(prevMessages => [...prevMessages, { text: message, sender: 'bot' }]);
//     });

//     socket.on('images_with_prices', (images) => {
//       setImagesWithPrices(images);
//       setShowDropdown(false); // Hide dropdown if images are displayed
//     });

//     socket.on('hotel_options', (options) => {
//       setHotelOptions(options);
//       setShowDropdown(false); // Hide dropdown if hotel options are displayed
//     });

//     return () => {
//       socket.off('message');
//       socket.off('images_with_prices');
//       socket.off('hotel_options');
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim()) {
//       socket.emit('message', input);
//       setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
//       setInput('');
//     }
//   };

//   const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
//     setShowDropdown(false);
//     socket.emit('message', event.target.value);
//     setMessages(prevMessages => [...prevMessages, { text: event.target.value, sender: 'user' }]);
//   };

//   const handleHelloResponse = () => {
//     const response = "Thanks for reaching out to us! How can we assist you today?";
//     socket.emit('message', response);
//     setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
//   };

//   const handleTourismInformation = () => {
//     setShowDropdown(true);
//   };

//   const renderDropdown = () => {
//     if (showDropdown) {
//       return (
//         <FormControl fullWidth sx={{ mt: 2 }}>
//           <InputLabel>Select an Option</InputLabel>
//           <Select
//             value={selectedOption}
//             onChange={handleDropdownChange}
//             displayEmpty
//             fullWidth
//           >
//             <MenuItem value="Dubai Tourism and Travel Services">Dubai Tourism</MenuItem>
//             <MenuItem value="Visa Processing Information">Visa Process</MenuItem>
//             <MenuItem value="Hotel Booking Information">Hotel Booking</MenuItem>
//             {/* Add more options as needed */}
//           </Select>
//         </FormControl>
//       );
//     }
//     return null;
//   };

//   const renderImagesWithPrices = () => {
//     if (imagesWithPrices.length > 0) {
//       return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
//           {imagesWithPrices.map((image, index) => (
//             <Box key={index} sx={{ mb: 2 }}>
//               <Card sx={{ maxWidth: '300px', mb: 2 }}>
//                 <img src={image.url} alt={`Option ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
//                 <CardContent>
//                   <Typography variant="body1">{`Price: ${image.price}`}</Typography>
//                   <IconButton color="primary" onClick={() => handleWhatsAppCall()}>
//                     <WhatsAppIcon />
//                   </IconButton>
//                 </CardContent>
//               </Card>
//             </Box>
//           ))}
//         </Box>
//       );
//     }
//     return null;
//   };

//   const renderHotelOptions = () => {
//     if (hotelOptions.length > 0) {
//       return (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
//           {hotelOptions.map((option, index) => (
//             <Card key={index} sx={{ maxWidth: '80%', mb: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">{option.name}</Typography>
//                 <img src={option.image} alt={option.name} style={{ width: '100%', maxWidth: '300px', height: 'auto', marginTop: '8px' }} />
//                 <Typography variant="body1" sx={{ mt: 1 }}>{`Price: ${option.price}`}</Typography>
//                 <Button variant="outlined" color="primary" sx={{ mt: 1 }} onClick={() => handleCallToHotel(option.name)}>Call Hotel Management</Button>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       );
//     }
//     return null;
//   };

//   const handleCallToHotel = (hotelName) => {
//     const response = `Initiating call to ${hotelName} management. Please hold on...`;
//     socket.emit('message', response);
//     setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
//     // Replace with actual phone number to call
//     window.open('tel:+923029015909');
//   };

//   const handleWhatsAppCall = () => {
//     // Replace with actual WhatsApp number and message
//     window.open('https://wa.me/923029015909?text=Hello%2C%20I%20want%20to%20inquire%20about%20the%20Burj%20Khalifa%20tour%20options.');
//   };

//   return (
//     <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'space-between', p: 1 }}>
//       <Box sx={{ overflowY: 'auto', flex: 1, my: 2 }}>
//         <List>
//           {messages.map((msg, index) => (
//             <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
//               <Card sx={{ maxWidth: '80%', bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.200' }}>
//                 <CardContent>
//                   <Typography variant="body1">
//                     {msg.text}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </ListItem>
//           ))}
//         </List>
//         {renderImagesWithPrices()}
//         {renderHotelOptions()}
//       </Box>
//       <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//         {renderDropdown()}
//         <TextField
//           variant="outlined"
//           fullWidth
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//           placeholder="Type your message..."
//           size="small"
//         />
//         <Button variant="contained" color="primary" onClick={sendMessage} size="small">
//           Send
//         </Button>
//         <IconButton color="primary" onClick={() => window.open('tel:+923029015909')}>
//           <PhoneIcon />
//         </IconButton>
//       </Box>
//     </Container>
//   );
// };

// export default Chatbot;


import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Box, Button, Container, TextField, Typography, List, ListItem, ListItemText, Card, CardContent, MenuItem, Select, FormControl, InputLabel, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const socket = io('http://localhost:5000');

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [imagesWithPrices, setImagesWithPrices] = useState([]);
  const [hotelOptions, setHotelOptions] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, { text: message, sender: 'bot' }]);
    });

    socket.on('images_with_prices', (images) => {
      setImagesWithPrices(images);
      setShowDropdown(false); // Hide dropdown if images are displayed
    });

    socket.on('hotel_options', (options) => {
      setHotelOptions(options);
      setShowDropdown(false); // Hide dropdown if hotel options are displayed
    });

    return () => {
      socket.off('message');
      socket.off('images_with_prices');
      socket.off('hotel_options');
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('message', input);
      setMessages(prevMessages => [...prevMessages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    setShowDropdown(false);
    socket.emit('message', event.target.value);
    setMessages(prevMessages => [...prevMessages, { text: event.target.value, sender: 'user' }]);
  };

  const handleHelloResponse = () => {
    const response = "Thanks for reaching out to us! How can we assist you today?";
    socket.emit('message', response);
    setMessages(prevMessages => [{ text: response, sender: 'bot' }, ...prevMessages]); // Prepend new message
  };

  const handleTourismInformation = () => {
    setShowDropdown(true);
  };

  const renderDropdown = () => {
    if (showDropdown) {
      return (
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Select an Option</InputLabel>
          <Select
            value={selectedOption}
            onChange={handleDropdownChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="Dubai Tourism and Travel Services">Dubai Tourism</MenuItem>
            <MenuItem value="Visa Processing Information">Visa Process</MenuItem>
            <MenuItem value="Hotel Booking Information">Hotel Booking</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
      );
    }
    return null;
  };

  const renderImagesWithPrices = () => {
    if (imagesWithPrices.length > 0) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          {imagesWithPrices.map((image, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Card sx={{ maxWidth: '300px', mb: 2 }}>
                <img src={image.url} alt={`Option ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                <CardContent>
                  <Typography variant="body1">{`Price: ${image.price}`}</Typography>
                  <IconButton color="primary" onClick={() => handleWhatsAppCall()}>
                    <WhatsAppIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      );
    }
    return null;
  };

  const renderHotelOptions = () => {
    if (hotelOptions.length > 0) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
          {hotelOptions.map((option, index) => (
            <Card key={index} sx={{ maxWidth: '80%', mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{option.name}</Typography>
                <img src={option.image} alt={option.name} style={{ width: '100%', maxWidth: '300px', height: 'auto', marginTop: '8px' }} />
                <Typography variant="body1" sx={{ mt: 1 }}>{`Price: ${option.price}`}</Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 1 }} onClick={() => handleCallToHotel(option.name)}>Call Hotel Management</Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      );
    }
    return null;
  };

  const handleCallToHotel = (hotelName) => {
    const response = `Initiating call to ${hotelName} management. Please hold on...`;
    socket.emit('message', response);
    setMessages(prevMessages => [{ text: response, sender: 'bot' }, ...prevMessages]); // Prepend new message
    // Replace with actual phone number to call
    window.open('tel:+923029015909');
  };

  const handleWhatsAppCall = () => {
    // Replace with actual WhatsApp number and message
    window.open('https://wa.me/923029015909?text=Hello%2C%20I%20want%20to%20inquire%20about%20the%20Burj%20Khalifa%20tour%20options.');
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'space-between', p: 1 }}>
      <Box sx={{ overflowY: 'auto', flex: 1, my: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <Card sx={{ maxWidth: '80%', bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.200' }}>
                <CardContent>
                  <Typography variant="body1">
                    {msg.text}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
        {renderImagesWithPrices()}
        {renderHotelOptions()}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {renderDropdown()}
        <TextField
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          size="small"
        />
        <Button variant="contained" color="primary" onClick={sendMessage} size="small">
          Send
        </Button>
        <IconButton color="primary" onClick={() => window.open('tel:+923029015909')}>
          <PhoneIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Chatbot;

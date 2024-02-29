import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useToast, VStack, Image, FormControl, FormLabel, Select, Textarea } from "@chakra-ui/react";
import { FaCarCrash, FaClipboardList, FaMapMarkedAlt, FaStar } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  // Placeholder function to simulate quote generation and booking
  const handleQuoteGeneration = () => {
    // This would involve calling an API and handling the promise
    toast({
      title: "Quote Generated",
      description: "Your quote has been generated and sent to your email.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6} textAlign="center">
        Ryds Bilglas - Automating Glass Repair Services
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={10}>
        {/* Homepage & Overview of Services */}
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>
              Welcome to Ryds Bilglas
            </Heading>
            <Text fontSize="md" mb={4}>
              We provide top-notch glass repair and replacement services for your vehicle. Ensure your safety with our expert services.
            </Text>
            <Button leftIcon={<FaCarCrash />} colorScheme="blue">
              Get a Quote
            </Button>
          </Box>

          {/* Service Booking System */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              Book Your Service
            </Heading>
            <FormControl id="vehicle-details" isRequired>
              <FormLabel>Vehicle Details</FormLabel>
              <Input placeholder="Vehicle Make, Model, Year" />
            </FormControl>
            <FormControl id="service-type" mt={4} isRequired>
              <FormLabel>Service Needed</FormLabel>
              <Select placeholder="Select service">
                <option value="repair">Glass Repair</option>
                <option value="replacement">Glass Replacement</option>
              </Select>
            </FormControl>
            <FormControl id="preferred-time" mt={4}>
              <FormLabel>Preferred Timing</FormLabel>
              <Input type="date" />
            </FormControl>
            <Button mt={4} colorScheme="teal" onClick={handleQuoteGeneration}>
              Generate Quote
            </Button>
          </Box>
        </VStack>

        {/* Customer Portal */}
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              Customer Portal
            </Heading>
            <Text fontSize="md" mb={4}>
              View your order status, quotes, and details in one place.
            </Text>
            <Button leftIcon={<FaClipboardList />} colorScheme="green">
              View Orders
            </Button>
          </Box>

          {/* Feedback Section */}
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              Service Feedback
            </Heading>
            <Textarea placeholder="Share your experience with us..." />
            <Button mt={4} leftIcon={<FaStar />} colorScheme="yellow">
              Submit Feedback
            </Button>
          </Box>
        </VStack>
      </Flex>

      {/* Glazier Mobile Interface Example */}
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mt={10}>
        <Heading as="h3" size="md" mb={4}>
          Glazier Interface (Mobile View)
        </Heading>
        <Stack spacing={4} align="center">
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="pink" w="full">
            Navigate to Site
          </Button>
          <Button leftIcon={<FaClipboardList />} colorScheme="purple" w="full">
            Update Job Status
          </Button>
          <Image src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2IlMjBjb21wbGV0aW9uJTIwcGhvdG98ZW58MHx8fHwxNzA5MjQ2OTk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Job Completion" />
        </Stack>
      </Box>
    </Container>
  );
};

export default Index;

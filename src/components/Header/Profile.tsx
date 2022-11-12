import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcus Davanco</Text>
          <Text color="gray.300" fontSize="small">
            marcusdavanco@dashgo.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Marcus Davanco"
        src="https://github.com/marcusdavanco.png"
      />
    </Flex>
  );
}

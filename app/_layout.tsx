import { Stack } from "expo-router";


export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index"  options={{ headerShown: false }} />
        <Stack.Screen name="main"  options={{ headerShown: false }} />
        <Stack.Screen name="analytic"  options={{ headerShown: false }} />
        <Stack.Screen name="balance"  options={{ headerShown: false }} />
        <Stack.Screen name="category"  options={{ headerShown: false }} />
      </Stack>
  );
}

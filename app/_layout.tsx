import { Stack } from "expo-router";


export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index"  options={{ headerShown: false }} />
        <Stack.Screen name="main"  options={{ headerShown: false }} />
        <Stack.Screen name="Balance"  options={{ headerShown: false }} />
        <Stack.Screen name="Category"  options={{ headerShown: false }} />
        <Stack.Screen name="Analytic"  options={{ headerShown: false }} />
      </Stack>
  );
}

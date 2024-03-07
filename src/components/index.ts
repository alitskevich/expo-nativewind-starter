import { Text as TextRN, View as ViewRN, TouchableOpacity as TouchableOpacityRN, TextInput as TextInputRN, TextProps, ViewProps, TextInputProps, TouchableOpacityProps } from "react-native";

export const Text = TextRN as unknown as ((props: TextProps & { className?: string }) => React.ReactNode);
export const View = ViewRN as unknown as ((props: ViewProps & { className?: string }) => React.ReactNode);
export const TouchableOpacity = TouchableOpacityRN as unknown as ((props: TouchableOpacityProps & { className?: string }) => React.ReactNode);
export const TextInput = TextInputRN as unknown as ((props: TextInputProps & { className?: string }) => React.ReactNode);
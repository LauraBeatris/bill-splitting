import theme from "./theme";

const brandPrimary = theme.colors.yellow;
const brandPrimaryTap = theme.colors.yellow;

const antTheme = {
  color_text_base: "#000000",
  color_text_base_inverse: "#ffffff",
  color_text_secondary: "#a4a9b0",
  color_text_placeholder: "#bbbbbb",
  color_text_disabled: "#bbbbbb",
  color_text_caption: "#888888",
  color_text_paragraph: "#333333",
  color_link: brandPrimary,

  fill_base: "#ffffff",
  fill_body: "#f5f5f9",
  fill_tap: "#dddddd",
  fill_disabled: "#dddddd",
  fill_mask: "rgba(0, 0, 0, .4)",
  color_icon_base: "#cccccc",
  fill_grey: "#f7f7f7",

  opacity_disabled: "0.3",

  brand_primary: brandPrimary,
  brand_primary_tap: brandPrimaryTap,
  brand_success: "#6abf47",
  brand_warning: "#f4333c",
  brand_error: "#f4333c",
  brand_important: "#ff5b05",
  brand_wait: "#108ee9",

  border_color_base: "#dddddd",

  font_size_icontext: 20,
  font_size_caption_sm: 12,
  font_size_base: 14,
  font_size_subhead: 15,
  font_size_caption: 16,
  font_size_heading: 17,

  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,

  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,

  line_height_base: 1,
  line_height_paragraph: 1.5,

  icon_size_xxs: 20,
  icon_size_xs: 24,
  icon_size_sm: 32,
  icon_size_md: 42,
  icon_size_lg: 52,
  ease_in_out_quint: "cubic_bezier(0.86, 0, 0.07, 1)",

  actionsheet_item_height: 50,
  actionsheet_item_font_size: 18,

  button_height: 47,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: "#0e80d2",

  ghost_button_color: brandPrimary,
  ghost_button_fill_tap: `${brandPrimary}99`,

  warning_button_fill: "#e94f4f",
  warning_button_fill_tap: "#d24747",

  link_button_fill_tap: "#dddddd",
  link_button_font_size: 16,

  modal_font_size_heading: 18,
  modal_button_font_size: 18,
  modal_button_height: 50,

  list_title_height: 30,
  list_item_height_sm: 35,
  list_item_height: 44,

  input_label_width: 17,
  input_font_size: 17,
  input_color_icon: "#cccccc",
  input_color_icon_tap: brandPrimary,

  tabs_color: brandPrimary,
  tabs_height: 42,
  tabs_font_size_heading: 15,

  segmented_control_color: brandPrimary,
  segmented_control_height: 27,
  segmented_control_fill_tap: `${brandPrimary}10`,

  tab_bar_fill: "#ebeeef",
  tab_bar_height: 50,

  toast_fill: "rgba(0, 0, 0, .8)",

  search_bar_fill: "#fff",
  search_bar_height: 44,
  search_bar_input_height: 50,
  search_bar_font_size: 24,
  search_color_icon: "#bbbbbb",

  notice_bar_fill: "#fffada",
  notice_bar_height: 36,

  switch_fill: "#4dd865",

  tag_height: 25,
  tag_small_height: 15,

  option_height: 42,

  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex: 999,
};

export type AntThemeTypes = typeof antTheme;

export default antTheme;

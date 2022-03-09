library(tidyverse)

cpi = read_csv("../data/cpi.csv")

cpi_rocni_all = cpi %>% filter(casz_kod=="K") %>% filter(mesic==12) %>% filter(is.na(ucel_tep)) %>% select(hodnota)


vahy_all = c(178.075443, 86.948337,38.945347, 267.373622, 58.333435, 26.544646, 103.689553, 32.611933, 81.481897 ,5.565065 ,57.909566, 62.521156)

cpi_rocni_all_custom = 

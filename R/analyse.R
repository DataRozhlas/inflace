library(tidyverse)
library(jsonlite)

cpi = read_csv("../data/cpi.csv")

cpi_rocni_all = cpi %>% filter(casz_kod=="K") %>% filter(mesic==12) %>% filter(is.na(ucel_tep)) %>% select(hodnota, rok)


vahy_all = c(178.075443, 86.948337,38.945347, 267.373622, 58.333435, 26.544646, 103.689553, 32.611933, 81.481897 ,5.565065 ,57.909566, 62.521156)

cpi_rocni_skupiny = cpi  %>% filter(casz_kod=="K") %>% filter(mesic==12) %>%filter(!is.na(ucel_tep)) %>% select(h=hodnota, r=rok, u=ucel_kod)


cpi_rocni_skupiny$u = as.numeric(cpi_rocni_skupiny$u)

toJSON(cpi_rocni_skupiny)

toJSON(cpi_rocni_all)

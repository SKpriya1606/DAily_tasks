package com.cts.microservices.currencyexchangeservice;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.microservices.currencyexchangeservice.bean.ExchangeValue;

public interface ExchangeValueRepository extends JpaRepository<ExchangeValue,Long>{

	ExchangeValue findByFromAndTo(String from,String to);
}

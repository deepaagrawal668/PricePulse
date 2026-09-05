package com.pricepulse.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class PriceHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double price;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    // getters and setters
}
